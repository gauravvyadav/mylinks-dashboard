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
    health: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    travel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
    food: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
    sports: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    photography: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    books: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    science: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6v2H9zM10 5v6l-4 8h12l-4-8V5"/><circle cx="12" cy="17" r="1"/></svg>',
    automotive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17h14v-5H5z"/><path d="M19 12l-2-5H7l-2 5"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>',
    realestate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    legal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v22"/><path d="M1 11l6-6 6 6"/><path d="M17 5l6 6-6 6"/><path d="M4 17h6"/><path d="M14 17h6"/></svg>',
    government: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 21h16"/><path d="M4 21V10l8-6 8 6v11"/><path d="M9 21v-6h6v6"/><path d="M3 10h18"/></svg>',
    jobs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    dating: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    religion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20M12 6l-4 4M12 6l4 4"/></svg>',
    pets: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg>',
    kids: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="4" r="2"/><path d="M12 6v4"/><path d="M8 14l4-4 4 4"/><path d="M8 14v6"/><path d="M16 14v6"/></svg>',
    fashion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    beauty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9z"/></svg>',
    music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    art: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
    writing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/></svg>',
    freelance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    crypto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    security: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    analytics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    podcast: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
    gaming: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>',
    anime: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
    comics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="12"/></svg>',
    reference: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    weather: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>',
    maps: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
    environment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"/></svg>',
    diy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    homeimprovement: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    gardening: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 21h10"/><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M12 3v18"/></svg>',
    architecture: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
    interiordesign: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2"/><path d="M17 22v-5"/><path d="M7 22v-5"/><path d="M2 12h20"/></svg>',
    electronics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    software: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    startups: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    business: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect x="2" y="10" width="20" height="10" rx="2"/></svg>',
    nonprofit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    philosophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    psychology: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"/><circle cx="12" cy="12" r="2"/></svg>',
    languages: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    military: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
    aviation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
    maritime: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 2v3"/></svg>',
    outdoor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>',
    hunting: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    cycling: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h3"/></svg>',
    running: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="5" r="2"/><path d="m2 21 6-6 3 3 5-5 4 4"/></svg>',
    yoga: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M12 22V8"/><path d="m5 12 7-2 7 2"/></svg>',
    martialarts: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="4" r="2"/><path d="m6 21 6-9 6 9"/><path d="M12 12v-1"/></svg>',
    golf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 18v4"/><path d="M7 22h10"/><circle cx="12" cy="8" r="6"/></svg>',
    fitness: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>',
    dance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="4" r="2"/><path d="m8 22 4-10 4 10"/><path d="m6 10 6 2 6-2"/></svg>',
    wedding: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    baby: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>',
    senior: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M12 22v-8"/><path d="M7 22l3-8"/><path d="M17 22l-3-8"/><path d="M8 12h8"/></svg>',
    disability: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="2"/><path d="M12 22v-8"/><circle cx="12" cy="18" r="4"/><path d="M8 12h8"/></svg>',
    lgbtq: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    mentalhealth: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
    addiction: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 14.14 14.14"/></svg>',
    insurance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    lottery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m9 9 6 6"/><path d="m15 9-6 6"/></svg>',
    automation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    nocode: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>',
    iot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5.636 18.364a9 9 0 0 1 0-12.728"/><path d="M18.364 5.636a9 9 0 0 1 0 12.728"/><path d="M8.464 15.536a5 5 0 0 1 0-7.072"/><path d="M15.536 8.464a5 5 0 0 1 0 7.072"/><circle cx="12" cy="12" r="1"/></svg>',
    vr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M12 12h.01"/><path d="M7 12h.01"/><path d="M17 12h.01"/></svg>',
    blockchain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="6" height="6"/><rect x="16" y="7" width="6" height="6"/><rect x="9" y="2" width="6" height="6"/><rect x="9" y="16" width="6" height="6"/><path d="M6 10h4"/><path d="M14 10h4"/><path d="M12 8v4"/><path d="M12 14v4"/></svg>',
    cloudservices: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>',
    devops: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4"/><path d="m6.8 15-3.5 2"/><path d="m20.7 7-3.5 2"/><path d="M6.8 9 3.3 7"/><path d="m20.7 17-3.5-2"/><path d="m9 22 3-8 3 8"/><path d="M8 6h8"/><circle cx="12" cy="17" r="3"/></svg>',
    testing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6v2H9z"/><path d="M5 8V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/><path d="M3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/><path d="M9 14v3"/><path d="M15 14v3"/><path d="M9 8l3 3 3-3"/></svg>',
    api: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6H4z"/><path d="M14 14h6v6h-6z"/><path d="M10 7h4"/><path d="M7 10v4"/><path d="M17 10v4"/><path d="M10 17h4"/></svg>',
    mobile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    opensource: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="22"/></svg>',
    linux: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 6v6l4 2"/></svg>',
    windows: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h8V3H3z"/><path d="M13 12h8V3h-8z"/><path d="M3 21h8v-7H3z"/><path d="M13 21h8v-7h-8z"/></svg>',
    macos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>',
    productivity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    notesknowledge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',
    presentations: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="m6 10 3-3 2 2 5-5"/></svg>',
    spreadsheets: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>',
    communication: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
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
    },
    'health': {
        name: 'Health & Fitness',
        keywords: ['health', 'fitness', 'gym', 'workout', 'exercise', 'yoga', 'meditation', 'wellness', 'nutrition', 'diet', 'weight loss', 'muscle', 'cardio', 'running', 'cycling', 'swimming', 'sports', 'athlete', 'training', 'personal trainer', 'supplement', 'vitamin', 'protein', 'healthy', 'medical', 'doctor', 'hospital', 'clinic', 'pharmacy', 'medicine', 'prescription', 'disease', 'symptom', 'diagnosis', 'treatment', 'therapy', 'mental health', 'anxiety', 'depression', 'sleep', 'insomnia', 'stress', 'mindfulness', 'self-care', 'fitbit', 'strava', 'myfitnesspal', 'headspace', 'calm', 'peloton'],
        urlPatterns: ['webmd.com', 'healthline.com', 'mayoclinic.org', 'nih.gov', 'cdc.gov', 'who.int', 'myfitnesspal.com', 'strava.com', 'fitbit.com', 'peloton.com', 'headspace.com', 'calm.com', 'nhs.uk', 'drugs.com', 'medscape.com', 'everydayhealth.com']
    },
    'travel': {
        name: 'Travel & Tourism',
        keywords: ['travel', 'trip', 'vacation', 'holiday', 'tour', 'tourism', 'tourist', 'flight', 'airline', 'airport', 'hotel', 'hostel', 'airbnb', 'booking', 'reservation', 'destination', 'itinerary', 'passport', 'visa', 'luggage', 'backpack', 'adventure', 'explore', 'journey', 'road trip', 'cruise', 'beach', 'mountain', 'city break', 'sightseeing', 'landmark', 'monument', 'museum', 'guide', 'map', 'navigation', 'tripadvisor', 'expedia', 'kayak', 'skyscanner', 'lonely planet'],
        urlPatterns: ['booking.com', 'airbnb.com', 'expedia.com', 'tripadvisor.com', 'kayak.com', 'skyscanner.com', 'hotels.com', 'agoda.com', 'trivago.com', 'lonelyplanet.com', 'google.com/travel', 'maps.google.com', 'rome2rio.com', 'hostelworld.com', 'vrbo.com']
    },
    'food': {
        name: 'Food & Recipes',
        keywords: ['food', 'recipe', 'cooking', 'cook', 'chef', 'kitchen', 'restaurant', 'cafe', 'menu', 'dish', 'meal', 'breakfast', 'lunch', 'dinner', 'snack', 'dessert', 'baking', 'bake', 'ingredient', 'grocery', 'delivery', 'takeout', 'order', 'cuisine', 'vegetarian', 'vegan', 'gluten-free', 'healthy eating', 'nutrition', 'calorie', 'doordash', 'ubereats', 'grubhub', 'zomato', 'swiggy', 'yelp', 'allrecipes', 'tasty', 'delicious'],
        urlPatterns: ['allrecipes.com', 'food.com', 'foodnetwork.com', 'epicurious.com', 'bonappetit.com', 'tasty.co', 'delish.com', 'seriouseats.com', 'yelp.com', 'doordash.com', 'ubereats.com', 'grubhub.com', 'zomato.com', 'swiggy.com', 'opentable.com']
    },
    'sports': {
        name: 'Sports',
        keywords: ['sports', 'football', 'soccer', 'basketball', 'baseball', 'cricket', 'tennis', 'golf', 'hockey', 'rugby', 'volleyball', 'badminton', 'table tennis', 'athletics', 'olympics', 'world cup', 'league', 'championship', 'tournament', 'match', 'game', 'score', 'team', 'player', 'coach', 'stadium', 'arena', 'espn', 'nba', 'nfl', 'mlb', 'fifa', 'ufc', 'boxing', 'mma', 'f1', 'formula 1', 'motorsport', 'racing'],
        urlPatterns: ['espn.com', 'sports.yahoo.com', 'nba.com', 'nfl.com', 'mlb.com', 'fifa.com', 'uefa.com', 'premierleague.com', 'cricbuzz.com', 'espncricinfo.com', 'bleacherreport.com', 'cbssports.com', 'skysports.com', 'bbc.com/sport', 'goal.com']
    },
    'photography': {
        name: 'Photography',
        keywords: ['photography', 'photo', 'photograph', 'camera', 'lens', 'dslr', 'mirrorless', 'portrait', 'landscape', 'wildlife', 'street photography', 'studio', 'lighting', 'flash', 'tripod', 'editing', 'lightroom', 'photoshop', 'raw', 'jpeg', 'exposure', 'aperture', 'shutter', 'iso', 'focus', 'composition', 'filter', 'preset', '500px', 'flickr', 'instagram', 'stock photo', 'getty', 'shutterstock'],
        urlPatterns: ['500px.com', 'flickr.com', 'unsplash.com', 'pexels.com', 'shutterstock.com', 'gettyimages.com', 'istockphoto.com', 'adobe.com/lightroom', 'dpreview.com', 'petapixel.com', 'fstoppers.com', 'photographylife.com']
    },
    'books': {
        name: 'Books & Reading',
        keywords: ['book', 'books', 'reading', 'read', 'ebook', 'kindle', 'audiobook', 'author', 'writer', 'novel', 'fiction', 'non-fiction', 'biography', 'memoir', 'thriller', 'mystery', 'romance', 'fantasy', 'sci-fi', 'science fiction', 'horror', 'self-help', 'bestseller', 'library', 'bookstore', 'goodreads', 'amazon kindle', 'audible', 'literature', 'poetry', 'publisher', 'publishing'],
        urlPatterns: ['goodreads.com', 'amazon.com/kindle', 'audible.com', 'scribd.com', 'libgen.is', 'gutenberg.org', 'openlibrary.org', 'barnesandnoble.com', 'bookdepository.com', 'kobo.com', 'storytel.com', 'blinkist.com']
    },
    'science': {
        name: 'Science & Research',
        keywords: ['science', 'research', 'study', 'experiment', 'laboratory', 'scientist', 'researcher', 'physics', 'chemistry', 'biology', 'astronomy', 'space', 'nasa', 'universe', 'planet', 'star', 'galaxy', 'quantum', 'atom', 'molecule', 'cell', 'dna', 'genetics', 'evolution', 'climate', 'environment', 'ecology', 'nature', 'discovery', 'innovation', 'journal', 'paper', 'thesis', 'academic', 'scholar', 'peer review'],
        urlPatterns: ['nature.com', 'sciencemag.org', 'scientificamerican.com', 'newscientist.com', 'nasa.gov', 'space.com', 'arxiv.org', 'scholar.google.com', 'researchgate.net', 'academia.edu', 'pubmed.gov', 'sciencedirect.com', 'springer.com', 'wiley.com']
    },
    'automotive': {
        name: 'Automotive & Cars',
        keywords: ['car', 'cars', 'automobile', 'automotive', 'vehicle', 'truck', 'suv', 'sedan', 'coupe', 'hatchback', 'electric car', 'ev', 'tesla', 'hybrid', 'engine', 'motor', 'horsepower', 'speed', 'driving', 'driver', 'license', 'insurance', 'dealership', 'used car', 'new car', 'review', 'test drive', 'motorcycle', 'bike', 'scooter', 'fuel', 'gas', 'oil', 'maintenance', 'repair', 'mechanic', 'parts', 'accessories'],
        urlPatterns: ['cars.com', 'autotrader.com', 'carmax.com', 'edmunds.com', 'kbb.com', 'motortrend.com', 'caranddriver.com', 'autoblog.com', 'jalopnik.com', 'tesla.com', 'toyota.com', 'ford.com', 'bmw.com', 'mercedes-benz.com', 'cargurus.com']
    },
    'realestate': {
        name: 'Real Estate',
        keywords: ['real estate', 'property', 'house', 'home', 'apartment', 'condo', 'flat', 'rent', 'rental', 'buy', 'sell', 'mortgage', 'loan', 'interest rate', 'down payment', 'realtor', 'agent', 'broker', 'listing', 'mls', 'zillow', 'trulia', 'redfin', 'land', 'lot', 'commercial', 'residential', 'investment property', 'landlord', 'tenant', 'lease', 'contract', 'closing', 'escrow', 'appraisal', 'inspection'],
        urlPatterns: ['zillow.com', 'trulia.com', 'redfin.com', 'realtor.com', 'apartments.com', 'rent.com', 'hotpads.com', 'rightmove.co.uk', 'zoopla.co.uk', '99acres.com', 'magicbricks.com', 'housing.com', 'compass.com', 'coldwellbanker.com']
    },
    'legal': {
        name: 'Legal & Law',
        keywords: ['legal', 'law', 'lawyer', 'attorney', 'court', 'judge', 'case', 'lawsuit', 'litigation', 'contract', 'agreement', 'terms', 'conditions', 'privacy policy', 'copyright', 'trademark', 'patent', 'intellectual property', 'criminal', 'civil', 'family law', 'divorce', 'custody', 'immigration', 'visa', 'citizenship', 'tax law', 'corporate law', 'business law', 'legal advice', 'consultation', 'firm'],
        urlPatterns: ['law.cornell.edu', 'findlaw.com', 'justia.com', 'avvo.com', 'legalzoom.com', 'rocketlawyer.com', 'nolo.com', 'martindale.com', 'law.com', 'lexisnexis.com', 'westlaw.com', 'courtlistener.com']
    },
    'government': {
        name: 'Government & Politics',
        keywords: ['government', 'politics', 'political', 'election', 'vote', 'voting', 'democracy', 'president', 'prime minister', 'congress', 'parliament', 'senate', 'representative', 'governor', 'mayor', 'policy', 'legislation', 'bill', 'law', 'regulation', 'tax', 'public service', 'citizen', 'immigration', 'passport', 'visa', 'license', 'permit', 'registration', 'federal', 'state', 'local', 'municipal'],
        urlPatterns: ['usa.gov', 'whitehouse.gov', 'congress.gov', 'senate.gov', 'house.gov', 'gov.uk', 'canada.ca', 'india.gov.in', 'europa.eu', 'un.org', 'worldbank.org', 'imf.org', 'oecd.org', 'politico.com', 'thehill.com']
    },
    'jobs': {
        name: 'Jobs & Careers',
        keywords: ['job', 'jobs', 'career', 'employment', 'hire', 'hiring', 'recruit', 'recruitment', 'resume', 'cv', 'cover letter', 'interview', 'salary', 'compensation', 'benefits', 'remote', 'work from home', 'wfh', 'office', 'full-time', 'part-time', 'contract', 'freelance', 'intern', 'internship', 'entry level', 'senior', 'manager', 'director', 'executive', 'linkedin', 'indeed', 'glassdoor', 'monster', 'ziprecruiter'],
        urlPatterns: ['linkedin.com/jobs', 'indeed.com', 'glassdoor.com', 'monster.com', 'ziprecruiter.com', 'careerbuilder.com', 'dice.com', 'simplyhired.com', 'angel.co', 'wellfound.com', 'hired.com', 'lever.co', 'greenhouse.io', 'workday.com', 'naukri.com']
    },
    'dating': {
        name: 'Dating & Relationships',
        keywords: ['dating', 'date', 'relationship', 'love', 'romance', 'match', 'matchmaking', 'single', 'singles', 'couple', 'partner', 'marriage', 'wedding', 'engagement', 'tinder', 'bumble', 'hinge', 'okcupid', 'match.com', 'eharmony', 'plenty of fish', 'coffee meets bagel', 'speed dating', 'blind date', 'online dating', 'swipe', 'profile', 'compatibility'],
        urlPatterns: ['tinder.com', 'bumble.com', 'hinge.co', 'okcupid.com', 'match.com', 'eharmony.com', 'pof.com', 'coffeemeetsbagel.com', 'zoosk.com', 'elitesingles.com', 'silversingles.com', 'christianmingle.com', 'jdate.com', 'grindr.com']
    },
    'religion': {
        name: 'Religion & Spirituality',
        keywords: ['religion', 'religious', 'spiritual', 'spirituality', 'faith', 'belief', 'church', 'mosque', 'temple', 'synagogue', 'god', 'prayer', 'worship', 'bible', 'quran', 'torah', 'scripture', 'sermon', 'pastor', 'priest', 'imam', 'rabbi', 'christian', 'muslim', 'jewish', 'hindu', 'buddhist', 'meditation', 'soul', 'afterlife', 'heaven', 'enlightenment'],
        urlPatterns: ['bible.com', 'biblegateway.com', 'quran.com', 'chabad.org', 'vatican.va', 'churchofjesuschrist.org', 'beliefnet.com', 'crosswalk.com', 'gotquestions.org', 'islamqa.info', 'hinduismtoday.com', 'buddhanet.net']
    },
    'pets': {
        name: 'Pets & Animals',
        keywords: ['pet', 'pets', 'animal', 'animals', 'dog', 'cat', 'puppy', 'kitten', 'bird', 'fish', 'rabbit', 'hamster', 'guinea pig', 'reptile', 'turtle', 'snake', 'veterinarian', 'vet', 'pet food', 'pet store', 'grooming', 'training', 'adoption', 'rescue', 'shelter', 'breed', 'breeder', 'collar', 'leash', 'cage', 'aquarium', 'pet insurance'],
        urlPatterns: ['petfinder.com', 'chewy.com', 'petsmart.com', 'petco.com', 'akc.com', 'aspca.org', 'humanesociety.org', 'rover.com', 'wag.com', 'barkbox.com', 'vetstreet.com', 'petmd.com', 'dogster.com', 'catster.com']
    },
    'kids': {
        name: 'Kids & Parenting',
        keywords: ['kids', 'children', 'child', 'baby', 'infant', 'toddler', 'parenting', 'parent', 'mom', 'dad', 'mother', 'father', 'family', 'pregnancy', 'pregnant', 'birth', 'newborn', 'nursery', 'daycare', 'preschool', 'elementary', 'school', 'homework', 'toys', 'games', 'educational', 'learning', 'activity', 'craft', 'cartoon', 'disney', 'nickelodeon', 'pbs kids'],
        urlPatterns: ['babycenter.com', 'whattoexpect.com', 'parents.com', 'parenting.com', 'todaysparent.com', 'nickjr.com', 'pbskids.org', 'disney.com', 'commonsensemedia.org', 'familyfun.com', 'scholastic.com', 'funbrain.com', 'starfall.com', 'abcmouse.com']
    },
    'fashion': {
        name: 'Fashion & Style',
        keywords: ['fashion', 'style', 'clothing', 'clothes', 'outfit', 'dress', 'shirt', 'pants', 'jeans', 'shoes', 'sneakers', 'accessories', 'jewelry', 'watch', 'bag', 'handbag', 'designer', 'brand', 'luxury', 'trend', 'runway', 'model', 'vogue', 'elle', 'harper bazaar', 'streetwear', 'casual', 'formal', 'sustainable fashion', 'vintage', 'thrift'],
        urlPatterns: ['vogue.com', 'elle.com', 'harpersbazaar.com', 'wwd.com', 'fashionista.com', 'refinery29.com', 'whowhatwear.com', 'net-a-porter.com', 'farfetch.com', 'ssense.com', 'asos.com', 'zara.com', 'hm.com', 'uniqlo.com', 'nordstrom.com']
    },
    'beauty': {
        name: 'Beauty & Skincare',
        keywords: ['beauty', 'skincare', 'skin care', 'makeup', 'cosmetics', 'lipstick', 'foundation', 'mascara', 'eyeshadow', 'nail polish', 'hair', 'haircare', 'shampoo', 'conditioner', 'styling', 'salon', 'spa', 'facial', 'moisturizer', 'serum', 'sunscreen', 'anti-aging', 'acne', 'cleanser', 'toner', 'beauty routine', 'sephora', 'ulta', 'glossier'],
        urlPatterns: ['sephora.com', 'ulta.com', 'glossier.com', 'allure.com', 'byrdie.com', 'into the gloss', 'beautylish.com', 'temptalia.com', 'makeupgeek.com', 'paulaschoice.com', 'theordinary.com', 'cerave.com', 'nykaa.com', 'cultbeauty.com']
    },
    'music': {
        name: 'Music',
        keywords: ['music', 'song', 'songs', 'album', 'artist', 'band', 'singer', 'musician', 'concert', 'live', 'tour', 'ticket', 'festival', 'genre', 'rock', 'pop', 'hip hop', 'rap', 'jazz', 'classical', 'electronic', 'edm', 'country', 'r&b', 'indie', 'alternative', 'metal', 'punk', 'lyrics', 'chord', 'guitar', 'piano', 'drums', 'beat', 'producer', 'dj', 'remix', 'playlist', 'spotify', 'apple music', 'soundcloud', 'bandcamp'],
        urlPatterns: ['spotify.com', 'music.apple.com', 'soundcloud.com', 'bandcamp.com', 'last.fm', 'genius.com', 'songkick.com', 'discogs.com', 'allmusic.com', 'pitchfork.com', 'rollingstone.com', 'billboard.com', 'nme.com', 'stereogum.com', 'ultimate-guitar.com']
    },
    'art': {
        name: 'Art & Museums',
        keywords: ['art', 'artist', 'artwork', 'painting', 'sculpture', 'drawing', 'sketch', 'canvas', 'gallery', 'museum', 'exhibition', 'exhibit', 'collection', 'curator', 'masterpiece', 'contemporary', 'modern art', 'classical', 'abstract', 'impressionism', 'renaissance', 'portrait', 'landscape', 'still life', 'installation', 'performance art', 'digital art', 'nft art', 'auction', 'sothebys', 'christies', 'artsy', 'saatchi'],
        urlPatterns: ['artsy.net', 'saatchiart.com', 'deviantart.com', 'artstation.com', 'moma.org', 'metmuseum.org', 'tate.org.uk', 'louvre.fr', 'nga.gov', 'artnews.com', 'artnet.com', 'artforum.com', 'colossal.art', 'thisiscolossal.com']
    },
    'writing': {
        name: 'Writing & Publishing',
        keywords: ['writing', 'write', 'writer', 'author', 'blog', 'blogging', 'blogger', 'article', 'essay', 'story', 'storytelling', 'creative writing', 'copywriting', 'content writing', 'technical writing', 'journalism', 'journalist', 'editor', 'editing', 'proofread', 'grammar', 'publish', 'publishing', 'self-publish', 'manuscript', 'draft', 'outline', 'plot', 'character', 'dialogue', 'narrative', 'medium', 'substack', 'wordpress', 'ghost'],
        urlPatterns: ['medium.com', 'substack.com', 'wordpress.com', 'wattpad.com', 'scribophile.com', 'reedsy.com', 'writersdigest.com', 'thewritelife.com', 'grammarly.com', 'hemingwayapp.com', 'ghost.org', 'blogger.com', 'tumblr.com', 'lithub.com']
    },
    'freelance': {
        name: 'Freelancing & Gigs',
        keywords: ['freelance', 'freelancer', 'freelancing', 'gig', 'contract', 'contractor', 'independent', 'self-employed', 'client', 'project', 'proposal', 'invoice', 'payment', 'rate', 'hourly', 'retainer', 'upwork', 'fiverr', 'toptal', 'freelancer.com', '99designs', 'guru', 'peopleperhour', 'flexjobs', 'remote work', 'work from home', 'side hustle', 'portfolio', 'testimonial'],
        urlPatterns: ['upwork.com', 'fiverr.com', 'toptal.com', 'freelancer.com', '99designs.com', 'guru.com', 'peopleperhour.com', 'flexjobs.com', 'contra.com', 'malt.com', 'bark.com', 'thumbtack.com', 'taskrabbit.com', 'gigster.com']
    },
    'crypto': {
        name: 'Cryptocurrency',
        keywords: ['crypto', 'cryptocurrency', 'bitcoin', 'btc', 'ethereum', 'eth', 'blockchain', 'defi', 'decentralized', 'wallet', 'exchange', 'trading', 'altcoin', 'token', 'nft', 'smart contract', 'mining', 'staking', 'yield', 'liquidity', 'dex', 'cex', 'metamask', 'ledger', 'trezor', 'binance', 'coinbase', 'kraken', 'uniswap', 'opensea', 'web3', 'dao'],
        urlPatterns: ['coinmarketcap.com', 'coingecko.com', 'binance.com', 'coinbase.com', 'kraken.com', 'crypto.com', 'blockchain.com', 'etherscan.io', 'uniswap.org', 'opensea.io', 'metamask.io', 'ledger.com', 'trezor.io', 'defillama.com', 'dune.com']
    },
    'security': {
        name: 'Security & Privacy',
        keywords: ['security', 'cybersecurity', 'privacy', 'encryption', 'vpn', 'firewall', 'antivirus', 'malware', 'virus', 'hacker', 'hacking', 'phishing', 'scam', 'fraud', 'password', 'authentication', '2fa', 'mfa', 'ssl', 'https', 'certificate', 'vulnerability', 'exploit', 'patch', 'update', 'backup', 'data breach', 'identity theft', 'secure', 'protect', 'threat', 'attack', 'penetration testing', 'ethical hacking'],
        urlPatterns: ['krebsonsecurity.com', 'schneier.com', 'thehackernews.com', 'bleepingcomputer.com', 'securityweek.com', 'darkreading.com', 'hackread.com', 'haveibeenpwned.com', 'virustotal.com', 'nordvpn.com', 'expressvpn.com', '1password.com', 'lastpass.com', 'bitwarden.com', 'protonmail.com']
    },
    'database': {
        name: 'Databases',
        keywords: ['database', 'db', 'sql', 'nosql', 'mysql', 'postgresql', 'postgres', 'mongodb', 'redis', 'sqlite', 'oracle', 'mssql', 'mariadb', 'cassandra', 'dynamodb', 'elasticsearch', 'neo4j', 'graph database', 'query', 'table', 'schema', 'index', 'orm', 'migration', 'backup', 'replication', 'sharding', 'cluster', 'data modeling', 'erd', 'normalization'],
        urlPatterns: ['mysql.com', 'postgresql.org', 'mongodb.com', 'redis.io', 'sqlite.org', 'mariadb.org', 'elastic.co', 'neo4j.com', 'cockroachlabs.com', 'timescale.com', 'fauna.com', 'singlestore.com', 'planetscale.com', 'neon.tech', 'dbeaver.io']
    },
    'analytics': {
        name: 'Analytics & Data',
        keywords: ['analytics', 'data', 'data science', 'data analysis', 'visualization', 'dashboard', 'metrics', 'kpi', 'report', 'insight', 'trend', 'chart', 'graph', 'tableau', 'power bi', 'looker', 'google analytics', 'mixpanel', 'amplitude', 'segment', 'heap', 'hotjar', 'fullstory', 'big data', 'data warehouse', 'etl', 'data pipeline', 'statistics', 'machine learning', 'predictive'],
        urlPatterns: ['analytics.google.com', 'tableau.com', 'powerbi.microsoft.com', 'looker.com', 'mixpanel.com', 'amplitude.com', 'segment.com', 'heap.io', 'hotjar.com', 'fullstory.com', 'databricks.com', 'snowflake.com', 'metabase.com', 'redash.io', 'posthog.com']
    },
    'email': {
        name: 'Email & Newsletters',
        keywords: ['email', 'mail', 'inbox', 'newsletter', 'subscribe', 'subscription', 'mailing list', 'campaign', 'broadcast', 'autoresponder', 'drip', 'sequence', 'template', 'subject line', 'open rate', 'click rate', 'deliverability', 'spam', 'unsubscribe', 'mailchimp', 'convertkit', 'substack', 'buttondown', 'revue', 'gmail', 'outlook', 'yahoo mail', 'protonmail'],
        urlPatterns: ['gmail.com', 'mail.google.com', 'outlook.com', 'mail.yahoo.com', 'protonmail.com', 'tutanota.com', 'mailchimp.com', 'convertkit.com', 'substack.com', 'buttondown.email', 'beehiiv.com', 'sendinblue.com', 'mailerlite.com', 'constantcontact.com', 'campaignmonitor.com']
    },
    'podcast': {
        name: 'Podcasts',
        keywords: ['podcast', 'podcasting', 'episode', 'show', 'host', 'guest', 'interview', 'audio', 'listen', 'subscribe', 'rss', 'feed', 'spotify', 'apple podcasts', 'google podcasts', 'overcast', 'pocket casts', 'stitcher', 'anchor', 'buzzsprout', 'transistor', 'microphone', 'recording', 'editing', 'production'],
        urlPatterns: ['podcasts.apple.com', 'open.spotify.com', 'podcasts.google.com', 'overcast.fm', 'pocketcasts.com', 'stitcher.com', 'anchor.fm', 'buzzsprout.com', 'transistor.fm', 'simplecast.com', 'libsyn.com', 'podbean.com', 'spreaker.com', 'castbox.fm', 'podchaser.com']
    },
    'video': {
        name: 'Video & Streaming',
        keywords: ['video', 'streaming', 'stream', 'live', 'broadcast', 'upload', 'youtube', 'vimeo', 'twitch', 'tiktok', 'shorts', 'reels', 'creator', 'content creator', 'vlogger', 'vlog', 'editing', 'premiere', 'davinci', 'final cut', 'obs', 'streamlabs', 'webcam', 'camera', 'lighting', 'thumbnail', 'monetization', 'adsense', 'sponsorship'],
        urlPatterns: ['youtube.com', 'studio.youtube.com', 'vimeo.com', 'twitch.tv', 'dailymotion.com', 'rumble.com', 'odysee.com', 'bitchute.com', 'obs.live', 'streamlabs.com', 'restream.io', 'kapwing.com', 'clipchamp.com', 'canva.com/video']
    },
    'gaming': {
        name: 'Gaming',
        keywords: ['gaming', 'game', 'gamer', 'video game', 'pc gaming', 'console', 'playstation', 'xbox', 'nintendo', 'switch', 'steam', 'epic games', 'origin', 'uplay', 'battle.net', 'mmo', 'mmorpg', 'fps', 'rpg', 'strategy', 'indie', 'esports', 'competitive', 'multiplayer', 'single player', 'co-op', 'walkthrough', 'guide', 'cheat', 'mod', 'patch', 'dlc', 'expansion'],
        urlPatterns: ['store.steampowered.com', 'epicgames.com', 'gog.com', 'origin.com', 'battle.net', 'ign.com', 'gamespot.com', 'kotaku.com', 'polygon.com', 'eurogamer.net', 'pcgamer.com', 'rockpapershotgun.com', 'gamesradar.com', 'metacritic.com', 'howlongtobeat.com']
    },
    'anime': {
        name: 'Anime & Manga',
        keywords: ['anime', 'manga', 'otaku', 'weeb', 'japanese', 'japan', 'crunchyroll', 'funimation', 'myanimelist', 'anilist', 'shonen', 'shojo', 'seinen', 'isekai', 'slice of life', 'mecha', 'naruto', 'one piece', 'attack on titan', 'demon slayer', 'jujutsu kaisen', 'studio ghibli', 'cosplay', 'figure', 'merchandise', 'light novel', 'web novel'],
        urlPatterns: ['crunchyroll.com', 'funimation.com', 'myanimelist.net', 'anilist.co', 'anime-planet.com', 'kitsu.io', 'mangadex.org', 'mangaplus.shueisha.co.jp', '9anime.to', 'animixplay.to', 'gogoanime.sk', 'animeflv.net', 'jkanime.net', 'animekisa.tv']
    },
    'comics': {
        name: 'Comics & Webcomics',
        keywords: ['comic', 'comics', 'webcomic', 'graphic novel', 'manga', 'manhwa', 'manhua', 'marvel', 'dc', 'superhero', 'webtoon', 'tapas', 'comixology', 'issue', 'series', 'chapter', 'panel', 'artist', 'writer', 'colorist', 'inker', 'publisher', 'indie comic', 'xkcd', 'smbc', 'penny arcade'],
        urlPatterns: ['webtoons.com', 'tapas.io', 'comixology.com', 'marvel.com', 'dccomics.com', 'imagecomics.com', 'darkhorse.com', 'gocomics.com', 'xkcd.com', 'smbc-comics.com', 'penny-arcade.com', 'explosm.net', 'theoatmeal.com', 'comic-rocket.com']
    },
    'reference': {
        name: 'Reference & Wiki',
        keywords: ['reference', 'wiki', 'wikipedia', 'encyclopedia', 'dictionary', 'thesaurus', 'definition', 'meaning', 'synonym', 'antonym', 'translate', 'translation', 'language', 'fact', 'information', 'knowledge', 'research', 'source', 'citation', 'bibliography', 'academic', 'scholarly', 'peer reviewed', 'primary source', 'secondary source'],
        urlPatterns: ['wikipedia.org', 'en.wikipedia.org', 'wikimedia.org', 'wiktionary.org', 'britannica.com', 'merriam-webster.com', 'dictionary.com', 'thesaurus.com', 'translate.google.com', 'deepl.com', 'wordreference.com', 'etymonline.com', 'vocabulary.com', 'urban dictionary.com']
    },
    'weather': {
        name: 'Weather',
        keywords: ['weather', 'forecast', 'temperature', 'rain', 'snow', 'wind', 'humidity', 'storm', 'hurricane', 'tornado', 'climate', 'sunny', 'cloudy', 'precipitation', 'uv index', 'air quality', 'pollen', 'radar', 'satellite', 'meteorology', 'accuweather', 'weather.com', 'noaa'],
        urlPatterns: ['weather.com', 'accuweather.com', 'wunderground.com', 'weather.gov', 'noaa.gov', 'windy.com', 'yr.no', 'meteoblue.com', 'darksky.net', 'openweathermap.org', 'timeanddate.com/weather', 'weatherspark.com']
    },
    'maps': {
        name: 'Maps & Navigation',
        keywords: ['map', 'maps', 'navigation', 'directions', 'route', 'gps', 'location', 'address', 'street', 'satellite', 'terrain', 'traffic', 'commute', 'public transit', 'bus', 'train', 'subway', 'metro', 'uber', 'lyft', 'taxi', 'car', 'bike', 'walk', 'google maps', 'apple maps', 'waze', 'here', 'openstreetmap'],
        urlPatterns: ['maps.google.com', 'google.com/maps', 'maps.apple.com', 'waze.com', 'here.com', 'openstreetmap.org', 'mapquest.com', 'bing.com/maps', 'citymapper.com', 'moovitapp.com', 'rome2rio.com', 'what3words.com']
    },
    'environment': {
        name: 'Environment & Climate',
        keywords: ['environment', 'environmental', 'climate', 'climate change', 'global warming', 'carbon', 'emissions', 'renewable', 'sustainable', 'sustainability', 'green', 'eco', 'ecology', 'nature', 'conservation', 'wildlife', 'biodiversity', 'pollution', 'plastic', 'recycling', 'waste', 'solar', 'wind power', 'electric', 'ev', 'vegan', 'plant-based', 'organic', 'earth', 'ocean', 'forest', 'deforestation'],
        urlPatterns: ['epa.gov', 'nationalgeographic.com', 'nature.org', 'wwf.org', 'greenpeace.org', 'sierraclub.org', 'earthday.org', 'climaterealityproject.org', 'drawdown.org', 'carbonfootprint.com', 'ecowatch.com', 'treehugger.com', 'grist.org', 'insideclimatenews.org']
    },
    'diy': {
        name: 'DIY & Crafts',
        keywords: ['diy', 'do it yourself', 'craft', 'crafts', 'handmade', 'homemade', 'maker', 'making', 'create', 'project', 'tutorial', 'how to', 'guide', 'woodworking', 'sewing', 'knitting', 'crochet', 'embroidery', 'quilting', 'paper craft', 'origami', 'scrapbooking', 'jewelry making', 'candle making', 'soap making', 'pottery', 'ceramics', 'painting', 'upcycle', 'repurpose', 'etsy', 'pinterest', 'instructables'],
        urlPatterns: ['instructables.com', 'makezine.com', 'diynetwork.com', 'ana-white.com', 'ravelry.com', 'craftsy.com', 'creativebug.com', 'skillshare.com/browse/crafts', 'hobbylobby.com', 'michaels.com', 'joann.com', 'etsy.com/diy', 'pinterest.com/diy', 'ikeahackers.net']
    },
    'homeimprovement': {
        name: 'Home Improvement',
        keywords: ['home improvement', 'renovation', 'remodel', 'remodeling', 'construction', 'contractor', 'plumbing', 'electrical', 'hvac', 'roofing', 'flooring', 'painting', 'drywall', 'insulation', 'windows', 'doors', 'kitchen', 'bathroom', 'basement', 'attic', 'garage', 'deck', 'patio', 'landscaping', 'garden', 'lawn', 'fence', 'home depot', 'lowes', 'menards', 'ace hardware'],
        urlPatterns: ['homedepot.com', 'lowes.com', 'menards.com', 'acehardware.com', 'thisoldhouse.com', 'familyhandyman.com', 'bobvila.com', 'hgtv.com', 'diynetwork.com', 'houzz.com', 'angieslist.com', 'homeadvisor.com', 'thumbtack.com']
    },
    'gardening': {
        name: 'Gardening',
        keywords: ['garden', 'gardening', 'plant', 'plants', 'flower', 'flowers', 'vegetable', 'vegetables', 'herb', 'herbs', 'tree', 'shrub', 'lawn', 'grass', 'soil', 'compost', 'fertilizer', 'seed', 'seedling', 'planting', 'watering', 'pruning', 'harvest', 'organic', 'permaculture', 'hydroponics', 'greenhouse', 'indoor plants', 'houseplant', 'succulent', 'cactus'],
        urlPatterns: ['gardenersworld.com', 'thespruce.com/gardening', 'almanac.com', 'bhg.com/gardening', 'gardenweb.com', 'davesgarden.com', 'gardeningknowhow.com', 'finegardening.com', 'plantsmap.com', 'growveg.com', 'burpee.com', 'johnnyseeds.com']
    },
    'architecture': {
        name: 'Architecture',
        keywords: ['architecture', 'architect', 'building', 'structure', 'design', 'blueprint', 'floor plan', 'elevation', 'facade', 'interior', 'exterior', 'residential', 'commercial', 'modern', 'contemporary', 'traditional', 'minimalist', 'sustainable', 'green building', 'leed', 'skyscraper', 'landmark', 'heritage', 'restoration', 'urban planning', 'zoning', 'cad', 'autocad', 'revit', 'sketchup'],
        urlPatterns: ['archdaily.com', 'dezeen.com', 'architecturaldigest.com', 'archello.com', 'architizer.com', 'designboom.com', 'archinect.com', 'dwell.com', 'architectmagazine.com', 'worldarchitecturenews.com']
    },
    'interiordesign': {
        name: 'Interior Design',
        keywords: ['interior design', 'interior', 'decor', 'decoration', 'furniture', 'sofa', 'chair', 'table', 'bed', 'lighting', 'lamp', 'curtain', 'rug', 'carpet', 'wallpaper', 'paint', 'color scheme', 'style', 'modern', 'contemporary', 'bohemian', 'minimalist', 'scandinavian', 'industrial', 'farmhouse', 'mid-century', 'staging', 'room', 'living room', 'bedroom', 'kitchen', 'bathroom'],
        urlPatterns: ['houzz.com', 'apartmenttherapy.com', 'architecturaldigest.com/interior-design', 'elledecor.com', 'housebeautiful.com', 'domino.com', 'mydomaine.com', 'thespruce.com/decorating', 'decoraid.com', 'havenly.com', 'modsy.com', 'wayfair.com', 'westelm.com', 'cb2.com']
    },
    'electronics': {
        name: 'Electronics & Gadgets',
        keywords: ['electronics', 'gadget', 'gadgets', 'tech', 'technology', 'device', 'smartphone', 'phone', 'tablet', 'laptop', 'computer', 'pc', 'mac', 'iphone', 'android', 'samsung', 'apple', 'wearable', 'smartwatch', 'earbuds', 'headphones', 'speaker', 'tv', 'monitor', 'camera', 'drone', 'smart home', 'iot', 'accessories', 'charger', 'cable', 'review', 'unboxing'],
        urlPatterns: ['theverge.com', 'engadget.com', 'techradar.com', 'cnet.com', 'tomsguide.com', 'gizmodo.com', 'digitaltrends.com', 'androidcentral.com', '9to5mac.com', 'gsmarena.com', 'phonearena.com', 'notebookcheck.net', 'rtings.com', 'wirecutter.com']
    },
    'software': {
        name: 'Software & Apps',
        keywords: ['software', 'app', 'apps', 'application', 'program', 'download', 'install', 'update', 'version', 'beta', 'release', 'free', 'freemium', 'premium', 'subscription', 'license', 'open source', 'freeware', 'shareware', 'saas', 'cloud', 'desktop', 'mobile', 'ios', 'android', 'windows', 'macos', 'linux', 'productivity', 'utility', 'alternative'],
        urlPatterns: ['alternativeto.net', 'softonic.com', 'filehippo.com', 'download.cnet.com', 'majorgeeks.com', 'ninite.com', 'portableapps.com', 'sourceforge.net', 'fosshub.com', 'producthunt.com', 'getapp.com', 'capterra.com', 'g2.com', 'trustpilot.com']
    },
    'startups': {
        name: 'Startups & Entrepreneurship',
        keywords: ['startup', 'startups', 'entrepreneur', 'entrepreneurship', 'founder', 'co-founder', 'venture', 'venture capital', 'vc', 'angel', 'investor', 'investment', 'funding', 'seed', 'series a', 'series b', 'pitch', 'pitch deck', 'business plan', 'mvp', 'pivot', 'scale', 'growth', 'acquisition', 'exit', 'ipo', 'unicorn', 'incubator', 'accelerator', 'y combinator', 'techstars'],
        urlPatterns: ['ycombinator.com', 'techcrunch.com', 'crunchbase.com', 'angellist.com', 'producthunt.com', 'indiehackers.com', 'startupsavant.com', 'startupgrind.com', 'entrepreneur.com', 'inc.com', 'fastcompany.com', 'firstround.com', 'a16z.com', 'sequoiacap.com']
    },
    'business': {
        name: 'Business',
        keywords: ['business', 'company', 'corporation', 'enterprise', 'small business', 'smb', 'b2b', 'b2c', 'commerce', 'trade', 'industry', 'market', 'competition', 'strategy', 'management', 'operations', 'supply chain', 'logistics', 'procurement', 'hr', 'human resources', 'finance', 'accounting', 'sales', 'customer', 'client', 'partnership', 'merger', 'acquisition'],
        urlPatterns: ['forbes.com/business', 'businessinsider.com', 'bloomberg.com', 'wsj.com', 'ft.com', 'hbr.org', 'mckinsey.com', 'bain.com', 'bcg.com', 'deloitte.com', 'pwc.com', 'kpmg.com', 'ey.com', 'inc.com', 'entrepreneur.com']
    },
    'nonprofit': {
        name: 'Nonprofit & Charity',
        keywords: ['nonprofit', 'non-profit', 'charity', 'charitable', 'donation', 'donate', 'volunteer', 'volunteering', 'cause', 'foundation', 'organization', 'ngo', 'humanitarian', 'philanthropy', 'fundraising', 'campaign', 'awareness', 'advocacy', 'social impact', 'community', 'giving', 'gofundme', 'kickstarter', 'patreon', 'red cross', 'unicef', 'wwf', 'amnesty'],
        urlPatterns: ['charitynavigator.org', 'guidestar.org', 'givewell.org', 'globalgiving.org', 'gofundme.com', 'kickstarter.com', 'patreon.com', 'change.org', 'causes.com', 'idealist.org', 'volunteermatch.org', 'redcross.org', 'unicef.org', 'savethechildren.org']
    },
    'history': {
        name: 'History',
        keywords: ['history', 'historical', 'ancient', 'medieval', 'modern', 'century', 'era', 'period', 'civilization', 'empire', 'dynasty', 'war', 'battle', 'revolution', 'independence', 'colonial', 'archaeology', 'artifact', 'museum', 'archive', 'document', 'primary source', 'historian', 'biography', 'timeline', 'event', 'date', 'heritage', 'culture', 'tradition'],
        urlPatterns: ['history.com', 'historyextra.com', 'smithsonianmag.com', 'nationalgeographic.com/history', 'britannica.com/history', 'worldhistory.org', 'loc.gov', 'archives.gov', 'bbc.com/history', 'historynet.com', 'historytoday.com', 'historychannel.com']
    },
    'philosophy': {
        name: 'Philosophy',
        keywords: ['philosophy', 'philosopher', 'ethics', 'morality', 'metaphysics', 'epistemology', 'logic', 'reason', 'argument', 'theory', 'concept', 'idea', 'thought', 'mind', 'consciousness', 'existence', 'truth', 'knowledge', 'wisdom', 'virtue', 'plato', 'aristotle', 'kant', 'nietzsche', 'stoicism', 'existentialism', 'utilitarianism', 'rationalism', 'empiricism'],
        urlPatterns: ['plato.stanford.edu', 'iep.utm.edu', 'philosophynow.org', 'aeon.co', 'philosophybasics.com', 'pursuit-of-happiness.org', 'dailystoic.com', 'farnamstreetblog.com', 'brainpickings.org', 'philosophytalk.org']
    },
    'psychology': {
        name: 'Psychology',
        keywords: ['psychology', 'psychological', 'mental', 'mind', 'brain', 'behavior', 'cognitive', 'emotion', 'feeling', 'personality', 'therapy', 'therapist', 'counseling', 'psychiatry', 'psychiatrist', 'disorder', 'anxiety', 'depression', 'trauma', 'ptsd', 'adhd', 'autism', 'bipolar', 'schizophrenia', 'treatment', 'diagnosis', 'research', 'study', 'experiment'],
        urlPatterns: ['psychologytoday.com', 'apa.org', 'verywellmind.com', 'simplypsychology.org', 'psychcentral.com', 'mindbodygreen.com', 'goodtherapy.org', 'betterhelp.com', 'talkspace.com', 'headspace.com', 'calm.com', 'nami.org']
    },
    'languages': {
        name: 'Languages & Learning',
        keywords: ['language', 'languages', 'learn', 'learning', 'study', 'speak', 'speaking', 'read', 'reading', 'write', 'writing', 'listen', 'listening', 'vocabulary', 'grammar', 'pronunciation', 'fluent', 'fluency', 'native', 'foreign', 'translation', 'translate', 'interpreter', 'duolingo', 'babbel', 'rosetta stone', 'spanish', 'french', 'german', 'japanese', 'chinese', 'korean', 'english', 'esl'],
        urlPatterns: ['duolingo.com', 'babbel.com', 'rosettastone.com', 'busuu.com', 'memrise.com', 'lingvist.com', 'hellotalk.com', 'tandem.net', 'italki.com', 'preply.com', 'languagepod101.com', 'clozemaster.com', 'anki.net', 'forvo.com']
    },
    'military': {
        name: 'Military & Defense',
        keywords: ['military', 'defense', 'army', 'navy', 'air force', 'marines', 'coast guard', 'soldier', 'veteran', 'troops', 'combat', 'war', 'warfare', 'weapon', 'weapons', 'tank', 'aircraft', 'ship', 'submarine', 'missile', 'nuclear', 'strategy', 'tactics', 'intelligence', 'security', 'nato', 'pentagon', 'base', 'deployment'],
        urlPatterns: ['defense.gov', 'military.com', 'army.mil', 'navy.mil', 'af.mil', 'marines.mil', 'defenseone.com', 'janes.com', 'defensenews.com', 'breakingdefense.com', 'nationaldefensemagazine.org', 'warhistoryonline.com']
    },
    'aviation': {
        name: 'Aviation & Aerospace',
        keywords: ['aviation', 'aerospace', 'aircraft', 'airplane', 'plane', 'jet', 'helicopter', 'drone', 'flight', 'flying', 'pilot', 'airline', 'airport', 'runway', 'takeoff', 'landing', 'space', 'spacecraft', 'rocket', 'satellite', 'nasa', 'spacex', 'astronaut', 'orbit', 'launch', 'mission', 'boeing', 'airbus', 'lockheed'],
        urlPatterns: ['nasa.gov', 'spacex.com', 'boeing.com', 'airbus.com', 'flightradar24.com', 'flightaware.com', 'aviationweek.com', 'flyingmag.com', 'aopa.org', 'space.com', 'nasaspaceflight.com', 'spaceflightnow.com', 'universetoday.com']
    },
    'maritime': {
        name: 'Maritime & Boats',
        keywords: ['maritime', 'marine', 'boat', 'boats', 'ship', 'ships', 'yacht', 'sailing', 'sail', 'cruise', 'ferry', 'cargo', 'shipping', 'port', 'harbor', 'dock', 'marina', 'ocean', 'sea', 'navigation', 'captain', 'crew', 'fishing', 'boating', 'watercraft', 'kayak', 'canoe', 'jet ski'],
        urlPatterns: ['boattrader.com', 'boats.com', 'yachtworld.com', 'marinetraffic.com', 'sailmagazine.com', 'cruisingworld.com', 'powerandmotoryacht.com', 'boatingmag.com', 'discoverboating.com', 'cruisecritic.com', 'royalcaribbean.com', 'carnival.com']
    },
    'outdoor': {
        name: 'Outdoor & Adventure',
        keywords: ['outdoor', 'outdoors', 'adventure', 'hiking', 'hike', 'camping', 'camp', 'backpacking', 'trail', 'mountain', 'climbing', 'rock climbing', 'mountaineering', 'trekking', 'expedition', 'wilderness', 'nature', 'forest', 'national park', 'gear', 'equipment', 'tent', 'sleeping bag', 'boots', 'rei', 'patagonia', 'north face'],
        urlPatterns: ['rei.com', 'alltrails.com', 'hikingproject.com', 'backpacker.com', 'outsideonline.com', 'outdoorgearlab.com', 'trailrunner.com', 'climbing.com', 'mountainproject.com', 'nps.gov', 'recreation.gov', 'hipcamp.com', 'gaia gps']
    },
    'hunting': {
        name: 'Hunting & Fishing',
        keywords: ['hunting', 'hunt', 'hunter', 'fishing', 'fish', 'angler', 'angling', 'deer', 'elk', 'duck', 'turkey', 'rifle', 'shotgun', 'bow', 'archery', 'bait', 'lure', 'tackle', 'rod', 'reel', 'license', 'season', 'wildlife', 'conservation', 'trophy', 'bass', 'trout', 'salmon'],
        urlPatterns: ['fieldandstream.com', 'outdoorlife.com', 'bassmaster.com', 'in-fisherman.com', 'ducks.org', 'rmef.org', 'nwtf.org', 'bowhunting.com', 'petersenshunting.com', 'sportfishingmag.com', 'takemefishing.org', 'fishbrain.com']
    },
    'cycling': {
        name: 'Cycling',
        keywords: ['cycling', 'cycle', 'bike', 'bicycle', 'biking', 'cyclist', 'road bike', 'mountain bike', 'mtb', 'bmx', 'ebike', 'electric bike', 'commute', 'commuter', 'tour', 'touring', 'race', 'racing', 'tour de france', 'helmet', 'gear', 'pedal', 'chain', 'tire', 'wheel', 'frame', 'strava', 'zwift'],
        urlPatterns: ['bicycling.com', 'cyclingnews.com', 'bikeradar.com', 'cyclingweekly.com', 'velonews.com', 'roadbikerider.com', 'singletracks.com', 'pinkbike.com', 'strava.com', 'zwift.com', 'trekbikes.com', 'specialized.com', 'giant-bicycles.com']
    },
    'running': {
        name: 'Running',
        keywords: ['running', 'run', 'runner', 'jog', 'jogging', 'marathon', 'half marathon', '5k', '10k', 'ultra', 'trail running', 'track', 'sprint', 'pace', 'tempo', 'interval', 'training', 'race', 'racing', 'shoes', 'gear', 'gps', 'watch', 'strava', 'nike run club', 'garmin'],
        urlPatterns: ['runnersworld.com', 'runningmagazine.ca', 'competitor.com', 'irunfar.com', 'trailrunnermag.com', 'strava.com', 'mapmyrun.com', 'nike.com/running', 'garmin.com/running', 'runkeeper.com', 'couch25k.com', 'parkrun.com']
    },
    'yoga': {
        name: 'Yoga & Meditation',
        keywords: ['yoga', 'yogi', 'asana', 'pose', 'stretch', 'flexibility', 'meditation', 'meditate', 'mindfulness', 'breathing', 'breath', 'pranayama', 'chakra', 'zen', 'relaxation', 'stress relief', 'calm', 'peace', 'spiritual', 'practice', 'mat', 'studio', 'instructor', 'teacher', 'vinyasa', 'hatha', 'ashtanga', 'yin'],
        urlPatterns: ['yogajournal.com', 'doyogawithme.com', 'gaia.com', 'yogaglo.com', 'alo moves', 'headspace.com', 'calm.com', 'insighttimer.com', '10percenthappier.com', 'mindbodyonline.com', 'yogainternational.com', 'ekhartyoga.com']
    },
    'martialarts': {
        name: 'Martial Arts',
        keywords: ['martial arts', 'karate', 'taekwondo', 'judo', 'jiu jitsu', 'bjj', 'kung fu', 'boxing', 'kickboxing', 'muay thai', 'mma', 'ufc', 'wrestling', 'aikido', 'kendo', 'capoeira', 'self defense', 'training', 'technique', 'belt', 'dojo', 'gym', 'sparring', 'competition', 'tournament', 'fighter'],
        urlPatterns: ['ufc.com', 'sherdog.com', 'mmafighting.com', 'bjjheroes.com', 'blackbeltwiki.com', 'martialarts.com', 'gracieuniversity.com', 'bloodyelbow.com', 'combatpress.com', 'tapology.com']
    },
    'golf': {
        name: 'Golf',
        keywords: ['golf', 'golfer', 'golfing', 'course', 'club', 'clubs', 'driver', 'iron', 'putter', 'wedge', 'ball', 'tee', 'swing', 'handicap', 'par', 'birdie', 'eagle', 'bogey', 'putt', 'green', 'fairway', 'bunker', 'rough', 'pga', 'lpga', 'masters', 'us open', 'british open'],
        urlPatterns: ['golf.com', 'golfdigest.com', 'golfchannel.com', 'pga.com', 'pgatour.com', 'golfweek.com', 'golfwrx.com', 'mygolfspy.com', 'golfsmith.com', 'callawaygolf.com', 'titleist.com', 'taylormadegolf.com']
    },
    'fitness': {
        name: 'Fitness & Workout',
        keywords: ['fitness', 'fit', 'workout', 'exercise', 'gym', 'training', 'strength', 'cardio', 'hiit', 'crossfit', 'bodybuilding', 'muscle', 'weight training', 'lifting', 'squat', 'deadlift', 'bench press', 'abs', 'core', 'glutes', 'arms', 'legs', 'chest', 'back', 'personal trainer', 'coach', 'program', 'routine'],
        urlPatterns: ['bodybuilding.com', 'muscleandfitness.com', 'menshealth.com/fitness', 'womenshealthmag.com/fitness', 'shape.com', 'self.com/fitness', 'nerdfitness.com', 'stronglifts.com', 't-nation.com', 'crossfit.com', 'nasm.org', 'ace fitness.org']
    },
    'dance': {
        name: 'Dance',
        keywords: ['dance', 'dancing', 'dancer', 'choreography', 'choreographer', 'ballet', 'hip hop', 'jazz', 'contemporary', 'modern', 'tap', 'ballroom', 'salsa', 'tango', 'waltz', 'breakdance', 'street dance', 'kpop', 'routine', 'performance', 'studio', 'class', 'lesson', 'competition'],
        urlPatterns: ['dancemagazine.com', 'dancespirit.com', 'danceadvantage.net', 'steezy.co', 'danceplace.com', 'alvinailey.org', 'nycballet.com', 'royalballetschool.org.uk', 'worldofdance.com', 'danceplug.com']
    },
    'wedding': {
        name: 'Wedding',
        keywords: ['wedding', 'bride', 'groom', 'bridal', 'engagement', 'engaged', 'marriage', 'marry', 'ceremony', 'reception', 'venue', 'dress', 'gown', 'tuxedo', 'suit', 'flowers', 'bouquet', 'cake', 'catering', 'photographer', 'videographer', 'dj', 'band', 'invitation', 'registry', 'honeymoon', 'planner', 'coordinator'],
        urlPatterns: ['theknot.com', 'weddingwire.com', 'brides.com', 'marthastewartweddings.com', 'stylemepretty.com', 'zola.com', 'minted.com', 'davidsbridal.com', 'weddingchicks.com', 'greenweddingshoes.com', 'oncewed.com', 'junebugweddings.com']
    },
    'baby': {
        name: 'Baby & Pregnancy',
        keywords: ['baby', 'babies', 'newborn', 'infant', 'pregnancy', 'pregnant', 'expecting', 'trimester', 'birth', 'delivery', 'labor', 'prenatal', 'postnatal', 'maternity', 'nursing', 'breastfeeding', 'formula', 'diaper', 'stroller', 'crib', 'nursery', 'registry', 'shower', 'milestone', 'development', 'pediatric', 'pediatrician'],
        urlPatterns: ['babycenter.com', 'whattoexpect.com', 'thebump.com', 'parents.com', 'babycentre.co.uk', 'motherly.com', 'scarymommy.com', 'babylist.com', 'target.com/baby', 'amazon.com/baby', 'buybuybaby.com', 'uppababy.com', 'pampers.com']
    },
    'senior': {
        name: 'Senior & Retirement',
        keywords: ['senior', 'seniors', 'elderly', 'aging', 'retirement', 'retired', 'retiree', 'pension', '401k', 'ira', 'social security', 'medicare', 'medicaid', 'nursing home', 'assisted living', 'caregiver', 'aarp', 'golden years', 'grandparent', 'legacy', 'estate planning', 'will', 'trust'],
        urlPatterns: ['aarp.org', 'seniorliving.org', 'aplaceformom.com', 'caring.com', 'seniorplanet.org', 'medicare.gov', 'ssa.gov', 'nextavenue.org', 'retirementliving.com', 'silversneakers.com']
    },
    'disability': {
        name: 'Disability & Accessibility',
        keywords: ['disability', 'disabled', 'accessible', 'accessibility', 'wheelchair', 'mobility', 'blind', 'deaf', 'hearing', 'vision', 'cognitive', 'autism', 'ada', 'accommodation', 'assistive', 'technology', 'inclusive', 'inclusion', 'advocacy', 'rights', 'support', 'service', 'therapy', 'rehabilitation'],
        urlPatterns: ['disability.gov', 'ada.gov', 'abledata.acl.gov', 'disabilityrights.org', 'nod.org', 'abilitiesexpo.com', 'understood.org', 'autismspeaks.org', 'nad.org', 'afb.org', 'specialolympics.org']
    },
    'lgbtq': {
        name: 'LGBTQ+',
        keywords: ['lgbtq', 'lgbt', 'gay', 'lesbian', 'bisexual', 'transgender', 'queer', 'nonbinary', 'pride', 'coming out', 'ally', 'community', 'rights', 'equality', 'marriage equality', 'discrimination', 'support', 'resource', 'advocacy', 'inclusive', 'safe space'],
        urlPatterns: ['glaad.org', 'hrc.org', 'pflag.org', 'thetrevorproject.org', 'itgetsbetter.org', 'advocate.com', 'out.com', 'pride.com', 'them.us', 'lgbtqnation.com', 'autostraddle.com', 'pinknews.co.uk']
    },
    'mentalhealth': {
        name: 'Mental Health',
        keywords: ['mental health', 'mental', 'health', 'wellness', 'therapy', 'therapist', 'counseling', 'counselor', 'psychiatry', 'psychologist', 'anxiety', 'depression', 'stress', 'ptsd', 'trauma', 'bipolar', 'adhd', 'ocd', 'eating disorder', 'addiction', 'recovery', 'support', 'hotline', 'crisis', 'self-care', 'coping'],
        urlPatterns: ['nami.org', 'mentalhealth.gov', 'mhanational.org', 'psychologytoday.com', 'betterhelp.com', 'talkspace.com', 'verywellmind.com', '7cups.com', 'crisistextline.org', 'suicidepreventionlifeline.org', 'adaa.org', 'dbsalliance.org']
    },
    'addiction': {
        name: 'Addiction & Recovery',
        keywords: ['addiction', 'recovery', 'sober', 'sobriety', 'rehab', 'rehabilitation', 'treatment', 'detox', 'substance', 'alcohol', 'drugs', 'opioid', 'heroin', 'cocaine', 'meth', 'marijuana', 'tobacco', 'smoking', 'gambling', 'aa', 'na', '12 step', 'sponsor', 'support group', 'relapse', 'clean'],
        urlPatterns: ['aa.org', 'na.org', 'samhsa.gov', 'drugabuse.gov', 'hazeldenbettyford.org', 'recovery.org', 'therecoveryvillage.com', 'addictioncenter.com', 'americanaddictioncenters.org', 'smartrecovery.org', 'quit.com', 'truthinitiative.org']
    },
    'insurance': {
        name: 'Insurance',
        keywords: ['insurance', 'policy', 'coverage', 'premium', 'deductible', 'claim', 'health insurance', 'auto insurance', 'car insurance', 'home insurance', 'life insurance', 'renters insurance', 'travel insurance', 'disability insurance', 'dental', 'vision', 'medicare', 'medicaid', 'broker', 'agent', 'underwriting', 'quote'],
        urlPatterns: ['progressive.com', 'geico.com', 'statefarm.com', 'allstate.com', 'libertymutual.com', 'nationwide.com', 'usaa.com', 'aetna.com', 'cigna.com', 'unitedhealth care.com', 'bluecross.com', 'humana.com', 'policygenius.com', 'insurify.com']
    },
    'lottery': {
        name: 'Lottery & Gambling',
        keywords: ['lottery', 'lotto', 'powerball', 'mega millions', 'scratch', 'ticket', 'jackpot', 'winner', 'numbers', 'draw', 'gambling', 'casino', 'slots', 'poker', 'blackjack', 'roulette', 'bet', 'betting', 'sports betting', 'odds', 'wager', 'bingo'],
        urlPatterns: ['powerball.com', 'megamillions.com', 'lottery.com', 'thelotter.com', 'fanduel.com', 'draftkings.com', 'bet365.com', 'bovada.com', 'pokerstars.com', '888casino.com', 'betmgm.com', 'caesars.com/sportsbook']
    },
    'automation': {
        name: 'Automation & Workflows',
        keywords: ['automation', 'automate', 'workflow', 'integration', 'zapier', 'make', 'integromat', 'ifttt', 'n8n', 'power automate', 'script', 'macro', 'bot', 'rpa', 'robotic process', 'task', 'trigger', 'action', 'webhook', 'api', 'no-code', 'low-code'],
        urlPatterns: ['zapier.com', 'make.com', 'ifttt.com', 'n8n.io', 'workato.com', 'tray.io', 'automate.io', 'integrately.com', 'pipedream.com', 'parabola.io', 'activepieces.com']
    },
    'nocode': {
        name: 'No-Code & Low-Code',
        keywords: ['no-code', 'nocode', 'low-code', 'lowcode', 'visual', 'drag and drop', 'builder', 'platform', 'webflow', 'bubble', 'adalo', 'glide', 'softr', 'airtable', 'notion', 'coda', 'appsheet', 'retool', 'internal tools', 'citizen developer'],
        urlPatterns: ['webflow.com', 'bubble.io', 'adalo.com', 'glideapps.com', 'softr.io', 'airtable.com', 'coda.io', 'appsheet.com', 'retool.com', 'tooljet.com', 'appsmith.com', 'budibase.com', 'nocodb.com']
    },
    'iot': {
        name: 'IoT & Smart Home',
        keywords: ['iot', 'internet of things', 'smart home', 'smart device', 'connected', 'sensor', 'automation', 'home assistant', 'alexa', 'google home', 'siri', 'homekit', 'zigbee', 'z-wave', 'mqtt', 'raspberry pi', 'arduino', 'esp32', 'wearable', 'smartwatch', 'thermostat', 'smart lock', 'security camera'],
        urlPatterns: ['home-assistant.io', 'smartthings.com', 'ifttt.com', 'arduino.cc', 'raspberrypi.com', 'adafruit.com', 'sparkfun.com', 'hackaday.com', 'hackster.io', 'nodered.org', 'thingsboard.io', 'particle.io']
    },
    'vr': {
        name: 'VR & AR',
        keywords: ['vr', 'virtual reality', 'ar', 'augmented reality', 'mixed reality', 'mr', 'xr', 'extended reality', 'metaverse', 'oculus', 'meta quest', 'htc vive', 'valve index', 'psvr', 'hololens', 'magic leap', 'immersive', '3d', 'headset', 'controller', 'spatial', 'unity', 'unreal'],
        urlPatterns: ['oculus.com', 'meta.com/quest', 'vive.com', 'store.steampowered.com/vr', 'playstation.com/ps-vr', 'sidequestvr.com', 'uploadvr.com', 'roadtovr.com', 'vrscout.com', 'arvr.google.com', 'microsoft.com/hololens']
    },
    'blockchain': {
        name: 'Blockchain & Web3',
        keywords: ['blockchain', 'web3', 'decentralized', 'distributed ledger', 'smart contract', 'solidity', 'ethereum', 'solana', 'polygon', 'avalanche', 'binance smart chain', 'layer 2', 'rollup', 'consensus', 'node', 'validator', 'dapp', 'defi', 'dao', 'tokenomics', 'whitepaper'],
        urlPatterns: ['ethereum.org', 'solana.com', 'polygon.technology', 'avax.network', 'bnbchain.org', 'optimism.io', 'arbitrum.io', 'consensys.net', 'alchemy.com', 'infura.io', 'thirdweb.com', 'buildspace.so', 'web3.foundation']
    },
    'cloudservices': {
        name: 'Cloud Services',
        keywords: ['cloud', 'aws', 'amazon web services', 'azure', 'google cloud', 'gcp', 'alibaba cloud', 'oracle cloud', 'ibm cloud', 'digital ocean', 'linode', 'vultr', 'cloud computing', 'iaas', 'paas', 'saas', 'serverless', 'lambda', 'functions', 'kubernetes', 'docker', 'containers', 'microservices'],
        urlPatterns: ['aws.amazon.com', 'azure.microsoft.com', 'cloud.google.com', 'digitalocean.com', 'linode.com', 'vultr.com', 'oracle.com/cloud', 'ibm.com/cloud', 'alibabacloud.com', 'ovhcloud.com', 'hetzner.com']
    },
    'devops': {
        name: 'DevOps & CI/CD',
        keywords: ['devops', 'ci/cd', 'continuous integration', 'continuous deployment', 'pipeline', 'jenkins', 'github actions', 'gitlab ci', 'circleci', 'travis ci', 'argo', 'terraform', 'ansible', 'puppet', 'chef', 'kubernetes', 'helm', 'prometheus', 'grafana', 'monitoring', 'logging', 'observability', 'sre'],
        urlPatterns: ['jenkins.io', 'github.com/features/actions', 'gitlab.com/ci', 'circleci.com', 'travis-ci.com', 'argo-cd.io', 'terraform.io', 'ansible.com', 'prometheus.io', 'grafana.com', 'datadog.com', 'newrelic.com', 'splunk.com']
    },
    'testing': {
        name: 'Testing & QA',
        keywords: ['testing', 'test', 'qa', 'quality assurance', 'unit test', 'integration test', 'e2e', 'end to end', 'automation', 'selenium', 'cypress', 'playwright', 'jest', 'mocha', 'pytest', 'junit', 'test case', 'bug', 'defect', 'regression', 'performance testing', 'load testing', 'stress testing'],
        urlPatterns: ['selenium.dev', 'cypress.io', 'playwright.dev', 'jestjs.io', 'mochajs.org', 'pytest.org', 'junit.org', 'testng.org', 'browserstack.com', 'saucelabs.com', 'lambdatest.com', 'katalon.com', 'testcafe.io']
    },
    'api': {
        name: 'APIs & Integration',
        keywords: ['api', 'rest', 'restful', 'graphql', 'grpc', 'soap', 'webhook', 'endpoint', 'request', 'response', 'json', 'xml', 'authentication', 'oauth', 'jwt', 'rate limit', 'documentation', 'swagger', 'openapi', 'postman', 'insomnia', 'curl', 'sdk', 'integration'],
        urlPatterns: ['postman.com', 'insomnia.rest', 'swagger.io', 'rapidapi.com', 'apilist.fun', 'public-apis.io', 'any-api.com', 'hoppscotch.io', 'stoplight.io', 'readme.com', 'apiary.io', 'kong.com']
    },
    'mobile': {
        name: 'Mobile Development',
        keywords: ['mobile', 'app', 'ios', 'android', 'react native', 'flutter', 'swift', 'kotlin', 'objective-c', 'java', 'xcode', 'android studio', 'app store', 'play store', 'mobile design', 'responsive', 'pwa', 'progressive web app', 'capacitor', 'ionic', 'cordova', 'expo'],
        urlPatterns: ['developer.apple.com', 'developer.android.com', 'reactnative.dev', 'flutter.dev', 'ionic.io', 'expo.dev', 'capacitorjs.com', 'appstoreconnect.apple.com', 'play.google.com/console', 'firebase.google.com', 'appcenter.ms', 'instabug.com']
    },
    'opensource': {
        name: 'Open Source',
        keywords: ['open source', 'opensource', 'oss', 'free software', 'foss', 'gnu', 'gpl', 'mit', 'apache', 'bsd', 'license', 'contribution', 'contributor', 'maintainer', 'repository', 'fork', 'pull request', 'issue', 'community', 'foundation', 'linux', 'gnu/linux'],
        urlPatterns: ['opensource.org', 'github.com/topics/open-source', 'gitlab.com/explore', 'sourceforge.net', 'fosshub.com', 'fsf.org', 'linuxfoundation.org', 'apache.org', 'mozilla.org', 'kernel.org', 'debian.org', 'fedoraproject.org']
    },
    'linux': {
        name: 'Linux & Unix',
        keywords: ['linux', 'unix', 'gnu', 'distro', 'distribution', 'ubuntu', 'debian', 'fedora', 'centos', 'arch', 'manjaro', 'mint', 'opensuse', 'redhat', 'kernel', 'shell', 'bash', 'terminal', 'command line', 'cli', 'package manager', 'apt', 'yum', 'pacman', 'systemd'],
        urlPatterns: ['kernel.org', 'ubuntu.com', 'debian.org', 'fedoraproject.org', 'centos.org', 'archlinux.org', 'manjaro.org', 'linuxmint.com', 'opensuse.org', 'redhat.com', 'distrowatch.com', 'linuxjournal.com', 'linuxhandbook.com']
    },
    'windows': {
        name: 'Windows',
        keywords: ['windows', 'microsoft', 'windows 11', 'windows 10', 'pc', 'desktop', 'laptop', 'registry', 'powershell', 'cmd', 'command prompt', 'batch', 'msi', 'exe', 'driver', 'update', 'defender', 'activation', 'license', 'office', 'outlook', 'excel', 'word'],
        urlPatterns: ['microsoft.com/windows', 'support.microsoft.com', 'docs.microsoft.com', 'answers.microsoft.com', 'techcommunity.microsoft.com', 'windowscentral.com', 'howtogeek.com', 'bleepingcomputer.com', 'windowsreport.com', 'winaero.com']
    },
    'macos': {
        name: 'macOS & Apple',
        keywords: ['macos', 'mac', 'apple', 'macbook', 'imac', 'mac mini', 'mac pro', 'monterey', 'ventura', 'sonoma', 'terminal', 'finder', 'spotlight', 'time machine', 'airdrop', 'icloud', 'app store', 'brew', 'homebrew', 'xcode', 'swift'],
        urlPatterns: ['apple.com/macos', 'support.apple.com', 'developer.apple.com', 'macrumors.com', '9to5mac.com', 'appleinsider.com', 'macworld.com', 'imore.com', 'cultofmac.com', 'osxdaily.com', 'brew.sh']
    },
    'productivity': {
        name: 'Productivity',
        keywords: ['productivity', 'productive', 'efficiency', 'time management', 'task', 'todo', 'gtd', 'getting things done', 'pomodoro', 'focus', 'workflow', 'organize', 'organization', 'planner', 'calendar', 'schedule', 'reminder', 'habit', 'goal', 'routine', 'minimalism', 'declutter', 'second brain'],
        urlPatterns: ['todoist.com', 'any.do', 'ticktick.com', 'things.app', 'omnifocus.com', 'notion.so', 'obsidian.md', 'roamresearch.com', 'logseq.com', 'craft.do', 'focusmate.com', 'forest-app.cc', 'rescuetime.com', 'toggl.com']
    },
    'notesknowledge': {
        name: 'Notes & Knowledge',
        keywords: ['notes', 'note taking', 'knowledge', 'knowledge base', 'wiki', 'documentation', 'second brain', 'pkm', 'personal knowledge', 'zettelkasten', 'backlinks', 'graph', 'markdown', 'obsidian', 'notion', 'roam', 'logseq', 'evernote', 'onenote', 'apple notes', 'bear', 'craft'],
        urlPatterns: ['notion.so', 'obsidian.md', 'roamresearch.com', 'logseq.com', 'evernote.com', 'onenote.com', 'bear.app', 'craft.do', 'remnote.com', 'mem.ai', 'capacities.io', 'tana.inc', 'reflect.app', 'anytype.io']
    },
    'presentations': {
        name: 'Presentations',
        keywords: ['presentation', 'slides', 'slideshow', 'powerpoint', 'keynote', 'google slides', 'pitch', 'deck', 'pitch deck', 'slide', 'template', 'speaker', 'presenting', 'prezi', 'canva', 'beautiful.ai', 'slidesgo', 'speaker notes'],
        urlPatterns: ['slides.google.com', 'prezi.com', 'beautiful.ai', 'pitch.com', 'canva.com/presentations', 'slidesgo.com', 'slidebean.com', 'gamma.app', 'tome.app', 'mmhmm.app']
    },
    'spreadsheets': {
        name: 'Spreadsheets & Data',
        keywords: ['spreadsheet', 'excel', 'google sheets', 'csv', 'data', 'formula', 'function', 'vlookup', 'pivot table', 'chart', 'graph', 'calculation', 'budget', 'template', 'airtable', 'smartsheet', 'rows', 'coda'],
        urlPatterns: ['sheets.google.com', 'airtable.com', 'smartsheet.com', 'rows.com', 'coda.io', 'excel.office.com', 'stackby.com', 'baserow.io', 'seatable.io', 'grist.com']
    },
    'communication': {
        name: 'Communication & Meetings',
        keywords: ['communication', 'meeting', 'video call', 'conference', 'zoom', 'google meet', 'teams', 'webex', 'slack', 'discord', 'chat', 'messaging', 'collaboration', 'remote', 'virtual meeting', 'screen share', 'webinar', 'calendar', 'scheduling', 'calendly'],
        urlPatterns: ['zoom.us', 'meet.google.com', 'teams.microsoft.com', 'webex.com', 'slack.com', 'discord.com', 'whereby.com', 'around.co', 'gather.town', 'calendly.com', 'cal.com', 'doodle.com', 'loom.com']
    }
};

