// ============================================
// MyLinks Dashboard - Chrome Extension
// ============================================

// --- CONSTANTS ---
const CATEGORY_ICONS = {
    all: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    ai: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>',
    development: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    education: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
    design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/></svg>',
    finance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    entertainment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
    tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    social: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    shopping: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    news: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z"/></svg>',
    hosting: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    affiliate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
    uncategorized: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>'
};

const DEFAULT_CATEGORIES = {
    'ai': { 
        name: 'AI Tools', 
        keywords: ['chatgpt', 'openai', 'claude', 'anthropic', 'gemini', 'bard', 'gpt', 'llm', 'copilot', 'midjourney', 'dall-e', 'stable diffusion', 'huggingface', 'replicate', 'perplexity', 'deepseek', 'mistral', 'grok', 'ai chat', 'machine learning', 'neural', 'langchain', 'ollama', 'groq', 'together.ai', 'fireworks.ai', 'leonardo.ai', 'runway', 'pika', 'suno', 'elevenlabs', 'whisper', 'otter.ai', 'firefly', 'blackbox', 'cursor', 'codeium', 'tabnine', 'aifiesta', 'humanize'],
        urlPatterns: ['openai.com', 'anthropic.com', 'chat.openai', 'claude.ai', 'gemini.google', 'perplexity.ai', 'huggingface.co', 'midjourney.com', 'stability.ai', 'replicate.com', 'deepseek.com', 'mistral.ai', 'grok.com', 'leonardo.ai', 'firefly.adobe', 'useblackbox', 'aifiesta']
    },
    'development': { 
        name: 'Development', 
        keywords: ['github', 'gitlab', 'bitbucket', 'stackoverflow', 'npm', 'npmjs', 'yarn', 'pypi', 'developer', 'api', 'code', 'programming', 'documentation', 'docs', 'vercel', 'netlify', 'heroku', 'aws', 'azure', 'docker', 'kubernetes', 'jenkins', 'webpack', 'vite', 'react', 'angular', 'vue', 'node', 'python', 'javascript', 'typescript', 'golang', 'rust', 'swift', 'kotlin', 'devtools', 'postman', 'insomnia', 'swagger', 'graphql', 'mongodb', 'postgres', 'mysql', 'redis', 'firebase', 'supabase', 'appwrite', 'neon', 'planetscale', 'prisma', 'drizzle', 'tailwind', 'bootstrap', 'shadcn', 'nextui', 'mantine', 'lexical', 'editor.js', 'puppeteer', 'playwright', 'cypress', 'jest', 'vitest', 'deepsource', 'sonarqube', 'eslint', 'prettier', 'console', 'terminal', 'ssh', 'git', 'regex', 'json', 'yaml', 'xml', 'html', 'css', 'jsx', 'tsx'],
        urlPatterns: ['github.com', 'gitlab.com', 'stackoverflow.com', 'npmjs.com', 'vercel.com', 'netlify.com', 'aws.amazon', 'azure.microsoft', 'docker.com', 'firebase.google', 'supabase.com', 'appwrite.io', 'neon.tech', 'planetscale.com', 'tailwindcss.com', 'react.dev', 'vuejs.org', 'angular.io', 'nodejs.org', 'python.org', 'developer.mozilla', 'devdocs.io', 'codepen.io', 'codesandbox.io', 'replit.com', 'stackblitz.com', 'jsfiddle.net']
    },
    'education': { 
        name: 'Education', 
        keywords: ['learn', 'course', 'tutorial', 'udemy', 'coursera', 'edx', 'academy', 'training', 'school', 'university', 'study', 'education', 'lesson', 'lecture', 'class', 'skill', 'bootcamp', 'certification', 'certificate', 'degree', 'instructor', 'student', 'teaching', 'homework', 'exam', 'quiz', 'practice', 'exercise', 'hackerrank', 'leetcode', 'codewars', 'exercism', 'freecodecamp', 'codecademy', 'pluralsight', 'skillshare', 'linkedin learning', 'masterclass', 'khan academy', 'brilliant', 'datacamp', 'kaggle', 'cs50', 'mit', 'stanford', 'harvard'],
        urlPatterns: ['udemy.com', 'coursera.org', 'edx.org', 'skillshare.com', 'pluralsight.com', 'codecademy.com', 'freecodecamp.org', 'khanacademy.org', 'brilliant.org', 'hackerrank.com', 'leetcode.com', 'codewars.com', 'exercism.org', 'datacamp.com', 'kaggle.com', 'linkedin.com/learning', 'educative.io', 'egghead.io', 'frontendmasters.com', 'laracasts.com', 'tutorialspoint.com', 'w3schools.com', 'geeksforgeeks.org']
    },
    'design': { 
        name: 'Design', 
        keywords: ['figma', 'dribbble', 'behance', 'design', 'ui', 'ux', 'adobe', 'photoshop', 'illustrator', 'canva', 'sketch', 'prototype', 'wireframe', 'mockup', 'color', 'palette', 'font', 'typography', 'icon', 'svg', 'vector', 'graphic', 'logo', 'brand', 'template', 'theme', 'layout', 'animation', 'motion', 'framer', 'webflow', 'invision', 'zeplin', 'principle', 'lottie', 'rive', 'spline', 'blender', '3d', 'render', 'illustration', 'creative', 'pixel', 'retina', 'responsive', 'material design', 'flat design', 'gradient', 'shadow', 'glassmorphism', 'neumorphism', 'tailwind', 'css', 'styled', 'emotion', 'sass', 'less'],
        urlPatterns: ['figma.com', 'dribbble.com', 'behance.net', 'adobe.com', 'canva.com', 'sketch.com', 'invisionapp.com', 'framer.com', 'webflow.com', 'lottiefiles.com', 'svgrepo.com', 'iconify.design', 'fontawesome.com', 'fonts.google.com', 'coolors.co', 'colorhunt.co', 'awwwards.com', 'cssdesignawards.com', 'themeforest.net', 'templatemonster.com', 'ui8.net', 'creativemarket.com', 'envato.com', 'unsplash.com', 'pexels.com', 'pixabay.com']
    },
    'finance': { 
        name: 'Finance', 
        keywords: ['bank', 'banking', 'finance', 'invest', 'investment', 'stock', 'stocks', 'trading', 'trade', 'crypto', 'bitcoin', 'ethereum', 'blockchain', 'nft', 'defi', 'wallet', 'portfolio', 'fund', 'mutual fund', 'etf', 'bond', 'dividend', 'profit', 'loss', 'market', 'bull', 'bear', 'ipo', 'forex', 'currency', 'exchange', 'broker', 'brokerage', 'fintech', 'payment', 'paypal', 'stripe', 'razorpay', 'tax', 'invoice', 'accounting', 'budget', 'savings', 'loan', 'mortgage', 'credit', 'debit', 'insurance', 'groww', 'zerodha', 'upstox', 'robinhood', 'coinbase', 'binance'],
        urlPatterns: ['groww.in', 'zerodha.com', 'upstox.com', 'robinhood.com', 'coinbase.com', 'binance.com', 'paypal.com', 'stripe.com', 'razorpay.com', 'tradingview.com', 'investing.com', 'moneycontrol.com', 'economictimes.com', 'bloomberg.com', 'yahoo.com/finance', 'finance.yahoo', 'bankofamerica.com', 'chase.com', 'wellsfargo.com', 'icicibank.com', 'hdfcbank.com', 'sbi.co.in']
    },
    'entertainment': { 
        name: 'Entertainment', 
        keywords: ['youtube', 'netflix', 'spotify', 'twitch', 'prime video', 'disney', 'hulu', 'hbo', 'movie', 'movies', 'film', 'cinema', 'show', 'series', 'episode', 'season', 'watch', 'stream', 'streaming', 'video', 'music', 'song', 'album', 'artist', 'playlist', 'podcast', 'radio', 'audio', 'game', 'gaming', 'gamer', 'play', 'steam', 'epic games', 'xbox', 'playstation', 'nintendo', 'twitch', 'esports', 'meme', 'funny', 'comedy', 'entertainment', 'celebrity', 'hollywood', 'bollywood', 'anime', 'manga', 'cartoon', 'tv', 'television', 'channel', 'live', 'premiere', 'trailer', 'imdb', 'rotten tomatoes', 'metacritic'],
        urlPatterns: ['youtube.com', 'netflix.com', 'spotify.com', 'twitch.tv', 'primevideo.com', 'disneyplus.com', 'hulu.com', 'hbomax.com', 'apple.com/tv', 'soundcloud.com', 'tiktok.com', 'vimeo.com', 'dailymotion.com', 'store.steampowered.com', 'epicgames.com', 'xbox.com', 'playstation.com', 'nintendo.com', 'ign.com', 'gamespot.com', 'imdb.com', 'rottentomatoes.com', 'themoviedb.org', 'crunchyroll.com', 'funimation.com']
    },
    'tools': { 
        name: 'Tools & Utilities', 
        keywords: ['tool', 'tools', 'utility', 'utilities', 'converter', 'convert', 'generator', 'generate', 'calculator', 'calculate', 'editor', 'edit', 'compress', 'compression', 'optimize', 'minify', 'format', 'formatter', 'beautify', 'validator', 'checker', 'tester', 'test', 'debug', 'scan', 'scanner', 'pdf', 'word', 'excel', 'powerpoint', 'document', 'spreadsheet', 'presentation', 'file', 'download', 'upload', 'share', 'transfer', 'sync', 'backup', 'cloud', 'storage', 'drive', 'dropbox', 'mega', 'wetransfer', 'pastebin', 'password', 'vpn', 'proxy', 'privacy', 'security', 'encrypt', 'decrypt', 'hash', 'qr code', 'barcode', 'url shortener', 'bitly', 'timer', 'clock', 'calendar', 'schedule', 'reminder', 'note', 'notes', 'todo', 'task', 'productivity', 'notion', 'trello', 'asana', 'monday', 'clickup', 'linear', 'jira', 'confluence', 'slack', 'zoom', 'meet', 'teams', 'grammarly', 'quillbot', 'plagiarism', 'spell check'],
        urlPatterns: ['notion.so', 'trello.com', 'asana.com', 'monday.com', 'clickup.com', 'linear.app', 'jira.atlassian', 'confluence.atlassian', 'dropbox.com', 'drive.google', 'onedrive.live', 'mega.nz', 'wetransfer.com', 'pastebin.com', 'bitly.com', 'tinyurl.com', 'grammarly.com', 'quillbot.com', 'smallpdf.com', 'ilovepdf.com', 'pdf.online', 'tinypng.com', 'squoosh.app', 'remove.bg', 'unscreen.com', 'convertio.co', 'online-convert.com', 'json2csharp.com', 'transform.tools', 'regex101.com', 'crontab.guru']
    },
    'social': { 
        name: 'Social', 
        keywords: ['facebook', 'twitter', 'x.com', 'linkedin', 'instagram', 'tiktok', 'snapchat', 'pinterest', 'reddit', 'quora', 'discord', 'slack', 'telegram', 'whatsapp', 'messenger', 'wechat', 'signal', 'viber', 'skype', 'social', 'network', 'friend', 'follow', 'follower', 'post', 'share', 'like', 'comment', 'reply', 'retweet', 'repost', 'story', 'reel', 'short', 'feed', 'timeline', 'profile', 'bio', 'dm', 'message', 'chat', 'group', 'community', 'forum', 'thread', 'subreddit', 'hashtag', 'trending', 'viral', 'influencer', 'creator', 'content'],
        urlPatterns: ['facebook.com', 'twitter.com', 'x.com', 'linkedin.com', 'instagram.com', 'tiktok.com', 'snapchat.com', 'pinterest.com', 'reddit.com', 'quora.com', 'discord.com', 'discord.gg', 'slack.com', 'telegram.org', 't.me', 'web.whatsapp.com', 'messenger.com', 'threads.net', 'mastodon.social', 'bsky.app', 'tumblr.com']
    },
    'shopping': { 
        name: 'Shopping', 
        keywords: ['amazon', 'ebay', 'aliexpress', 'alibaba', 'walmart', 'target', 'bestbuy', 'shop', 'shopping', 'store', 'buy', 'purchase', 'order', 'cart', 'checkout', 'product', 'price', 'discount', 'sale', 'deal', 'deals', 'coupon', 'promo', 'offer', 'bargain', 'cheap', 'affordable', 'expensive', 'luxury', 'brand', 'review', 'rating', 'wishlist', 'compare', 'marketplace', 'ecommerce', 'e-commerce', 'retail', 'wholesale', 'dropship', 'fulfillment', 'shipping', 'delivery', 'track', 'return', 'refund', 'warranty', 'flipkart', 'myntra', 'ajio', 'nykaa', 'etsy', 'shopify', 'woocommerce', 'magento', 'affiliate', 'commission'],
        urlPatterns: ['amazon.com', 'amazon.in', 'ebay.com', 'aliexpress.com', 'alibaba.com', 'walmart.com', 'target.com', 'bestbuy.com', 'flipkart.com', 'myntra.com', 'ajio.com', 'nykaa.com', 'etsy.com', 'shopify.com', 'wish.com', 'banggood.com', 'gearbest.com', 'newegg.com', 'overstock.com', 'wayfair.com', 'ikea.com', 'homedepot.com', 'lowes.com', 'costco.com', 'samsclub.com']
    },
    'news': { 
        name: 'News & Media', 
        keywords: ['news', 'breaking', 'headline', 'report', 'reporter', 'journalist', 'journalism', 'media', 'press', 'article', 'story', 'coverage', 'update', 'latest', 'today', 'daily', 'weekly', 'monthly', 'newspaper', 'magazine', 'publication', 'editorial', 'opinion', 'analysis', 'investigation', 'exclusive', 'interview', 'podcast', 'blog', 'blogger', 'vlog', 'newsletter', 'subscribe', 'rss', 'feed', 'cnn', 'bbc', 'nytimes', 'washington post', 'guardian', 'reuters', 'associated press', 'ap news', 'times', 'post', 'herald', 'tribune', 'chronicle', 'gazette', 'observer', 'independent', 'telegraph', 'economist', 'forbes', 'fortune', 'business insider', 'techcrunch', 'wired', 'verge', 'engadget', 'mashable', 'huffpost', 'buzzfeed', 'vice', 'vox', 'medium', 'substack', 'politico', 'axios'],
        urlPatterns: ['cnn.com', 'bbc.com', 'bbc.co.uk', 'nytimes.com', 'washingtonpost.com', 'theguardian.com', 'reuters.com', 'apnews.com', 'bloomberg.com', 'forbes.com', 'fortune.com', 'businessinsider.com', 'techcrunch.com', 'wired.com', 'theverge.com', 'engadget.com', 'mashable.com', 'huffpost.com', 'buzzfeed.com', 'vice.com', 'vox.com', 'medium.com', 'substack.com', 'politico.com', 'axios.com', 'news.google.com', 'news.ycombinator.com', 'slashdot.org', 'arstechnica.com', 'zdnet.com', 'cnet.com', 'tomsguide.com', 'tomshardware.com', 'androidcentral.com', '9to5google.com', '9to5mac.com', 'macrumors.com']
    },
    'hosting': { 
        name: 'Hosting & Server', 
        keywords: ['hosting', 'host', 'server', 'vps', 'dedicated', 'shared', 'cloud', 'domain', 'dns', 'ssl', 'certificate', 'cpanel', 'plesk', 'whm', 'ssh', 'ftp', 'sftp', 'apache', 'nginx', 'iis', 'php', 'mysql', 'phpmyadmin', 'wordpress', 'cms', 'datacenter', 'uptime', 'bandwidth', 'storage', 'backup', 'cdn', 'cloudflare', 'fastly', 'akamai', 'digitalocean', 'linode', 'vultr', 'hetzner', 'ovh', 'godaddy', 'namecheap', 'bluehost', 'hostgator', 'siteground', 'dreamhost', 'a2hosting', 'ionos', 'aws', 'gcp', 'azure', 'oracle cloud', 'ibm cloud', 'render', 'railway', 'fly.io', 'deno deploy', 'cloudpanel', 'hestia', 'vesta', 'webmin', 'virtualmin'],
        urlPatterns: ['digitalocean.com', 'linode.com', 'vultr.com', 'hetzner.com', 'ovh.com', 'godaddy.com', 'namecheap.com', 'bluehost.com', 'hostgator.com', 'siteground.com', 'dreamhost.com', 'a2hosting.com', 'ionos.com', 'cloudflare.com', 'fastly.com', 'render.com', 'railway.app', 'fly.io', 'deno.com', 'netlify.com', 'vercel.com', 'heroku.com', 'cpanel.net', 'plesk.com', 'zerossl.com', 'letsencrypt.org', 'cloudpanel.io', 'hestiacp.com', 'localwp.com']
    },
    'affiliate': { 
        name: 'Affiliate & Marketing', 
        keywords: ['affiliate', 'commission', 'referral', 'partner', 'partnership', 'cpa', 'cpc', 'cpm', 'ppc', 'seo', 'sem', 'marketing', 'advertise', 'advertising', 'ads', 'adsense', 'adwords', 'campaign', 'conversion', 'funnel', 'landing page', 'squeeze page', 'lead', 'traffic', 'click', 'impression', 'ctr', 'roi', 'analytics', 'tracking', 'pixel', 'retargeting', 'remarketing', 'email marketing', 'mailchimp', 'sendinblue', 'convertkit', 'aweber', 'getresponse', 'activecampaign', 'hubspot', 'salesforce', 'crm', 'automation', 'webinar', 'influencer', 'sponsor', 'monetize', 'revenue', 'earning', 'payout', 'network', 'offer', 'link', 'banner', 'creative', 'admitad', 'cj', 'shareasale', 'rakuten', 'impact', 'awin', 'clickbank', 'jvzoo', 'warrior plus', 'semrush', 'ahrefs', 'moz', 'ubersuggest', 'google ads', 'facebook ads', 'instagram ads'],
        urlPatterns: ['affiliate-program.amazon', 'admitad.com', 'cj.com', 'shareasale.com', 'rakutenadvertising.com', 'impact.com', 'awin.com', 'clickbank.com', 'jvzoo.com', 'semrush.com', 'ahrefs.com', 'moz.com', 'neilpatel.com', 'hubspot.com', 'mailchimp.com', 'convertkit.com', 'aweber.com', 'getresponse.com', 'activecampaign.com', 'search.google.com/search-console', 'analytics.google.com', 'ads.google.com', 'business.facebook.com', 'bing.com/webmasters', 'indoleads.com', 'skimlinks.com', 'partnerize.com', 'commissionfactory.com', 'involve.asia']
    }
};

