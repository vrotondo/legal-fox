import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Book, Users, Shield, ArrowRight, Star, CheckCircle } from 'lucide-react';

const HomePage = () => {
    const features = [
        {
            icon: Book,
            title: 'Free Legal Resources',
            description: 'Access comprehensive legal information and guides to understand your rights and legal processes.'
        },
        {
            icon: Users,
            title: 'Find Qualified Lawyers',
            description: 'Connect with verified attorneys in your area with ratings, reviews, and specialization details.'
        },
        {
            icon: Shield,
            title: 'Know Your Rights',
            description: 'Learn about your legal rights in various situations with easy-to-understand explanations.'
        }
    ];

    const practiceAreas = [
        { name: 'Family Law', count: '150+ lawyers', path: '/resources/family-law' },
        { name: 'Criminal Law', count: '120+ lawyers', path: '/resources/criminal-law' },
        { name: 'Personal Injury', count: '200+ lawyers', path: '/resources/personal-injury' },
        { name: 'Business Law', count: '180+ lawyers', path: '/resources/business-law' },
        { name: 'Real Estate', count: '90+ lawyers', path: '/resources/real-estate' },
        { name: 'Employment Law', count: '110+ lawyers', path: '/resources/employment-law' }
    ];

    const stats = [
        { number: '10,000+', label: 'Legal Resources' },
        { number: '5,000+', label: 'Verified Lawyers' },
        { number: '50,000+', label: 'People Helped' },
        { number: '4.8/5', label: 'Average Rating' }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Your Gateway to
                            <span className="text-orange-400"> Legal Understanding</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Free legal information and professional attorney directory.
                            Understand your rights and find qualified legal help in your area.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <Link
                                to="/resources"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center"
                            >
                                <Book className="w-5 h-5 mr-2" />
                                Browse Legal Resources
                            </Link>
                            <Link
                                to="/lawyers"
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center"
                            >
                                <Search className="w-5 h-5 mr-2" />
                                Find Lawyers
                            </Link>
                        </div>

                        {/* Quick Search */}
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-white rounded-lg p-2 flex flex-col sm:flex-row gap-2">
                                <input
                                    type="text"
                                    placeholder="Search legal topics or find lawyers..."
                                    className="flex-1 px-4 py-3 text-gray-900 border-0 focus:ring-2 focus:ring-orange-500 rounded-md"
                                />
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors duration-200">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Legal Fox?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We make legal information accessible and help you connect with the right legal professionals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <IconComponent className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Practice Areas */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Legal Practice Areas
                        </h2>
                        <p className="text-xl text-gray-600">
                            Find information and lawyers for any legal matter
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {practiceAreas.map((area, index) => (
                            <Link
                                key={index}
                                to={area.path}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                            {area.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm mt-1">{area.count}</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Ready to Get Legal Help?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Don't navigate legal challenges alone. Get the information and professional help you need.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/resources"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                        >
                            Start with Free Resources
                        </Link>
                        <Link
                            to="/lawyers"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                        >
                            Find a Lawyer Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Legal Disclaimer */}
            <section className="py-8 bg-yellow-50 border-t border-yellow-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-sm text-yellow-800">
                            <strong>Legal Disclaimer:</strong> The information provided on Legal Fox is for general
                            informational purposes only and does not constitute legal advice. Consult with a qualified
                            attorney for advice regarding your specific legal situation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;