// --- STATE ---
let allBookmarks = [];
let categorizedBookmarks = {};
let bookmarkFolders = [];
let bookmarkMeta = {};
let activeCategory = 'all';
let searchQuery = '';
let metadataFetchController = null;
let metadataFetchTimeout = null;
let pendingDeleteId = null;

const autoFilledState = {
    title: false,
    description: false
};

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
const addBookmarkBtn = document.getElementById('add-bookmark-btn');
const importBookmarksBtn = document.getElementById('import-bookmarks-btn');
const settingsMenuTrigger = document.getElementById('settings-menu-trigger');
const settingsMenu = document.getElementById('settings-menu');
if (typeof window !== 'undefined') {
    window.exportMenuTrigger = window.exportMenuTrigger || settingsMenuTrigger;
    window.exportMenu = window.exportMenu || settingsMenu;
}
const exportChromeBtn = document.getElementById('export-chrome-btn');
const exportBeautifulBtn = document.getElementById('export-beautiful-btn');
const bookmarkModal = document.getElementById('bookmark-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const bookmarkModalTitle = document.getElementById('bookmark-modal-title');
const bookmarkModalSubtitle = document.getElementById('bookmark-modal-subtitle');
const bookmarkModalClose = document.getElementById('bookmark-modal-close');
const bookmarkCancelBtn = document.getElementById('bookmark-cancel-btn');
const bookmarkSubmitBtn = document.getElementById('bookmark-submit-btn');
const bookmarkIdInput = document.getElementById('bookmark-id');
const bookmarkTitleInput = document.getElementById('bookmark-title');
const bookmarkUrlInput = document.getElementById('bookmark-url');
const bookmarkDescriptionInput = document.getElementById('bookmark-description');
const bookmarkCategorySelect = document.getElementById('bookmark-category');
const bookmarkFolderSelect = document.getElementById('bookmark-folder');
const metadataStatus = document.getElementById('metadata-status');
const metadataRefreshBtn = document.getElementById('metadata-refresh-btn');
const confirmModal = document.getElementById('confirm-modal');
const confirmMessage = document.getElementById('confirm-message');
const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
const confirmCancelBtn = document.getElementById('confirm-cancel-btn');
const confirmCloseBtn = document.getElementById('confirm-close-btn');
const toastContainer = document.getElementById('toast-container');
const importModal = document.getElementById('import-modal');
const importModalClose = document.getElementById('import-modal-close');
const importForm = document.getElementById('import-form');
const importFileTrigger = document.getElementById('import-file-trigger');
const importFileInput = document.getElementById('import-file');
const importFileName = document.getElementById('import-file-name');
const importStatus = document.getElementById('import-status');
const importCancelBtn = document.getElementById('import-cancel-btn');
const importSubmitBtn = document.getElementById('import-submit-btn');

// Custom Category Modal Elements
const customCategoryBtn = document.getElementById('custom-category-btn');
const customCategoryModal = document.getElementById('custom-category-modal');
const customCategoryModalClose = document.getElementById('custom-category-modal-close');
const customCategoryForm = document.getElementById('custom-category-form');
const customCategoryCancelBtn = document.getElementById('custom-category-cancel-btn');
const categoryNameInput = document.getElementById('category-name');
const categoryKeywordsInput = document.getElementById('category-keywords');

const bookmarkSelectorSearch = document.getElementById('bookmark-selector-search');
const bookmarkSelectorList = document.getElementById('bookmark-selector-list');
const selectedBookmarkCount = document.getElementById('selected-bookmark-count');

// Custom categories state
let customCategories = {};
let selectedBookmarkIds = new Set();

// --- INITIALIZATION ---
async function init() {
    await loadBookmarks();
    populateFolderOptions();
    populateCategoryOptions();

    // Load custom categories first
    await loadCustomCategories();

    const cached = await loadCachedData();
    categorizedBookmarks = cached.categorizedBookmarks || {};
    bookmarkMeta = cached.bookmarkMeta || {};
    applyMetadataToBookmarks();

    if (Object.keys(categorizedBookmarks).length > 0) {
        applyCategoriesToBookmarks();
        const filled = fillMissingCategoriesWithKeywords();
        if (filled) {
            await saveCachedCategories();
        }
    } else {
        categorizeWithKeywords();
        await saveCachedCategories();
    }

    renderSidebar();
    renderBookmarks();
    hideLoading();

    registerEventListeners();
}

// --- BOOKMARK LOADING ---
async function loadBookmarks() {
    return new Promise((resolve) => {
        chrome.bookmarks.getTree((tree) => {
            allBookmarks = [];
            bookmarkFolders = [];
            const folderTracker = new Set();
            extractBookmarks(tree, [], folderTracker);
            if (!bookmarkFolders.length) {
                bookmarkFolders.push({ id: '1', title: 'Bookmarks Bar', path: 'Bookmarks Bar' });
            }
            resolve();
        });
    });
}

function extractBookmarks(nodes, path = [], folderTracker = new Set()) {
    for (const node of nodes) {
        const isFolder = !!node.children && !node.url;
        if (node.url) {
            const folderName = path[path.length - 1] || '';
            const folderPath = path.join(' / ');
            allBookmarks.push({
                id: node.id,
                title: node.title || 'Untitled',
                url: node.url,
                folder: folderName,
                folderPath,
                category: 'uncategorized',
                dateAdded: node.dateAdded,
                description: '',
                parentId: node.parentId
            });
        }
        if (isFolder) {
            const folderTitle = node.title?.trim() || (path.length ? 'Folder' : 'Bookmarks Bar');
            const nextPath = folderTitle ? [...path, folderTitle] : [...path];
            // Skip root node (id '0') - it cannot be modified
            if (node.id && node.id !== '0' && !folderTracker.has(node.id)) {
                folderTracker.add(node.id);
                bookmarkFolders.push({
                    id: node.id,
                    title: folderTitle,
                    path: nextPath.join(' / ') || folderTitle
                });
            }
            extractBookmarks(node.children, nextPath, folderTracker);
        } else if (node.children) {
            extractBookmarks(node.children, path, folderTracker);
        }
    }
}

async function loadCachedData() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['categorizedBookmarks', 'bookmarkMeta', 'lastUpdated'], (result) => {
            resolve({
                categorizedBookmarks: result.categorizedBookmarks || {},
                bookmarkMeta: result.bookmarkMeta || {}
            });
        });
    });
}

