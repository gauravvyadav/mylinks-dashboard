// Background service worker for MyLinks Dashboard
// Handles metadata fetching to bypass CORS restrictions

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fetchMetadata') {
        fetchMetadataFromUrl(request.url)
            .then(metadata => sendResponse({ success: true, metadata }))
            .catch(error => sendResponse({ success: false, error: error.message }));
        return true; // Required for async response
    }
});

async function fetchMetadataFromUrl(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
            },
            credentials: 'omit',
            redirect: 'follow'
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('text/html') && !contentType.includes('application/xhtml')) {
            throw new Error('Not an HTML document');
        }

        const html = await response.text();
        
        // Parse metadata from HTML
        const title = extractTitle(html);
        const description = extractDescription(html);
        const favicon = extractFavicon(html, url);

        return { title, description, favicon };
    } catch (error) {
        console.log('Metadata fetch failed for:', url, error.message);
        return { title: '', description: '', favicon: '' };
    }
}

function extractTitle(html) {
    // Try og:title first
    let match = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i);
    if (match) return decodeHTMLEntities(match[1].trim());

    match = html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:title["']/i);
    if (match) return decodeHTMLEntities(match[1].trim());

    // Try twitter:title
    match = html.match(/<meta[^>]+name=["']twitter:title["'][^>]+content=["']([^"']+)["']/i);
    if (match) return decodeHTMLEntities(match[1].trim());

    // Fall back to <title> tag
    match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (match) return decodeHTMLEntities(match[1].trim());

    return '';
}

function extractDescription(html) {
    // Try og:description first
    let match = html.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i);
    if (match) return decodeHTMLEntities(match[1].trim());

    match = html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:description["']/i);
    if (match) return decodeHTMLEntities(match[1].trim());

    // Try twitter:description
    match = html.match(/<meta[^>]+name=["']twitter:description["'][^>]+content=["']([^"']+)["']/i);
    if (match) return decodeHTMLEntities(match[1].trim());

    // Try standard description meta tag
    match = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
    if (match) return decodeHTMLEntities(match[1].trim());

    match = html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i);
    if (match) return decodeHTMLEntities(match[1].trim());

    return '';
}

function extractFavicon(html, pageUrl) {
    try {
        const url = new URL(pageUrl);
        const baseUrl = `${url.protocol}//${url.host}`;

        // Try to find favicon in HTML
        let match = html.match(/<link[^>]+rel=["'](?:shortcut )?icon["'][^>]+href=["']([^"']+)["']/i);
        if (!match) {
            match = html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["'](?:shortcut )?icon["']/i);
        }

        if (match) {
            const faviconUrl = match[1];
            if (faviconUrl.startsWith('http')) {
                return faviconUrl;
            } else if (faviconUrl.startsWith('//')) {
                return url.protocol + faviconUrl;
            } else if (faviconUrl.startsWith('/')) {
                return baseUrl + faviconUrl;
            } else {
                return baseUrl + '/' + faviconUrl;
            }
        }

        // Default to /favicon.ico
        return baseUrl + '/favicon.ico';
    } catch {
        return '';
    }
}

function decodeHTMLEntities(text) {
    const entities = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#x27;': "'",
        '&apos;': "'",
        '&nbsp;': ' ',
        '&#38;': '&',
        '&#60;': '<',
        '&#62;': '>',
        '&#34;': '"',
    };
    
    return text.replace(/&[#\w]+;/g, entity => entities[entity] || entity);
}
