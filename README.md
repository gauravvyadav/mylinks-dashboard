# MyLinks Dashboard - Chrome Extension

A beautiful bookmark manager extension for Chrome with AI-powered categorization.

![MyLinks Dashboard](screenshot.png)

## Features

- 📚 **Beautiful UI** - Clean, modern interface inspired by professional dashboard designs
- 🔍 **Quick Search** - Instantly find bookmarks by title, URL, or category
- 🏷️ **Smart Categories** - Automatically organizes bookmarks into categories:
  - AI Tools
  - Development
  - Education
  - Design
  - Finance
  - Entertainment
  - Tools & Utilities
  - Social
  - Shopping
  - News & Media
- 🤖 **AI Categorization** - Uses Chrome's built-in AI (when available) for intelligent categorization
- 💾 **Cached Categories** - Remembers your bookmark categories for fast loading
- 🌐 **Favicon Support** - Shows website favicons for easy recognition

## Installation

### From Source (Developer Mode)

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right corner)
4. Click "Load unpacked"
5. Select the `bookmark-extension` folder
6. The extension icon will appear in your toolbar

### Generate Better Icons (Optional)

1. Open `icons/generate-icons.html` in your browser
2. Right-click each canvas and save as PNG
3. Or click "Download All Icons" button

## Usage

1. Click the extension icon in your Chrome toolbar
2. Browse all your bookmarks in a beautiful grid layout
3. Use the sidebar to filter by category
4. Search for specific bookmarks using the search bar
5. Click "AI Categorize" to automatically sort uncategorized bookmarks

## Chrome AI Feature

This extension supports Chrome's experimental built-in AI for smart categorization. To enable:

1. Use Chrome Canary or Dev channel (version 127+)
2. Enable the following flags in `chrome://flags`:
   - `#optimization-guide-on-device-model`
   - `#prompt-api-for-gemini-nano`
3. Restart Chrome

If Chrome AI is not available, the extension falls back to keyword-based categorization which still works great!

## Permissions

- **bookmarks**: Read your bookmarks to display them
- **storage**: Cache categorization data for faster loading

## Development

### File Structure

```
bookmark-extension/
├── manifest.json       # Extension manifest
├── popup.html          # Main popup UI
├── popup.css           # Styles
├── popup.js            # Application logic
├── icons/              # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md           # This file
```

### Customizing Categories

Edit the `DEFAULT_CATEGORIES` object in `popup.js` to add or modify categories and their keywords.

## License

MIT License - Feel free to use and modify!