function applyMetadataToBookmarks() {
    if (!bookmarkMeta) return;
    for (const bookmark of allBookmarks) {
        const meta = bookmarkMeta[bookmark.id];
        if (meta) {
            bookmark.description = meta.description || '';
        }
    }
}

function fillMissingCategoriesWithKeywords() {
    let changed = false;
    for (const bookmark of allBookmarks) {
        if (!bookmark.category || bookmark.category === 'uncategorized') {
            bookmark.category = findBestCategory(bookmark);
            changed = true;
        }
    }
    if (changed) {
        updateCategorizedBookmarks();
    }
    return changed;
}

function populateFolderOptions() {
    if (!bookmarkFolderSelect) return;
    const folders = [...bookmarkFolders].sort((a, b) => a.path.localeCompare(b.path));
    bookmarkFolderSelect.innerHTML = '';
    const fragment = document.createDocumentFragment();
    folders.forEach(folder => {
        const option = document.createElement('option');
        option.value = folder.id;
        option.textContent = folder.path || folder.title;
        fragment.appendChild(option);
    });
    bookmarkFolderSelect.appendChild(fragment);
}

function populateCategoryOptions() {
    if (!bookmarkCategorySelect) return;
    bookmarkCategorySelect.innerHTML = '';
    const autoOption = document.createElement('option');
    autoOption.value = 'auto';
    autoOption.textContent = 'Auto-detect';
    bookmarkCategorySelect.appendChild(autoOption);

    Object.entries(DEFAULT_CATEGORIES).forEach(([id, data]) => {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = data.name;
        bookmarkCategorySelect.appendChild(option);
    });

    const uncategorizedOption = document.createElement('option');
    uncategorizedOption.value = 'uncategorized';
    uncategorizedOption.textContent = 'Uncategorized';
    bookmarkCategorySelect.appendChild(uncategorizedOption);
}

