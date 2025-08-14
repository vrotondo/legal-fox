import React, { useState } from 'react';
import { Scale, Menu, X, User, Search } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    // Mock user state - replace with actual auth context later
    const isAuthenticated = false;
    const user = null;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'Legal Resources', href: '/resources', current: false },
        { name: 'Find Lawyers', href: '/lawyers', current: false },
        { name: 'About', href: '/about', current: false },
    ];

    return (
        <header className="bg-blue-900 shadow-lg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <Scale className="h-8 w-8 text-orange-400" />
                            <span className="ml-2 text-2xl font-bold text-white">Legal Fox</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${item.current
                                            ? 'bg-blue-700 text-white'
                                            : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                                        }`}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Right side - Search and User Menu */}
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 space-x-4">

                            {/* Search Button */}
                            <button
                                className="text-blue-100 hover:text-white p-2 rounded-md hover:bg-blue-800 transition-colors duration-200"
                                aria-label="Search"
                            >
                                <Search className="h-5 w-5" />
                            </button>

                            {/* Authentication Section */}
                            {isAuthenticated ? (
                                /* User Menu */
                                <div className="ml-3 relative">
                                    <button
                                        onClick={toggleUserMenu}
                                        className="max-w-xs bg-blue-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                                        id="user-menu-button"
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                                            <User className="h-5 w-5 text-white" />
                                        </div>
                                        <span className="ml-2 text-white text-sm">
                                            {user?.name || 'User'}
                                        </span>
                                    </button>

                                    {/* User Dropdown */}
                                    {isUserMenuOpen && (
                                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                            <a
                                                href="/profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Your Profile
                                            </a>
                                            <a
                                                href="/dashboard"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Dashboard
                                            </a>
                                            <a
                                                href="/appointments"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Appointments
                                            </a>
                                            <button
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => {/* Add logout logic */ }}
                                            >
                                                Sign out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                /* Login/Register Buttons */
                                <div className="flex items-center space-x-2">
                                    <a
                                        href="/login"
                                        className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-800"
                                    >
                                        Sign In
                                    </a>
                                    <a
                                        href="/register"
                                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                    >
                                        Sign Up
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="block h-6 w-6" />
                            ) : (
                                <Menu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${item.current
                                        ? 'bg-blue-700 text-white'
                                        : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                                    }`}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Authentication Section */}
                    <div className="pt-4 pb-3 border-t border-blue-700">
                        {isAuthenticated ? (
                            <div className="px-5">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                                        <User className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white">
                                            {user?.name || 'User'}
                                        </div>
                                        <div className="text-sm font-medium leading-none text-blue-200 mt-1">
                                            {user?.email || 'user@example.com'}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 space-y-1">
                                    <a
                                        href="/profile"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
                                    >
                                        Your Profile
                                    </a>
                                    <a
                                        href="/dashboard"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
                                    >
                                        Dashboard
                                    </a>
                                    <button
                                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
                                        onClick={() => {/* Add logout logic */ }}
                                    >
                                        Sign out
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="px-5 space-y-2">
                                <a
                                    href="/login"
                                    className="block text-center px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
                                >
                                    Sign In
                                </a>
                                <a
                                    href="/register"
                                    className="block text-center bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Sign Up
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Click outside to close dropdowns */}
            {(isUserMenuOpen || isMobileMenuOpen) && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => {
                        setIsUserMenuOpen(false);
                        setIsMobileMenuOpen(false);
                    }}
                />
            )}
        </header>
    );
};

export default Header;