// --- STATE ---
let allBookmarks = [];
let categorizedBookmarks = {};
let activeCategory = 'all';
let searchQuery = '';

// --- DOM ELEMENTS ---
const categoryNav = document.getElementById('category-nav');
const bookmarksGrid = document.getElementById('bookmarks-grid');
const pageTitle = document.getElementById('page-title');
const resultCount = document.getElementById('result-count');
const searchInput = document.getElementById('search-input');
const emptyState = document.getElementById('empty-state');
const loadingState = document.getElementById('loading-state');
const aiStatusBar = document.getElementById('ai-status-bar');
const aiStatusText = document.getElementById('ai-status-text');
const aiCategorizeBtn = document.getElementById('ai-categorize-btn');

// --- INITIALIZATION ---
async function init() {
    // Load bookmarks
    await loadBookmarks();
    
    // Try to load cached categories
    const cached = await loadCachedCategories();
    if (cached) {
        categorizedBookmarks = cached;
        applyCategoriesToBookmarks();
    } else {
        // Apply default keyword-based categorization
        categorizeWithKeywords();
    }
    
    // Render UI
    renderSidebar();
    renderBookmarks();
    hideLoading();
    
    // Event Listeners
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderBookmarks();
    });
    
    aiCategorizeBtn.addEventListener('click', categorizeWithAI);
}