function registerEventListeners() {
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderBookmarks();
        });
    }

    aiCategorizeBtn?.addEventListener('click', categorizeWithAI);
    addBookmarkBtn?.addEventListener('click', () => openBookmarkModal('add'));
    importBookmarksBtn?.addEventListener('click', openImportModal);
    exportChromeBtn?.addEventListener('click', () => handleExport('chrome'));
    exportBeautifulBtn?.addEventListener('click', () => handleExport('beautiful'));
    bookmarkModalClose?.addEventListener('click', closeBookmarkModal);
    bookmarkCancelBtn?.addEventListener('click', closeBookmarkModal);
    bookmarkForm?.addEventListener('submit', handleBookmarkSubmit);
    metadataRefreshBtn?.addEventListener('click', () => triggerMetadataFetch(true));
    bookmarkUrlInput?.addEventListener('input', handleUrlInputChange);
    bookmarkTitleInput?.addEventListener('input', () => (bookmarkTitleInput.dataset.autofilled = 'false'));
    bookmarkDescriptionInput?.addEventListener('input', () => (bookmarkDescriptionInput.dataset.autofilled = 'false'));

    bookmarkModal?.addEventListener('click', (event) => {
        if (event.target === bookmarkModal) {
            closeBookmarkModal();
        }
    });

    confirmDeleteBtn?.addEventListener('click', confirmDeletion);
    confirmCancelBtn?.addEventListener('click', closeConfirmModal);
    confirmCloseBtn?.addEventListener('click', closeConfirmModal);
    confirmModal?.addEventListener('click', (event) => {
        if (event.target === confirmModal) {
            closeConfirmModal();
        }
    });
    importModalClose?.addEventListener('click', closeImportModal);
    importCancelBtn?.addEventListener('click', closeImportModal);
    importModal?.addEventListener('click', (event) => {
        if (event.target === importModal) {
            closeImportModal();
        }
    });
    importFileTrigger?.addEventListener('click', () => importFileInput?.click());
    importFileInput?.addEventListener('change', handleImportFileChange);
    importForm?.addEventListener('submit', handleImportSubmit);

    // Custom Category Modal
    customCategoryBtn?.addEventListener('click', openCustomCategoryModal);
    customCategoryModalClose?.addEventListener('click', closeCustomCategoryModal);
    customCategoryCancelBtn?.addEventListener('click', closeCustomCategoryModal);
    customCategoryModal?.addEventListener('click', (event) => {
        if (event.target === customCategoryModal) {
            closeCustomCategoryModal();
        }
    });
    customCategoryForm?.addEventListener('submit', handleCustomCategorySubmit);
    bookmarkSelectorSearch?.addEventListener('input', filterBookmarkSelector);
    
    // Settings dropdown - simple click outside to close
    if (settingsMenuTrigger) {
        settingsMenuTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = settingsMenu && !settingsMenu.hidden;
            if (isOpen) {
                settingsMenu.hidden = true;
                settingsMenuTrigger.setAttribute('aria-expanded', 'false');
            } else if (settingsMenu) {
                settingsMenu.hidden = false;
                settingsMenuTrigger.setAttribute('aria-expanded', 'true');
            }
        });
    }
    
    // Close settings menu when clicking outside
    document.addEventListener('click', (e) => {
        if (settingsMenu && !settingsMenu.hidden) {
            const wrapper = document.getElementById('settings-dropdown-wrapper');
            if (wrapper && !wrapper.contains(e.target)) {
                settingsMenu.hidden = true;
                if (settingsMenuTrigger) {
                    settingsMenuTrigger.setAttribute('aria-expanded', 'false');
                }
            }
        }
    });
    
    // Close settings menu when clicking menu items
    if (settingsMenu) {
        settingsMenu.addEventListener('click', () => {
            settingsMenu.hidden = true;
            if (settingsMenuTrigger) {
                settingsMenuTrigger.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

function requestBookmarkDeletion(bookmarkId) {
    pendingDeleteId = bookmarkId;
    const target = allBookmarks.find(b => b.id === bookmarkId);
    if (confirmMessage && target) {
        confirmMessage.textContent = `Delete "${target.title}"? This cannot be undone.`;
    }
    if (confirmModal) {
        confirmModal.hidden = false;
    }
}

function closeConfirmModal() {
    pendingDeleteId = null;
    if (confirmModal) {
        confirmModal.hidden = true;
    }
}

function confirmDeletion() {
    if (!pendingDeleteId) {
        closeConfirmModal();
        return;
    }
    if (confirmDeleteBtn) confirmDeleteBtn.disabled = true;
    chrome.bookmarks.remove(pendingDeleteId, async () => {
        if (confirmDeleteBtn) confirmDeleteBtn.disabled = false;
        if (chrome.runtime.lastError) {
            showToast(chrome.runtime.lastError.message, 'error');
            return;
        }
        delete bookmarkMeta[pendingDeleteId];
        removeBookmarkFromCache(pendingDeleteId);
        await reloadData();
        showToast('Bookmark deleted.');
        closeConfirmModal();
    });
}

function openBookmarkModal(mode, bookmarkId = null) {
    if (!bookmarkForm) return;
    resetBookmarkForm();
    bookmarkForm.dataset.mode = mode;
    bookmarkModalTitle.textContent = mode === 'edit' ? 'Edit Bookmark' : 'Add Bookmark';
    bookmarkModalSubtitle.textContent = mode === 'edit'
        ? 'Update bookmark details'
        : 'Create a new bookmark entry';

    if (mode === 'edit' && bookmarkId) {
        const target = allBookmarks.find(b => b.id === bookmarkId);
        if (!target) {
            showToast('Bookmark not found', 'error');
            return;
        }
        bookmarkIdInput.value = target.id;
        bookmarkTitleInput.value = target.title;
        bookmarkUrlInput.value = target.url;
        bookmarkDescriptionInput.value = target.description || '';
        if (bookmarkFolderSelect) {
            const fallbackFolder = bookmarkFolderSelect.options[0]?.value;
            bookmarkFolderSelect.value = target.parentId || fallbackFolder || '';
        }
        if (bookmarkCategorySelect) {
            bookmarkCategorySelect.value = target.category || 'auto';
        }
    } else {
        if (bookmarkCategorySelect) {
            bookmarkCategorySelect.value = 'auto';
        }
        if (bookmarkFolderSelect) {
            const fallbackFolder = bookmarkFolderSelect.options[0]?.value;
            if (fallbackFolder) {
                bookmarkFolderSelect.value = fallbackFolder;
            }
        }
    }

    bookmarkModal.hidden = false;
}

function closeBookmarkModal() {
    if (!bookmarkModal) return;
    resetBookmarkForm();
    bookmarkModal.hidden = true;
}

function resetBookmarkForm() {
    bookmarkForm?.reset();
    bookmarkIdInput.value = '';
    metadataStatus.textContent = '';
    autoFilledState.title = false;
    autoFilledState.description = false;
    if (bookmarkTitleInput) bookmarkTitleInput.dataset.autofilled = 'false';
    if (bookmarkDescriptionInput) bookmarkDescriptionInput.dataset.autofilled = 'false';
    cancelMetadataFetch();
}

function cancelMetadataFetch() {
    if (metadataFetchTimeout) {
        clearTimeout(metadataFetchTimeout);
        metadataFetchTimeout = null;
    }
    if (metadataFetchController) {
        metadataFetchController.abort();
        metadataFetchController = null;
    }
    if (metadataStatus) {
        metadataStatus.textContent = '';
    }
}

function handleUrlInputChange() {
    if (!bookmarkUrlInput) return;
    if (metadataFetchTimeout) {
        clearTimeout(metadataFetchTimeout);
    }
    metadataFetchTimeout = setTimeout(() => triggerMetadataFetch(false), 700);
}

function triggerMetadataFetch(force = false) {
    if (!bookmarkUrlInput) return;
    const rawUrl = bookmarkUrlInput.value.trim();
    if (!rawUrl) {
        if (metadataStatus) metadataStatus.textContent = '';
        return;
    }
    const normalized = normalizeUrl(rawUrl);
    if (!isValidHttpUrl(normalized)) {
        if (force && metadataStatus) {
            metadataStatus.textContent = 'Enter a valid URL to fetch details.';
        }
        return;
    }
    fetchMetadataForForm(normalized);
}

async function fetchMetadataForForm(url) {
    cancelMetadataFetch();
    if (metadataStatus) metadataStatus.textContent = 'Fetching metadata…';
    if (metadataRefreshBtn) metadataRefreshBtn.disabled = true;
    const controller = new AbortController();
    metadataFetchController = controller;
    try {
        const metadata = await fetchMetadata(url, controller.signal);
        applyMetadataToForm(metadata);
        if (metadataStatus) {
            metadataStatus.textContent = metadata.description || metadata.title
                ? 'Details updated from site.'
                : 'No metadata found on site.';
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            return;
        }
        console.error('Metadata fetch failed', error);
        if (metadataStatus) metadataStatus.textContent = 'Could not fetch details.';
    } finally {
        metadataFetchController = null;
        if (metadataRefreshBtn) metadataRefreshBtn.disabled = false;
    }
}

async function fetchMetadata(url, signal) {
    // Use background script to bypass CORS
    return new Promise((resolve, reject) => {
        if (signal?.aborted) {
            reject(new DOMException('Aborted', 'AbortError'));
            return;
        }

        const abortHandler = () => {
            reject(new DOMException('Aborted', 'AbortError'));
        };
        signal?.addEventListener('abort', abortHandler);

        chrome.runtime.sendMessage(
            { action: 'fetchMetadata', url },
            (response) => {
                signal?.removeEventListener('abort', abortHandler);
                
                if (chrome.runtime.lastError) {
                    console.log('Metadata fetch error:', chrome.runtime.lastError.message);
                    resolve({ title: '', description: '' });
                    return;
                }
                
                if (response?.success) {
                    resolve(response.metadata);
                } else {
                    resolve({ title: '', description: '' });
                }
            }
        );
    });
}

function applyMetadataToForm({ title, description }) {
    if (title && shouldAutofillField(bookmarkTitleInput)) {
        bookmarkTitleInput.value = title;
        bookmarkTitleInput.dataset.autofilled = 'true';
        autoFilledState.title = true;
    }
    if (description && shouldAutofillField(bookmarkDescriptionInput)) {
        bookmarkDescriptionInput.value = description;
        bookmarkDescriptionInput.dataset.autofilled = 'true';
        autoFilledState.description = true;
    }
}

function shouldAutofillField(input) {
    if (!input) return false;
    const currentValue = input.value.trim();
    return currentValue.length === 0 || input.dataset.autofilled === 'true';
}

function normalizeUrl(url) {
    if (!/^https?:\/\//i.test(url)) {
        return `https://${url}`;
    }
    return url;
}

function isValidHttpUrl(value) {
    try {
        const parsed = new URL(value);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch (e) {
        return false;
    }
}

function openImportModal() {
    resetImportForm();
    if (importModal) {
        importModal.hidden = false;
    }
}

function closeImportModal() {
    resetImportForm();
    if (importModal) {
        importModal.hidden = true;
    }
}

function resetImportForm() {
    importForm?.reset();
    if (importFileName) {
        importFileName.textContent = 'No file selected';
    }
    if (importStatus) {
        importStatus.textContent = '';
    }
}

// --- CUSTOM CATEGORY MODAL ---
function openCustomCategoryModal() {
    resetCustomCategoryForm();
    populateBookmarkSelector();
    if (customCategoryModal) {
        customCategoryModal.hidden = false;
    }
}

function closeCustomCategoryModal() {
    resetCustomCategoryForm();
    if (customCategoryModal) {
        customCategoryModal.hidden = true;
    }
}

function resetCustomCategoryForm() {
    customCategoryForm?.reset();
    selectedBookmarkIds.clear();
    updateSelectedCount();
    if (bookmarkSelectorList) {
        bookmarkSelectorList.innerHTML = '';
    }
}

// Comprehensive search function - matches across all bookmark metadata
function matchesSearchQuery(bookmark, query) {
    if (!query) return true;
    
    const searchTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    
    // Build searchable text from all metadata fields
    const searchableFields = [
        bookmark.title || '',
        bookmark.url || '',
        bookmark.description || '',
        DEFAULT_CATEGORIES[bookmark.category]?.name || '',
        // Include category keywords for matching
        ...(DEFAULT_CATEGORIES[bookmark.category]?.keywords || [])
    ];
    
    // Extract domain for searching
    try {
        const url = new URL(bookmark.url);
        searchableFields.push(url.hostname.replace('www.', ''));
        // Add path segments as searchable
        searchableFields.push(...url.pathname.split('/').filter(s => s));
    } catch (e) {
        // URL parsing failed, already have raw URL
    }
    
    const searchText = searchableFields.join(' ').toLowerCase();
    
    // All search terms must match (AND logic for multiple words)
    return searchTerms.every(term => searchText.includes(term));
}

function populateBookmarkSelector(filter = '') {
    if (!bookmarkSelectorList) return;
    
    const filterLower = filter.toLowerCase();
    const filtered = allBookmarks.filter(b => {
        if (!filter) return true;
        return matchesSearchQuery(b, filterLower);
    });
    
    bookmarkSelectorList.innerHTML = filtered.slice(0, 50).map(bookmark => {
        const isSelected = selectedBookmarkIds.has(bookmark.id);
        let domain = '';
        try {
            domain = new URL(bookmark.url).hostname.replace('www.', '');
        } catch (e) {
            domain = bookmark.url;
        }
        return `
            <label class="bookmark-selector-item ${isSelected ? 'selected' : ''}" data-id="${bookmark.id}">
                <input type="checkbox" ${isSelected ? 'checked' : ''} />
                <div class="bookmark-info">
                    <div class="bookmark-title">${escapeHtml(bookmark.title)}</div>
                    <div class="bookmark-url">${escapeHtml(domain)}</div>
                </div>
            </label>
        `;
    }).join('');
    
    // Add click handlers
    bookmarkSelectorList.querySelectorAll('.bookmark-selector-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const id = item.dataset.id;
            const checkbox = item.querySelector('input[type="checkbox"]');
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
            }
            if (checkbox.checked) {
                selectedBookmarkIds.add(id);
                item.classList.add('selected');
            } else {
                selectedBookmarkIds.delete(id);
                item.classList.remove('selected');
            }
            updateSelectedCount();
        });
    });
}

function filterBookmarkSelector(e) {
    populateBookmarkSelector(e.target.value);
}

function updateSelectedCount() {
    if (selectedBookmarkCount) {
        selectedBookmarkCount.textContent = selectedBookmarkIds.size;
    }
}

async function handleCustomCategorySubmit(event) {
    event.preventDefault();
    
    const name = categoryNameInput?.value?.trim();
    if (!name) {
        showToast('Please enter a category name.', 'error');
        return;
    }
    
    // Generate a slug ID from the name
    const categoryId = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Check if category already exists (by ID or name)
    if (DEFAULT_CATEGORIES[categoryId]) {
        showToast(`Category "${DEFAULT_CATEGORIES[categoryId].name}" already exists.`, 'error');
        return;
    }
    
    // Also check if a category with the same name exists (case-insensitive)
    const existingCategory = Object.values(DEFAULT_CATEGORIES).find(
        cat => cat.name.toLowerCase() === name.toLowerCase()
    );
    if (existingCategory) {
        showToast(`Category "${existingCategory.name}" already exists.`, 'error');
        return;
    }
    
    // Parse keywords
    const keywords = (categoryKeywordsInput?.value || '')
        .split(',')
        .map(k => k.trim().toLowerCase())
        .filter(k => k.length > 0);
    
    // Add to DEFAULT_CATEGORIES (runtime only, will persist via cache)
    DEFAULT_CATEGORIES[categoryId] = {
        name: name,
        keywords: keywords,
        urlPatterns: []
    };
    
    // Add to custom categories for persistence
    customCategories[categoryId] = {
        name: name,
        keywords: keywords
    };
    
    // Assign selected bookmarks to this category
    const selectedIds = Array.from(selectedBookmarkIds);
    for (const bookmarkId of selectedIds) {
        const bookmark = allBookmarks.find(b => b.id === bookmarkId);
        if (bookmark) {
            bookmark.category = categoryId;
            // Store as manual override
            if (!categorizedBookmarks[categoryId]) {
                categorizedBookmarks[categoryId] = [];
            }
            categorizedBookmarks[categoryId].push(bookmarkId);
        }
    }
    
    // Re-categorize uncategorized bookmarks with new keywords
    for (const bookmark of allBookmarks) {
        if (bookmark.category === 'uncategorized' || !bookmark.category) {
            const newCategory = findBestCategory(bookmark);
            if (newCategory === categoryId) {
                bookmark.category = categoryId;
            }
        }
    }
    
    // Save and refresh
    await saveCustomCategories();
    await saveCachedCategories();
    updateCategorizedBookmarks();
    populateCategoryOptions();
    renderSidebar();
    renderBookmarks();
    
    closeCustomCategoryModal();
    showToast(`Category "${name}" created successfully!`);
}

async function saveCustomCategories() {
    try {
        await chrome.storage.local.set({ customCategories });
    } catch (e) {
        console.error('Failed to save custom categories', e);
    }
}

async function loadCustomCategories() {
    try {
        const result = await chrome.storage.local.get('customCategories');
        if (result.customCategories) {
            customCategories = result.customCategories;
            // Merge into DEFAULT_CATEGORIES
            Object.assign(DEFAULT_CATEGORIES, customCategories);
        }
    } catch (e) {
        console.error('Failed to load custom categories', e);
    }
}

function handleImportFileChange() {
    if (!importFileInput || !importFileName) return;
    const file = importFileInput.files?.[0];
    importFileName.textContent = file ? file.name : 'No file selected';
}

async function handleImportSubmit(event) {
    event.preventDefault();
    if (!importFileInput || !importFileInput.files?.length) {
        if (importStatus) {
            importStatus.textContent = 'Please choose an export file first.';
        }
        return;
    }
    const file = importFileInput.files[0];
    const folderId = resolveFolderId();
    if (importStatus) {
        importStatus.textContent = 'Reading file...';
    }
    if (importSubmitBtn) {
        importSubmitBtn.disabled = true;
        importSubmitBtn.textContent = 'Importing…';
    }
    try {
        const text = await readFileAsText(file);
        const entries = parseImportPayload(text);
        if (!entries.length) {
            throw new Error('No bookmarks found in file.');
        }
        const result = await importBookmarksFromData(entries, folderId);
        
        // Handle result with skipped duplicates info
        if (typeof result === 'object' && result.skipped > 0) {
            const importedText = `Imported ${result.imported} bookmark${result.imported === 1 ? '' : 's'}`;
            const skippedText = `${result.skipped} duplicate${result.skipped === 1 ? '' : 's'} skipped`;
            showToast(`${importedText}, ${skippedText}.`);
        } else {
            const count = typeof result === 'object' ? result.imported : result;
            showToast(`Imported ${count} bookmark${count === 1 ? '' : 's'}.`);
        }
        closeImportModal();
    } catch (error) {
        console.error('Import failed', error);
        if (importStatus) {
            importStatus.textContent = error.message || 'Import failed.';
        }
    } finally {
        if (importSubmitBtn) {
            importSubmitBtn.disabled = false;
            importSubmitBtn.textContent = 'Import Bookmarks';
        }
    }
}

function readFileAsText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error || new Error('Unable to read file.'));
        reader.readAsText(file);
    });
}

