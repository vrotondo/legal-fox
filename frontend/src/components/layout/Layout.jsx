import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, className = '' }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <Header />

            {/* Main Content Area */}
            <main className={`flex-grow ${className}`}>
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

// Optional: Layout variant for full-width pages (like landing pages)
export const FullWidthLayout = ({ children, className = '' }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className={`flex-grow ${className}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

// Optional: Layout variant for pages with sidebar
export const SidebarLayout = ({ children, sidebar, className = '' }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <div className="flex-grow flex">
                {/* Sidebar */}
                {sidebar && (
                    <aside className="w-64 bg-white shadow-sm border-r border-gray-200">
                        {sidebar}
                    </aside>
                )}

                {/* Main Content */}
                <main className={`flex-grow ${className}`}>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

// Optional: Layout variant for authentication pages
export const AuthLayout = ({ children, className = '' }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Simplified header for auth pages */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <Scale className="h-8 w-8 text-orange-400" />
                            <span className="ml-2 text-2xl font-bold text-gray-900">Legal Fox</span>
                        </div>
                        <a
                            href="/"
                            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                        >
                            Back to Home
                        </a>
                    </div>
                </div>
            </header>

            {/* Auth Content */}
            <main className={`flex-grow flex items-center justify-center ${className}`}>
                {children}
            </main>

            {/* Simplified footer */}
            <footer className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Legal Fox. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;