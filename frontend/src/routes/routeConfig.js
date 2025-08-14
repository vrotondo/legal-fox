// Route path constants
export const ROUTES = {
    // Public routes
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',

    // Legal resources
    RESOURCES: '/resources',
    RESOURCES_CATEGORY: '/resources/:category',
    RESOURCE_DETAIL: '/resources/:category/:id',

    // Lawyer directory
    LAWYERS: '/lawyers',
    LAWYER_PROFILE: '/lawyers/:id',

    // Authentication
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',

    // Protected user routes
    PROFILE: '/profile',
    DASHBOARD: '/dashboard',
    APPOINTMENTS: '/appointments',
    FAVORITES: '/favorites',

    // Static/Legal pages
    PRIVACY: '/privacy',
    TERMS: '/terms',
    COOKIES: '/cookies',
    DISCLAIMER: '/disclaimer',
    ACCESSIBILITY: '/accessibility',

    // Admin routes (for future)
    ADMIN: '/admin',
    ADMIN_LAWYERS: '/admin/lawyers',
    ADMIN_RESOURCES: '/admin/resources',
    ADMIN_USERS: '/admin/users',
};

// Route helper functions
export const buildRoute = (route, params = {}) => {
    let path = route;
    Object.keys(params).forEach(key => {
        path = path.replace(`:${key}`, params[key]);
    });
    return path;
};

// Example usage: buildRoute(ROUTES.LAWYER_PROFILE, { id: '123' }) => '/lawyers/123'

// Navigation menu configuration
export const NAVIGATION_ITEMS = [
    {
        name: 'Home',
        href: ROUTES.HOME,
        public: true,
        mobile: true
    },
    {
        name: 'Legal Resources',
        href: ROUTES.RESOURCES,
        public: true,
        mobile: true,
        children: [
            { name: 'All Resources', href: ROUTES.RESOURCES },
            { name: 'Family Law', href: buildRoute(ROUTES.RESOURCES_CATEGORY, { category: 'family-law' }) },
            { name: 'Criminal Law', href: buildRoute(ROUTES.RESOURCES_CATEGORY, { category: 'criminal-law' }) },
            { name: 'Personal Injury', href: buildRoute(ROUTES.RESOURCES_CATEGORY, { category: 'personal-injury' }) },
            { name: 'Business Law', href: buildRoute(ROUTES.RESOURCES_CATEGORY, { category: 'business-law' }) },
        ]
    },
    {
        name: 'Find Lawyers',
        href: ROUTES.LAWYERS,
        public: true,
        mobile: true
    },
    {
        name: 'About',
        href: ROUTES.ABOUT,
        public: true,
        mobile: false
    }
];

// User menu items (when authenticated)
export const USER_MENU_ITEMS = [
    {
        name: 'Dashboard',
        href: ROUTES.DASHBOARD,
        icon: 'dashboard'
    },
    {
        name: 'My Profile',
        href: ROUTES.PROFILE,
        icon: 'user'
    },
    {
        name: 'Appointments',
        href: ROUTES.APPOINTMENTS,
        icon: 'calendar'
    },
    {
        name: 'Favorites',
        href: ROUTES.FAVORITES,
        icon: 'heart'
    }
];

// Footer link configuration
export const FOOTER_LINKS = {
    legal: [
        { name: 'Family Law', href: buildRoute(ROUTES.RESOURCES_CATEGORY, { category: 'family-law' }) },
        { name: 'Criminal Law', href: buildRoute(ROUTES.RESOURCES_CATEGORY, { category: 'criminal-law' }) },
        { name: 'Personal Injury', href: buildRoute(ROUTES.RESOURCES_CATEGORY, { category: 'personal-injury' }) },
        { name: 'Business Law', href: buildRoute(ROUTES.RESOURCES_CATEGORY, { category: 'business-law' }) },
        { name: 'Real Estate Law', href: buildRoute(ROUTES.RESOURCES_CATEGORY, { category: 'real-estate' }) },
        { name: 'Employment Law', href: buildRoute(ROUTES.RESOURCES_CATEGORY, { category: 'employment-law' }) }
    ],
    resources: [
        { name: 'Legal Articles', href: ROUTES.RESOURCES },
        { name: 'Know Your Rights', href: `${ROUTES.RESOURCES}/rights` },
        { name: 'Legal Forms', href: `${ROUTES.RESOURCES}/forms` },
        { name: 'Court Procedures', href: `${ROUTES.RESOURCES}/procedures` },
        { name: 'Legal Glossary', href: `${ROUTES.RESOURCES}/glossary` },
        { name: 'FAQ', href: '/faq' }
    ],
    company: [
        { name: 'About Us', href: ROUTES.ABOUT },
        { name: 'Contact', href: ROUTES.CONTACT },
        { name: 'For Lawyers', href: '/lawyers/join' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' }
    ],
    legal_pages: [
        { name: 'Privacy Policy', href: ROUTES.PRIVACY },
        { name: 'Terms of Service', href: ROUTES.TERMS },
        { name: 'Cookie Policy', href: ROUTES.COOKIES },
        { name: 'Disclaimer', href: ROUTES.DISCLAIMER },
        { name: 'Accessibility', href: ROUTES.ACCESSIBILITY }
    ]
};

// Meta information for routes (useful for SEO)
export const ROUTE_META = {
    [ROUTES.HOME]: {
        title: 'Legal Fox - Free Legal Information & Attorney Directory',
        description: 'Find legal information and qualified attorneys in your area. Free legal resources and professional directory.',
        keywords: 'legal help, attorneys, lawyers, legal advice, legal resources'
    },
    [ROUTES.RESOURCES]: {
        title: 'Legal Resources - Free Legal Information | Legal Fox',
        description: 'Access free legal information, articles, and resources to understand your rights.',
        keywords: 'legal resources, legal articles, know your rights, legal information'
    },
    [ROUTES.LAWYERS]: {
        title: 'Find Lawyers & Attorneys Near You | Legal Fox',
        description: 'Search and connect with qualified lawyers and attorneys in your area.',
        keywords: 'find lawyers, attorneys near me, legal professionals, lawyer directory'
    },
    [ROUTES.LOGIN]: {
        title: 'Login | Legal Fox',
        description: 'Login to your Legal Fox account to access personalized features.',
        keywords: 'login, sign in, account access'
    }
};

export default ROUTES;