function parseImportPayload(text) {
    const trimmed = (text || '').trim();
    if (!trimmed) return [];
    return parseNetscapeBookmarks(trimmed);
}

function parseNetscapeBookmarks(htmlText) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    const root = doc.querySelector('dl');
    if (!root) {
        throw new Error('Invalid HTML bookmark file.');
    }
    const results = [];
    const walk = (dl, path) => {
        if (!dl) return;
        Array.from(dl.children).forEach((node) => {
            if (node.tagName === 'DT') {
                const folder = node.querySelector(':scope > h3');
                const link = node.querySelector(':scope > a');
                if (folder) {
                    const folderName = folder.textContent?.trim() || '';
                    const nextPath = folderName ? [...path, folderName] : [...path];
                    let sublist = node.nextElementSibling;
                    if (!sublist || sublist.tagName !== 'DL') {
                        sublist = node.querySelector('dl');
                    }
                    walk(sublist, nextPath);
                } else if (link) {
                    const href = link.getAttribute('href')?.trim();
                    if (!href) return;
                    results.push({
                        title: link.textContent?.trim() || href,
                        url: href,
                        folderPath: path.join(' / '),
                        description: ''
                    });
                }
            } else if (node.tagName === 'DL') {
                walk(node, path);
            }
        });
    };
    walk(root, []);
    return results;
}