// --- BOOKMARK LOADING ---
async function loadBookmarks() {
    return new Promise((resolve) => {
        chrome.bookmarks.getTree((tree) => {
            allBookmarks = [];
            extractBookmarks(tree);
            resolve();
        });
    });
}

function extractBookmarks(nodes, folderName = '') {
    for (const node of nodes) {
        if (node.url) {
            allBookmarks.push({
                id: node.id,
                title: node.title || 'Untitled',
                url: node.url,
                folder: folderName,
                category: 'uncategorized',
                dateAdded: node.dateAdded
            });
        }
        if (node.children) {
            extractBookmarks(node.children, node.title || folderName);
        }
    }
}

// --- KEYWORD-BASED CATEGORIZATION ---
function categorizeWithKeywords() {
    for (const bookmark of allBookmarks) {
        bookmark.category = findBestCategory(bookmark);
    }
    
    updateCategorizedBookmarks();
}

function findBestCategory(bookmark) {
    const title = (bookmark.title || '').toLowerCase();
    const url = (bookmark.url || '').toLowerCase();
    const folder = (bookmark.folder || '').toLowerCase();
    const text = `${title} ${url} ${folder}`;
    
    let bestMatch = { category: 'uncategorized', score: 0 };
    
    for (const [categoryId, categoryData] of Object.entries(DEFAULT_CATEGORIES)) {
        let score = 0;
        
        // Check URL patterns first (highest priority)
        if (categoryData.urlPatterns) {
            for (const pattern of categoryData.urlPatterns) {
                if (url.includes(pattern.toLowerCase())) {
                    score += 10; // High score for URL match
                }
            }
        }
        
        // Check keywords
        for (const keyword of categoryData.keywords) {
            const kw = keyword.toLowerCase();
            // Exact word boundary match scores higher
            const wordBoundaryRegex = new RegExp(`\\b${escapeRegex(kw)}\\b`, 'i');
            if (wordBoundaryRegex.test(text)) {
                score += 3;
            } else if (text.includes(kw)) {
                score += 1;
            }
        }
        
        // Update best match if this category scores higher
        if (score > bestMatch.score) {
            bestMatch = { category: categoryId, score: score };
        }
    }
    
    return bestMatch.category;
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function updateCategorizedBookmarks() {
    categorizedBookmarks = {};
    for (const bookmark of allBookmarks) {
        const cat = bookmark.category || 'uncategorized';
        if (!categorizedBookmarks[cat]) {
            categorizedBookmarks[cat] = [];
        }
        categorizedBookmarks[cat].push(bookmark.id);
    }
}

function applyCategoriesToBookmarks() {
    for (const [category, ids] of Object.entries(categorizedBookmarks)) {
        for (const id of ids) {
            const bookmark = allBookmarks.find(b => b.id === id);
            if (bookmark) {
                bookmark.category = category;
            }
        }
    }
}

// --- RE-CATEGORIZE FUNCTION ---
async function categorizeWithAI() {
    // Show status
    aiCategorizeBtn.disabled = true;
    showAIStatus('Re-categorizing all bookmarks...');
    
    // Clear cached categories
    await chrome.storage.local.remove(['categorizedBookmarks', 'lastUpdated']);
    
    // Small delay for UI feedback
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Re-categorize all bookmarks
    for (const bookmark of allBookmarks) {
        bookmark.category = 'uncategorized';
    }
    
    // Apply keyword categorization
    categorizeWithKeywords();
    
    // Save to cache
    await saveCachedCategories();
    
    // Update UI
    showAIStatus('Done! Categorized ' + allBookmarks.length + ' bookmarks.');
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    hideAIStatus();
    aiCategorizeBtn.disabled = false;
    
    renderSidebar();
    renderBookmarks();
}

// --- CACHING ---
async function saveCachedCategories() {
    await chrome.storage.local.set({ 
        categorizedBookmarks,
        lastUpdated: Date.now()
    });
}

async function loadCachedCategories() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['categorizedBookmarks', 'lastUpdated'], (result) => {
            if (result.categorizedBookmarks) {
                resolve(result.categorizedBookmarks);
            } else {
                resolve(null);
            }
        });
    });
}

