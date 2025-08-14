import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search, Filter, Book, Clock, User, ArrowRight, AlertCircle } from 'lucide-react';

const ResourcesPage = () => {
    const { category } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(category || '');

    // Mock data - replace with API calls later
    const categories = [
        { id: 'family-law', name: 'Family Law', count: 45 },
        { id: 'criminal-law', name: 'Criminal Law', count: 38 },
        { id: 'personal-injury', name: 'Personal Injury', count: 52 },
        { id: 'business-law', name: 'Business Law', count: 41 },
        { id: 'real-estate', name: 'Real Estate Law', count: 29 },
        { id: 'employment-law', name: 'Employment Law', count: 35 }
    ];

    const mockResources = [
        {
            id: 1,
            title: 'Understanding Your Rights During Police Encounters',
            category: 'Criminal Law',
            categoryId: 'criminal-law',
            summary: 'Learn about your constitutional rights when interacting with law enforcement officers, including what to do and what not to do.',
            readTime: '8 min read',
            author: 'Legal Fox Editorial Team',
            publishDate: '2024-01-15',
            featured: true
        },
        {
            id: 2,
            title: 'Complete Guide to Divorce Proceedings',
            category: 'Family Law',
            categoryId: 'family-law',
            summary: 'Step-by-step walkthrough of the divorce process, including paperwork, timelines, and what to expect in court.',
            readTime: '12 min read',
            author: 'Sarah Johnson, Family Law Attorney',
            publishDate: '2024-01-10',
            featured: true
        },
        {
            id: 3,
            title: 'Small Claims Court: Filing and Preparation',
            category: 'General Legal',
            categoryId: 'general',
            summary: 'How to file and prepare for small claims court cases, including documentation and presentation tips.',
            readTime: '6 min read',
            author: 'Legal Fox Editorial Team',
            publishDate: '2024-01-08',
            featured: false
        },
        {
            id: 4,
            title: 'Workplace Harassment: Know Your Rights',
            category: 'Employment Law',
            categoryId: 'employment-law',
            summary: 'Understanding workplace harassment laws, how to document incidents, and steps to take for protection.',
            readTime: '10 min read',
            author: 'Michael Chen, Employment Attorney',
            publishDate: '2024-01-05',
            featured: false
        },
        {
            id: 5,
            title: 'Personal Injury Claims: What You Need to Know',
            category: 'Personal Injury',
            categoryId: 'personal-injury',
            summary: 'Essential information about filing personal injury claims, including timelines and documentation requirements.',
            readTime: '9 min read',
            author: 'Emily Rodriguez, PI Attorney',
            publishDate: '2024-01-03',
            featured: false
        }
    ];

    // Filter resources based on search and category
    const filteredResources = mockResources.filter(resource => {
        const matchesSearch = searchTerm === '' ||
            resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.summary.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = selectedCategory === '' ||
            resource.categoryId === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    const featuredResources = mockResources.filter(resource => resource.featured);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Legal Resources</h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Free legal information to help you understand your rights and navigate legal processes
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search legal topics, articles, and guides..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-lg border-0 focus:ring-2 focus:ring-orange-500 text-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar - Categories */}
                    <aside className="lg:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <Filter className="w-5 h-5 mr-2" />
                                Categories
                            </h3>

                            <div className="space-y-2">
                                <button
                                    onClick={() => setSelectedCategory('')}
                                    className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${selectedCategory === ''
                                            ? 'bg-blue-100 text-blue-700 font-medium'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    All Categories
                                </button>

                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 flex items-center justify-between ${selectedCategory === cat.id
                                                ? 'bg-blue-100 text-blue-700 font-medium'
                                                : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        <span>{cat.name}</span>
                                        <span className="text-sm text-gray-500">{cat.count}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:w-3/4">

                        {/* Featured Resources */}
                        {!selectedCategory && searchTerm === '' && (
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {featuredResources.map(resource => (
                                        <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
                                                        {resource.category}
                                                    </span>
                                                    <span className="text-sm text-gray-500 flex items-center">
                                                        <Clock className="w-4 h-4 mr-1" />
                                                        {resource.readTime}
                                                    </span>
                                                </div>

                                                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600">
                                                    <Link to={`/resources/${resource.categoryId}/${resource.id}`}>
                                                        {resource.title}
                                                    </Link>
                                                </h3>

                                                <p className="text-gray-600 mb-4">{resource.summary}</p>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <User className="w-4 h-4 mr-1" />
                                                        {resource.author}
                                                    </div>
                                                    <Link
                                                        to={`/resources/${resource.categoryId}/${resource.id}`}
                                                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                                                    >
                                                        Read More
                                                        <ArrowRight className="w-4 h-4 ml-1" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* All Resources */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {selectedCategory
                                        ? categories.find(c => c.id === selectedCategory)?.name || 'Resources'
                                        : 'All Resources'
                                    }
                                </h2>
                                <span className="text-gray-500">
                                    {filteredResources.length} article{filteredResources.length !== 1 ? 's' : ''}
                                </span>
                            </div>

                            {filteredResources.length === 0 ? (
                                <div className="text-center py-12">
                                    <Book className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
                                    <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {filteredResources.map(resource => (
                                        <article key={resource.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                                            {resource.category}
                                                        </span>
                                                        <span className="text-sm text-gray-500 flex items-center">
                                                            <Clock className="w-4 h-4 mr-1" />
                                                            {resource.readTime}
                                                        </span>
                                                    </div>

                                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600">
                                                        <Link to={`/resources/${resource.categoryId}/${resource.id}`}>
                                                            {resource.title}
                                                        </Link>
                                                    </h3>

                                                    <p className="text-gray-600 mb-4">{resource.summary}</p>

                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <User className="w-4 h-4 mr-1" />
                                                        <span className="mr-4">{resource.author}</span>
                                                        <span>{new Date(resource.publishDate).toLocaleDateString()}</span>
                                                    </div>
                                                </div>

                                                <div className="sm:ml-6">
                                                    <Link
                                                        to={`/resources/${resource.categoryId}/${resource.id}`}
                                                        className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                                                    >
                                                        Read Article
                                                        <ArrowRight className="w-4 h-4 ml-2" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            )}
                        </section>
                    </main>
                </div>
            </div>

            {/* Legal Disclaimer */}
            <div className="bg-yellow-50 border-t border-yellow-200 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start">
                        <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-sm text-yellow-800">
                            <strong>Important:</strong> The information provided in these resources is for educational
                            purposes only and does not constitute legal advice. Laws vary by jurisdiction and individual
                            circumstances. Always consult with a qualified attorney for advice specific to your situation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;