async function importBookmarksFromData(entries, folderId) {
    const manualOverrides = {};
    const recategorizeIds = [];
    const metaUpdates = {};
    let importedCount = 0;
    let skippedCount = 0;

    // Build a set of existing URLs for fast duplicate detection
    const existingUrls = new Set(
        allBookmarks.map(b => normalizeUrlForComparison(b.url))
    );

    for (const entry of entries) {
        if (!entry || !entry.url) continue;
        const normalizedUrl = normalizeUrl(entry.url.trim());
        if (!isValidHttpUrl(normalizedUrl)) continue;

        // Check for duplicate URL
        const urlForComparison = normalizeUrlForComparison(normalizedUrl);
        if (existingUrls.has(urlForComparison)) {
            skippedCount += 1;
            continue;
        }

        const title = (entry.title && entry.title.trim()) || normalizedUrl;
        try {
            const bookmark = await createBookmarkInChrome({
                parentId: folderId,
                title,
                url: normalizedUrl
            });
            importedCount += 1;
            existingUrls.add(urlForComparison); // Prevent duplicates within same import
            if (entry.description) {
                metaUpdates[bookmark.id] = { description: entry.description };
            }
            if (entry.category && DEFAULT_CATEGORIES[entry.category]) {
                manualOverrides[bookmark.id] = entry.category;
            } else {
                recategorizeIds.push(bookmark.id);
            }
        } catch (error) {
            console.warn('Failed to import bookmark', entry, error);
        }
    }

    bookmarkMeta = { ...bookmarkMeta, ...metaUpdates };
    await reloadData({ manualOverrides, recategorizeIds });
    
    if (skippedCount > 0) {
        return { imported: importedCount, skipped: skippedCount };
    }
    return importedCount;
}

