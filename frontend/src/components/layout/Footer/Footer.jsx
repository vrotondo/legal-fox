import React from 'react';
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        legal: [
            { name: 'Family Law', href: '/resources/family-law' },
            { name: 'Criminal Law', href: '/resources/criminal-law' },
            { name: 'Personal Injury', href: '/resources/personal-injury' },
            { name: 'Business Law', href: '/resources/business-law' },
            { name: 'Real Estate Law', href: '/resources/real-estate' },
            { name: 'Employment Law', href: '/resources/employment-law' }
        ],
        resources: [
            { name: 'Legal Articles', href: '/resources' },
            { name: 'Know Your Rights', href: '/resources/rights' },
            { name: 'Legal Forms', href: '/resources/forms' },
            { name: 'Court Procedures', href: '/resources/procedures' },
            { name: 'Legal Glossary', href: '/resources/glossary' },
            { name: 'FAQ', href: '/faq' }
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Contact', href: '/contact' },
            { name: 'For Lawyers', href: '/lawyers/join' },
            { name: 'Careers', href: '/careers' },
            { name: 'Press', href: '/press' },
            { name: 'Blog', href: '/blog' }
        ],
        legal_pages: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Cookie Policy', href: '/cookies' },
            { name: 'Disclaimer', href: '/disclaimer' },
            { name: 'Accessibility', href: '/accessibility' }
        ]
    };

    const socialLinks = [
        { name: 'Facebook', href: '#', icon: Facebook },
        { name: 'Twitter', href: '#', icon: Twitter },
        { name: 'LinkedIn', href: '#', icon: Linkedin }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">

                    {/* Logo and Company Info */}
                    <div className="space-y-8 xl:col-span-1">
                        <div className="flex items-center">
                            <Scale className="h-8 w-8 text-orange-400" />
                            <span className="ml-2 text-2xl font-bold">Legal Fox</span>
                        </div>

                        <p className="text-gray-300 text-base max-w-md">
                            Connecting people with legal information and qualified attorneys.
                            Your trusted resource for understanding your rights and finding legal help.
                        </p>

                        {/* Contact Information */}
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-300">
                                <Phone className="h-5 w-5 mr-3 text-orange-400" />
                                <span className="text-sm">1-800-LEGAL-FOX</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <Mail className="h-5 w-5 mr-3 text-orange-400" />
                                <span className="text-sm">support@legalfox.com</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <MapPin className="h-5 w-5 mr-3 text-orange-400" />
                                <span className="text-sm">New York, NY</span>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex space-x-6">
                            {socialLinks.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                                        aria-label={item.name}
                                    >
                                        <IconComponent className="h-6 w-6" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">

                            {/* Legal Practice Areas */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                                    Practice Areas
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {footerLinks.legal.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-300 hover:text-orange-400 transition-colors duration-200"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Resources */}
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                                    Resources
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {footerLinks.resources.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-300 hover:text-orange-400 transition-colors duration-200"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-8">

                            {/* Company */}
                            <div>
                                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                                    Company
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {footerLinks.company.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-300 hover:text-orange-400 transition-colors duration-200"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal Pages */}
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                                    Legal
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {footerLinks.legal_pages.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-300 hover:text-orange-400 transition-colors duration-200"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal Disclaimer */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="bg-yellow-900 bg-opacity-50 border-l-4 border-yellow-400 p-4 rounded">
                        <div className="flex">
                            <div className="ml-3">
                                <p className="text-sm text-yellow-100">
                                    <strong>Legal Disclaimer:</strong> The information provided on Legal Fox is for general
                                    informational purposes only and does not constitute legal advice. The use of this website
                                    does not create an attorney-client relationship. For specific legal advice, please consult
                                    with a qualified attorney in your jurisdiction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-gray-800">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Legal Fox. All rights reserved.
                        </p>
                        <div className="mt-2 sm:mt-0 flex space-x-6 text-sm text-gray-400">
                            <span>Made with ❤️ for legal accessibility</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;