// --- UI HELPERS ---
function showAIStatus(text) {
    aiStatusText.textContent = text;
    aiStatusBar.style.display = 'block';
}

function hideAIStatus() {
    aiStatusBar.style.display = 'none';
}

function hideLoading() {
    loadingState.style.display = 'none';
}

// --- RENDER SIDEBAR ---
function renderSidebar() {
    categoryNav.innerHTML = '';
    
    // All Bookmarks button
    const allBtn = createNavButton('all', 'All Bookmarks', CATEGORY_ICONS.all, allBookmarks.length);
    categoryNav.appendChild(allBtn);
    
    // Categories label
    const label = document.createElement('div');
    label.className = 'nav-label';
    label.textContent = 'Categories';
    categoryNav.appendChild(label);
    
    // Category buttons
    const categoryOrder = ['ai', 'development', 'education', 'design', 'finance', 'entertainment', 'tools', 'social', 'shopping', 'news', 'hosting', 'affiliate', 'uncategorized'];
    
    for (const catId of categoryOrder) {
        const count = allBookmarks.filter(b => b.category === catId).length;
        if (count === 0) continue;
        
        const name = DEFAULT_CATEGORIES[catId]?.name || 'Uncategorized';
        const icon = CATEGORY_ICONS[catId] || CATEGORY_ICONS.uncategorized;
        categoryNav.appendChild(createNavButton(catId, name, icon, count));
    }
}