// Normalize URL for comparison to detect duplicates (removes trailing slash, protocol differences, www)
function normalizeUrlForComparison(url) {
    try {
        const parsed = new URL(url);
        let normalized = parsed.hostname.toLowerCase().replace(/^www\./, '');
        normalized += parsed.pathname.replace(/\/$/, '') || '';
        normalized += parsed.search;
        return normalized;
    } catch {
        return url.toLowerCase().trim();
    }
}

function handleExport(type) {
    if (!allBookmarks.length) {
        showToast('No bookmarks to export yet.', 'error');
        return;
    }
    if (type === 'chrome') {
        exportAsChromeFormat();
    } else if (type === 'beautiful') {
        exportAsBeautifulHtml();
    }
}

function exportAsChromeFormat() {
    const html = buildNetscapeExport();
    const blob = new Blob([html], { type: 'text/html' });
    downloadFile(blob, `bookmarks_${formatDateForFilename()}.html`);
    showToast('Bookmarks exported (Chrome format).');
}

function exportAsBeautifulHtml() {
    const html = buildBeautifulExport();
    const blob = new Blob([html], { type: 'text/html' });
    downloadFile(blob, `mylinks_${formatDateForFilename()}.html`);
    showToast('Beautiful HTML exported.');
}

function buildNetscapeExport() {
    // Build Netscape Bookmark format (same as Chrome export)
    let html = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL><p>
`;

    // Group bookmarks by category
    const grouped = {};
    allBookmarks.forEach(bookmark => {
        const categoryName = DEFAULT_CATEGORIES[bookmark.category]?.name || 'Uncategorized';
        if (!grouped[categoryName]) {
            grouped[categoryName] = [];
        }
        grouped[categoryName].push(bookmark);
    });

    // Build folders for each category
    Object.entries(grouped)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([categoryName, items]) => {
            html += `    <DT><H3>${escapeHtml(categoryName)}</H3>\n`;
            html += `    <DL><p>\n`;
            items.sort((a, b) => a.title.localeCompare(b.title)).forEach(bookmark => {
                const addDate = bookmark.dateAdded ? Math.floor(bookmark.dateAdded / 1000) : Math.floor(Date.now() / 1000);
                html += `        <DT><A HREF="${escapeHtml(bookmark.url)}" ADD_DATE="${addDate}">${escapeHtml(bookmark.title)}</A>\n`;
            });
            html += `    </DL><p>\n`;
        });

    html += `</DL><p>\n`;
    return html;
}

function buildBeautifulExport() {
    const grouped = {};
    allBookmarks.forEach(bookmark => {
        const key = DEFAULT_CATEGORIES[bookmark.category]?.name || 'Uncategorized';
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(bookmark);
    });

    const sections = Object.entries(grouped)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([categoryName, items]) => {
            const cards = items
                .sort((a, b) => a.title.localeCompare(b.title))
                .map(renderHtmlExportCard)
                .join('');
            return `
                <section class="category-block" data-category="${escapeHtml(categoryName)}">
                    <div class="category-header">
                        <div>
                            <h2>${escapeHtml(categoryName)}</h2>
                            <p class="category-count">${items.length} bookmark${items.length === 1 ? '' : 's'}</p>
                        </div>
                    </div>
                    <div class="card-grid">
                        ${cards}
                    </div>
                </section>
            `;
        })
        .join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MyLinks Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
            color: #f8fafc;
            margin: 0;
            padding: 0;
            min-height: 100vh;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 24px;
        }
        header {
            text-align: center;
            margin-bottom: 40px;
        }
        header h1 {
            font-size: 36px;
            font-weight: 700;
            margin: 0 0 8px;
            background: linear-gradient(135deg, #a78bfa 0%, #818cf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        header p {
            color: #94a3b8;
            margin: 0 0 24px;
            font-size: 14px;
        }
        .search-container {
            max-width: 500px;
            margin: 0 auto;
            position: relative;
        }
        .search-input {
            width: 100%;
            padding: 14px 20px 14px 48px;
            border: 1px solid rgba(148, 163, 184, 0.2);
            border-radius: 12px;
            background: rgba(30, 41, 59, 0.8);
            color: #f8fafc;
            font-size: 15px;
            outline: none;
            transition: all 0.2s ease;
        }
        .search-input::placeholder {
            color: #64748b;
        }
        .search-input:focus {
            border-color: #7c3aed;
            box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
        }
        .search-icon {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            color: #64748b;
        }
        .stats {
            display: flex;
            justify-content: center;
            gap: 24px;
            margin-top: 20px;
            flex-wrap: wrap;
        }
        .stat-item {
            background: rgba(30, 41, 59, 0.6);
            padding: 12px 20px;
            border-radius: 10px;
            border: 1px solid rgba(148, 163, 184, 0.1);
        }
        .stat-item strong {
            color: #a78bfa;
            font-size: 20px;
        }
        .stat-item span {
            color: #94a3b8;
            font-size: 13px;
            margin-left: 6px;
        }
        .no-results {
            text-align: center;
            padding: 60px 20px;
            color: #64748b;
            display: none;
        }
        .no-results.visible {
            display: block;
        }
        .category-block {
            margin-bottom: 48px;
        }
        .category-block.hidden {
            display: none;
        }
        .category-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            padding-bottom: 12px;
            border-bottom: 1px solid rgba(148, 163, 184, 0.15);
        }
        .category-header h2 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .category-header p {
            margin: 4px 0 0;
            color: #64748b;
            font-size: 13px;
        }
        .card-grid {
            display: grid;
            gap: 16px;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }
        .link-card {
            background: rgba(30, 41, 59, 0.7);
            border: 1px solid rgba(148, 163, 184, 0.15);
            border-radius: 16px;
            padding: 20px;
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
            gap: 12px;
            transition: all 0.25s ease;
            backdrop-filter: blur(10px);
        }
        .link-card:hover {
            transform: translateY(-4px);
            border-color: #7c3aed;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .link-card.hidden {
            display: none;
        }
        .link-card .card-title {
            font-size: 16px;
            font-weight: 600;
            margin: 0;
            color: #f1f5f9;
        }
        .link-card .card-domain {
            font-size: 12px;
            color: #7c3aed;
            font-weight: 500;
        }
        .link-card .card-description {
            font-size: 13px;
            color: #94a3b8;
            line-height: 1.5;
            flex: 1;
        }
        .link-card .card-meta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 11px;
            color: #64748b;
            padding-top: 12px;
            border-top: 1px solid rgba(148, 163, 184, 0.1);
        }
        .category-tag {
            background: rgba(124, 58, 237, 0.2);
            color: #c4b5fd;
            padding: 4px 10px;
            border-radius: 999px;
            font-weight: 600;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        footer {
            text-align: center;
            padding: 40px 20px;
            color: #475569;
            font-size: 13px;
            border-top: 1px solid rgba(148, 163, 184, 0.1);
            margin-top: 40px;
        }
        footer a {
            color: #7c3aed;
            text-decoration: none;
        }
        @media (max-width: 640px) {
            .container {
                padding: 24px 16px;
            }
            header h1 {
                font-size: 28px;
            }
            .card-grid {
                grid-template-columns: 1fr;
            }
            .stats {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>✨ MyLinks Bookmarks</h1>
            <p>${allBookmarks.length} curated bookmark${allBookmarks.length === 1 ? '' : 's'} · Exported on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <div class="search-container">
                <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                </svg>
                <input type="text" class="search-input" id="searchInput" placeholder="Search bookmarks..." autocomplete="off">
            </div>
            <div class="stats">
                <div class="stat-item"><strong>${allBookmarks.length}</strong><span>Total Bookmarks</span></div>
                <div class="stat-item"><strong>${Object.keys(grouped).length}</strong><span>Categories</span></div>
            </div>
        </header>
        <div class="no-results" id="noResults">
            <h3>No bookmarks found</h3>
            <p>Try a different search term</p>
        </div>
        <main id="bookmarksList">
            ${sections}
        </main>
        <footer>
            Generated by <a href="#">MyLinks Dashboard</a>
        </footer>
    </div>
    <script>
        document.getElementById('searchInput').addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.link-card');
            const categories = document.querySelectorAll('.category-block');
            let visibleCount = 0;

            cards.forEach(card => {
                const title = card.querySelector('.card-title')?.textContent?.toLowerCase() || '';
                const domain = card.querySelector('.card-domain')?.textContent?.toLowerCase() || '';
                const description = card.querySelector('.card-description')?.textContent?.toLowerCase() || '';
                const matches = !query || title.includes(query) || domain.includes(query) || description.includes(query);
                card.classList.toggle('hidden', !matches);
                if (matches) visibleCount++;
            });

            categories.forEach(category => {
                const visibleCards = category.querySelectorAll('.link-card:not(.hidden)').length;
                category.classList.toggle('hidden', visibleCards === 0);
                const countEl = category.querySelector('.category-count');
                if (countEl && query) {
                    countEl.textContent = visibleCards + ' bookmark' + (visibleCards === 1 ? '' : 's') + ' found';
                }
            });

            document.getElementById('noResults').classList.toggle('visible', visibleCount === 0 && query);
        });
    </script>
</body>
</html>`;
}

