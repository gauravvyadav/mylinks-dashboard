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
- ✏️ **Full CRUD Control** - Add, edit, and delete bookmarks without leaving the popup
- 🧠 **Auto Metadata Fetch** - Prefills titles & descriptions by visiting the link in the background
- 💼 **Import & Export** - Backup as JSON or generate a standalone, beautiful HTML dashboard you can open anywhere

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
6. Use "Add Bookmark" to create a link directly from the popup and fetch metadata instantly

### Import & Export

- **Import**: Click `Import`, choose either a MyLinks `.json` backup or Chrome's default `.html` export, and pick the destination folder. The extension recreates each link (including descriptions and manual categories) inside Chrome's bookmark tree.
- **Default Export (.json)**: Creates a structured backup (`meta` + `bookmarks`) so you can re-import later or process the data elsewhere.
- **Beautiful HTML Export (.html)**: Generates a self-contained, responsive web page with all your bookmarks organized by category—perfect for sharing or opening offline in any browser.

### Smart Metadata Fetch

When you paste a URL while adding/editing a bookmark, the popup can auto-visit the page (thanks to the `<all_urls>` host permission) to grab the `<title>` and `<meta description>`. You can trigger it manually via **Fetch details** if the link changes or if you want to refresh the summary.

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
