import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Phone, Mail, Filter, Users, Award, Calendar } from 'lucide-react';

const LawyersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPracticeArea, setSelectedPracticeArea] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [sortBy, setSortBy] = useState('rating');

    // Mock data - replace with API calls later
    const practiceAreas = [
        'Family Law',
        'Criminal Law',
        'Personal Injury',
        'Business Law',
        'Real Estate Law',
        'Employment Law',
        'Immigration Law',
        'Tax Law'
    ];

    const locations = [
        'New York, NY',
        'Brooklyn, NY',
        'Queens, NY',
        'Bronx, NY',
        'Manhattan, NY',
        'Staten Island, NY'
    ];

    const mockLawyers = [
        {
            id: 1,
            name: 'Sarah Johnson',
            title: 'Senior Family Law Attorney',
            practiceArea: 'Family Law',
            location: 'New York, NY',
            rating: 4.9,
            reviewCount: 127,
            experience: 15,
            phone: '(555) 123-4567',
            email: 'sarah.johnson@lawfirm.com',
            photo: null,
            specialties: ['Divorce', 'Child Custody', 'Adoption'],
            education: 'Harvard Law School',
            barAdmissions: ['New York', 'Connecticut'],
            languages: ['English', 'Spanish'],
            consultationFee: 'Free',
            verified: true
        },
        {
            id: 2,
            name: 'Michael Chen',
            title: 'Criminal Defense Attorney',
            practiceArea: 'Criminal Law',
            location: 'Manhattan, NY',
            rating: 4.8,
            reviewCount: 89,
            experience: 12,
            phone: '(555) 234-5678',
            email: 'michael.chen@defense.com',
            photo: null,
            specialties: ['DUI Defense', 'White Collar Crime', 'Drug Offenses'],
            education: 'Columbia Law School',
            barAdmissions: ['New York'],
            languages: ['English', 'Mandarin'],
            consultationFee: '$200',
            verified: true
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            title: 'Personal Injury Lawyer',
            practiceArea: 'Personal Injury',
            location: 'Brooklyn, NY',
            rating: 4.7,
            reviewCount: 203,
            experience: 18,
            phone: '(555) 345-6789',
            email: 'emily.rodriguez@injurylaw.com',
            photo: null,
            specialties: ['Car Accidents', 'Medical Malpractice', 'Slip & Fall'],
            education: 'NYU School of Law',
            barAdmissions: ['New York', 'New Jersey'],
            languages: ['English', 'Spanish'],
            consultationFee: 'Free',
            verified: true
        },
        {
            id: 4,
            name: 'David Thompson',
            title: 'Business Law Attorney',
            practiceArea: 'Business Law',
            location: 'New York, NY',
            rating: 4.6,
            reviewCount: 156,
            experience: 20,
            phone: '(555) 456-7890',
            email: 'david.thompson@bizlaw.com',
            photo: null,
            specialties: ['Corporate Formation', 'Contracts', 'Mergers & Acquisitions'],
            education: 'Stanford Law School',
            barAdmissions: ['New York', 'California'],
            languages: ['English'],
            consultationFee: '$300',
            verified: true
        }
    ];

    // Filter and sort lawyers
    const filteredLawyers = mockLawyers
        .filter(lawyer => {
            const matchesSearch = searchTerm === '' ||
                lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lawyer.practiceArea.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lawyer.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesPracticeArea = selectedPracticeArea === '' ||
                lawyer.practiceArea === selectedPracticeArea;

            const matchesLocation = selectedLocation === '' ||
                lawyer.location === selectedLocation;

            return matchesSearch && matchesPracticeArea && matchesLocation;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'rating':
                    return b.rating - a.rating;
                case 'experience':
                    return b.experience - a.experience;
                case 'reviews':
                    return b.reviewCount - a.reviewCount;
                case 'name':
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Find Qualified Lawyers</h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Connect with verified attorneys in your area. Read reviews, compare qualifications, and find the right legal professional for your needs.
                        </p>

                        {/* Quick Search */}
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="relative">
                                    <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search by name or specialty..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    />
                                </div>

                                <select
                                    value={selectedPracticeArea}
                                    onChange={(e) => setSelectedPracticeArea(e.target.value)}
                                    className="px-4 py-3 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                >
                                    <option value="">All Practice Areas</option>
                                    {practiceAreas.map(area => (
                                        <option key={area} value={area}>{area}</option>
                                    ))}
                                </select>

                                <select
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                    className="px-4 py-3 text-gray-900 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                >
                                    <option value="">All Locations</option>
                                    {locations.map(location => (
                                        <option key={location} value={location}>{location}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Results Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            {filteredLawyers.length} Lawyer{filteredLawyers.length !== 1 ? 's' : ''} Found
                        </h2>
                        <p className="text-gray-600">
                            {selectedPracticeArea && `${selectedPracticeArea} • `}
                            {selectedLocation && `${selectedLocation} • `}
                            Showing verified attorneys
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-gray-700">Sort by:</label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="rating">Highest Rated</option>
                            <option value="experience">Most Experienced</option>
                            <option value="reviews">Most Reviews</option>
                            <option value="name">Name (A-Z)</option>
                        </select>
                    </div>
                </div>

                {/* Lawyers List */}
                {filteredLawyers.length === 0 ? (
                    <div className="text-center py-12">
                        <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No lawyers found</h3>
                        <p className="text-gray-500">Try adjusting your search criteria to find more results.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {filteredLawyers.map(lawyer => (
                            <div key={lawyer.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                                <div className="flex flex-col lg:flex-row gap-6">

                                    {/* Lawyer Photo */}
                                    <div className="flex-shrink-0">
                                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                                            <Users className="w-12 h-12 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Lawyer Info */}
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h3 className="text-xl font-semibold text-gray-900">
                                                        <Link to={`/lawyers/${lawyer.id}`} className="hover:text-blue-600">
                                                            {lawyer.name}
                                                        </Link>
                                                    </h3>
                                                    {lawyer.verified && (
                                                        <Award className="w-5 h-5 text-green-500" title="Verified Attorney" />
                                                    )}
                                                </div>

                                                <p className="text-blue-600 font-medium mb-2">{lawyer.title}</p>

                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                                                    <div className="flex items-center">
                                                        <MapPin className="w-4 h-4 mr-1" />
                                                        {lawyer.location}
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                                                        {lawyer.rating} ({lawyer.reviewCount} reviews)
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Calendar className="w-4 h-4 mr-1" />
                                                        {lawyer.experience} years experience
                                                    </div>
                                                </div>

                                                {/* Specialties */}
                                                <div className="mb-3">
                                                    <div className="flex flex-wrap gap-2">
                                                        {lawyer.specialties.map((specialty, index) => (
                                                            <span key={index} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                                                {specialty}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Additional Info */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                                                    <div>
                                                        <strong>Education:</strong> {lawyer.education}
                                                    </div>
                                                    <div>
                                                        <strong>Bar Admissions:</strong> {lawyer.barAdmissions.join(', ')}
                                                    </div>
                                                    <div>
                                                        <strong>Languages:</strong> {lawyer.languages.join(', ')}
                                                    </div>
                                                    <div>
                                                        <strong>Consultation:</strong>
                                                        <span className={lawyer.consultationFee === 'Free' ? 'text-green-600 font-medium' : 'text-gray-600'}>
                                                            {' '}{lawyer.consultationFee}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Contact Actions */}
                                            <div className="flex flex-col gap-3 sm:min-w-[200px]">
                                                <Link
                                                    to={`/lawyers/${lawyer.id}`}
                                                    className="bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                                                >
                                                    View Profile
                                                </Link>

                                                <div className="flex flex-col gap-2 text-sm">
                                                    <a
                                                        href={`tel:${lawyer.phone}`}
                                                        className="flex items-center text-gray-600 hover:text-blue-600"
                                                    >
                                                        <Phone className="w-4 h-4 mr-2" />
                                                        {lawyer.phone}
                                                    </a>
                                                    <a
                                                        href={`mailto:${lawyer.email}`}
                                                        className="flex items-center text-gray-600 hover:text-blue-600"
                                                    >
                                                        <Mail className="w-4 h-4 mr-2" />
                                                        Email
                                                    </a>
                                                </div>

                                                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
                                                    Schedule Consultation
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination - Placeholder */}
                {filteredLawyers.length > 0 && (
                    <div className="mt-12 flex justify-center">
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-500 cursor-not-allowed">
                                Previous
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">1</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">2</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">3</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="bg-blue-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Are you a qualified attorney?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Join our directory and connect with clients who need legal help.
                    </p>
                    <Link
                        to="/lawyers/join"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                        Join Legal Fox Directory
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LawyersPage;