function renderHtmlExportCard(bookmark) {
    const domain = getDomainFromUrl(bookmark.url);
    const description = bookmark.description || 'No description provided.';
    const categoryLabel = DEFAULT_CATEGORIES[bookmark.category]?.name || 'Uncategorized';
    return `
        <a class="link-card" href="${escapeHtml(bookmark.url)}" target="_blank" rel="noopener noreferrer">
            <div>
                <p class="card-title">${escapeHtml(bookmark.title)}</p>
                <p class="card-domain">${escapeHtml(domain)}</p>
            </div>
            <div class="card-description">${escapeHtml(description)}</div>
            <div class="card-meta">
                <span>${escapeHtml(bookmark.folderPath || bookmark.folder || 'Bookmarks')}</span>
                <span class="category-tag">${escapeHtml(categoryLabel)}</span>
            </div>
        </a>
    `;
}

function downloadFile(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 0);
}

function formatDateForFilename() {
    const date = new Date();
    const parts = [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0'),
        String(date.getHours()).padStart(2, '0'),
        String(date.getMinutes()).padStart(2, '0')
    ];
    return parts.join('');
}

function getDomainFromUrl(url) {
    try {
        return new URL(url).hostname.replace(/^www\./, '');
    } catch (error) {
        return url;
    }
}

function handleActionKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.currentTarget?.click();
    }
}

async function handleBookmarkSubmit(event) {
    event.preventDefault();
    if (!bookmarkForm) return;

    const mode = bookmarkForm.dataset.mode || 'add';
    let url = bookmarkUrlInput?.value.trim() || '';
    const title = bookmarkTitleInput?.value.trim() || '';
    const description = bookmarkDescriptionInput?.value.trim() || '';
    const folderId = resolveFolderId(bookmarkFolderSelect?.value);
    const categoryValue = bookmarkCategorySelect?.value || 'auto';

    if (!title) {
        showToast('Title is required.', 'error');
        return;
    }

    if (!url) {
        showToast('URL is required.', 'error');
        return;
    }

    url = normalizeUrl(url);
    if (!isValidHttpUrl(url)) {
        showToast('Enter a valid URL.', 'error');
        return;
    }

    if (bookmarkSubmitBtn) {
        bookmarkSubmitBtn.disabled = true;
        bookmarkSubmitBtn.textContent = mode === 'edit' ? 'Updating…' : 'Adding…';
    }

    try {
        if (mode === 'edit') {
            const bookmarkId = bookmarkIdInput.value;
            await updateExistingBookmark({
                id: bookmarkId,
                title,
                url,
                folderId,
                categoryValue,
                description
            });
            showToast('Bookmark updated.');
        } else {
            await createNewBookmark({
                title,
                url,
                folderId,
                categoryValue,
                description
            });
            showToast('Bookmark added.');
        }
        closeBookmarkModal();
    } catch (error) {
        console.error(error);
        showToast(error.message || 'Something went wrong.', 'error');
    } finally {
        if (bookmarkSubmitBtn) {
            bookmarkSubmitBtn.disabled = false;
            bookmarkSubmitBtn.textContent = 'Save Bookmark';
        }
    }
}

async function createNewBookmark({ title, url, folderId, categoryValue, description }) {
    const bookmark = await createBookmarkInChrome({ parentId: folderId, title, url });
    if (description) {
        bookmarkMeta[bookmark.id] = { description };
    } else {
        delete bookmarkMeta[bookmark.id];
    }

    const manualOverrides = categoryValue !== 'auto' ? { [bookmark.id]: categoryValue } : {};
    const recategorizeIds = categoryValue === 'auto' ? [bookmark.id] : [];
    await reloadData({ manualOverrides, recategorizeIds });
    return bookmark.id;
}

function updateExistingBookmark({ id, title, url, folderId, categoryValue, description }) {
    return new Promise((resolve, reject) => {
        chrome.bookmarks.update(id, { title, url }, async (updated) => {
            if (chrome.runtime.lastError || !updated) {
                reject(new Error(chrome.runtime.lastError?.message || 'Failed to update bookmark.'));
                return;
            }

            const existing = allBookmarks.find(b => b.id === id);
            const currentParent = existing?.parentId || updated.parentId;
            const moveNeeded = folderId && folderId !== currentParent;
            try {
                if (moveNeeded) {
                    await moveBookmark(id, folderId);
                }

                if (description) {
                    bookmarkMeta[id] = { description };
                } else {
                    delete bookmarkMeta[id];
                }

                const manualOverrides = categoryValue !== 'auto' ? { [id]: categoryValue } : {};
                const recategorizeIds = categoryValue === 'auto' ? [id] : [];
                await reloadData({ manualOverrides, recategorizeIds });
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    });
}

function moveBookmark(id, parentId) {
    return new Promise((resolve, reject) => {
        chrome.bookmarks.move(id, { parentId }, () => {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError.message));
                return;
            }
            resolve();
        });
    });
}

function createBookmarkInChrome({ parentId, title, url }) {
    return new Promise((resolve, reject) => {
        chrome.bookmarks.create({ parentId, title, url }, (bookmark) => {
            if (chrome.runtime.lastError || !bookmark) {
                reject(new Error(chrome.runtime.lastError?.message || 'Failed to create bookmark.'));
                return;
            }
            resolve(bookmark);
        });
    });
}

async function reloadData({ manualOverrides = {}, recategorizeIds = [] } = {}) {
    await loadBookmarks();
    populateFolderOptions();
    applyMetadataToBookmarks();

    if (recategorizeIds.length) {
        recategorizeIds.forEach(removeBookmarkFromCache);
    }

    if (Object.keys(categorizedBookmarks).length > 0) {
        applyCategoriesToBookmarks();
    } else {
        categorizeWithKeywords();
    }

    if (manualOverrides && Object.keys(manualOverrides).length) {
        for (const [id, category] of Object.entries(manualOverrides)) {
            const bookmark = allBookmarks.find(b => b.id === id);
            if (bookmark) {
                bookmark.category = category;
            }
        }
    }

    fillMissingCategoriesWithKeywords();
    updateCategorizedBookmarks();
    await saveCachedCategories();
    renderSidebar();
    renderBookmarks();
}

function removeBookmarkFromCache(bookmarkId) {
    for (const ids of Object.values(categorizedBookmarks)) {
        const index = ids.indexOf(bookmarkId);
        if (index !== -1) {
            ids.splice(index, 1);
        }
    }
}

function showToast(message, type = 'success') {
    if (!toastContainer) {
        console.log(`[${type.toUpperCase()}] ${message}`);
        return;
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3200);
}

function resolveFolderId(selectedId = null) {
    if (selectedId && bookmarkFolders.some(folder => folder.id === selectedId)) {
        return selectedId;
    }
    const bookmarksBar = bookmarkFolders.find(folder => folder.id === '1' || /bookmarks bar/i.test(folder.path || folder.title || ''));
    if (bookmarksBar) {
        return bookmarksBar.id;
    }
    return bookmarkFolders[0]?.id || '1';
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
    const description = (bookmark.description || '').toLowerCase();
    const text = `${title} ${url} ${folder} ${description}`;
    
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
    categorizedBookmarks = {};
    
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
function saveCachedCategories() {
    return new Promise((resolve) => {
        chrome.storage.local.set({
            categorizedBookmarks,
            bookmarkMeta,
            lastUpdated: Date.now()
        }, () => resolve());
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
    
    // Count bookmarks per category
    const categoryCounts = {};
    allBookmarks.forEach(b => {
        categoryCounts[b.category] = (categoryCounts[b.category] || 0) + 1;
    });
    
    // Get all categories that have bookmarks and sort alphabetically by name
    const categoriesWithBookmarks = Object.keys(categoryCounts)
        .filter(catId => categoryCounts[catId] > 0)
        .sort((a, b) => {
            // Keep 'uncategorized' at the end
            if (a === 'uncategorized') return 1;
            if (b === 'uncategorized') return -1;
            const nameA = DEFAULT_CATEGORIES[a]?.name || a;
            const nameB = DEFAULT_CATEGORIES[b]?.name || b;
            return nameA.localeCompare(nameB);
        });
    
    // Render category buttons
    for (const catId of categoriesWithBookmarks) {
        const count = categoryCounts[catId];
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
    
    // Filter by search - searches across all metadata fields
    if (searchQuery) {
        items = items.filter(item => matchesSearchQuery(item, searchQuery));
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
        <div class="card-footer">
            <div class="card-category">
                <span class="category-tag ${categoryClass}">${categoryName}</span>
            </div>
            <div class="card-actions">
                <span class="card-action-btn" data-action="edit" role="button" tabindex="0" title="Edit bookmark">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                </span>
                <span class="card-action-btn" data-action="delete" role="button" tabindex="0" title="Delete bookmark">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        <path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                    </svg>
                </span>
            </div>
        </div>
    `;
    
    // Add error handler for favicon
    const faviconImg = card.querySelector('.favicon-img');
    if (faviconImg) {
        faviconImg.addEventListener('error', handleFaviconError);
    }
    const editBtn = card.querySelector('[data-action="edit"]');
    const deleteBtn = card.querySelector('[data-action="delete"]');
    editBtn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        openBookmarkModal('edit', bookmark.id);
    });
    deleteBtn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        requestBookmarkDeletion(bookmark.id);
    });
    [editBtn, deleteBtn].forEach(btn => btn.addEventListener('keydown', handleActionKeydown));
    
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