function createNavButton(id, name, iconSvg, count) {
    const btn = document.createElement('button');
    btn.className = `nav-button ${activeCategory === id ? 'active' : ''}`;
    btn.dataset.categoryId = id;
    btn.innerHTML = `
        ${iconSvg}
        <span>${name}</span>
        <span class="count">${count}</span>
    `;
    btn.addEventListener('click', handleCategoryClick);
    return btn;
}

function handleCategoryClick(e) {
    const btn = e.currentTarget;
    activeCategory = btn.dataset.categoryId;
    renderSidebar();
    renderBookmarks();
}

// --- RENDER BOOKMARKS ---
function renderBookmarks() {
    // Filter bookmarks
    let items = activeCategory === 'all' 
        ? [...allBookmarks]
        : allBookmarks.filter(b => b.category === activeCategory);
    
    // Update page title
    if (activeCategory === 'all') {
        pageTitle.textContent = 'All Bookmarks';
    } else {
        pageTitle.textContent = DEFAULT_CATEGORIES[activeCategory]?.name || 'Uncategorized';
    }
    
    // Filter by search
    if (searchQuery) {
        items = items.filter(item =>
            item.title.toLowerCase().includes(searchQuery) ||
            item.url.toLowerCase().includes(searchQuery) ||
            (DEFAULT_CATEGORIES[item.category]?.name || '').toLowerCase().includes(searchQuery)
        );
    }
    
    // Update count
    resultCount.textContent = `${items.length} ${items.length === 1 ? 'bookmark' : 'bookmarks'}`;
    
    // Clear grid
    bookmarksGrid.innerHTML = '';
    
    if (items.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    // Render cards
    items.forEach(item => {
        const card = createBookmarkCard(item);
        bookmarksGrid.appendChild(card);
    });
}

function createBookmarkCard(bookmark) {
    const card = document.createElement('a');
    card.href = bookmark.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'bookmark-card';
    
    let domain = '';
    try {
        domain = new URL(bookmark.url).hostname.replace('www.', '');
    } catch (e) {
        domain = bookmark.url;
    }
    
    const categoryName = DEFAULT_CATEGORIES[bookmark.category]?.name || 'Uncategorized';
    const categoryClass = bookmark.category !== 'uncategorized' ? bookmark.category : '';
    
    card.innerHTML = `
        <div class="external-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
        </div>
        <div class="card-header">
            <div class="favicon-container">
                <img src="https://www.google.com/s2/favicons?domain=${domain}&sz=32" 
                     alt=""
                     class="favicon-img">
                <svg class="favicon-fallback" style="display:none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
            </div>
            <div class="card-info">
                <div class="card-title">${escapeHtml(bookmark.title)}</div>
                <div class="card-domain">${escapeHtml(domain)}</div>
            </div>
        </div>
        <div class="card-category">
            <span class="category-tag ${categoryClass}">${categoryName}</span>
        </div>
    `;
    
    // Add error handler for favicon
    const faviconImg = card.querySelector('.favicon-img');
    faviconImg.addEventListener('error', handleFaviconError);
    
    return card;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function handleFaviconError(e) {
    const img = e.target;
    img.style.display = 'none';
    const fallback = img.nextElementSibling;
    if (fallback) {
        fallback.style.display = 'block';
    }
}

// --- START ---
document.addEventListener('DOMContentLoaded', init);
