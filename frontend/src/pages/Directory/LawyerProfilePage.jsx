import React from 'react';
import { useParams } from 'react-router-dom';
import { Users, MapPin, Star, Phone, Mail, Calendar } from 'lucide-react';

export const LawyerProfilePage = () => {
    const { id } = useParams();

    // Mock data - replace with API call
    const lawyer = {
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
        specialties: ['Divorce', 'Child Custody', 'Adoption'],
        education: 'Harvard Law School',
        bio: 'Sarah Johnson is a dedicated family law attorney with over 15 years of experience helping families navigate complex legal situations.',
        consultationFee: 'Free'
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Profile */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <div className="flex items-start gap-6 mb-6">
                            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                                <Users className="w-12 h-12 text-gray-400" />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{lawyer.name}</h1>
                                <p className="text-blue-600 font-medium text-lg mb-2">{lawyer.title}</p>
                                <div className="flex items-center gap-4 text-gray-600">
                                    <span className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        {lawyer.location}
                                    </span>
                                    <span className="flex items-center">
                                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                                        {lawyer.rating} ({lawyer.reviewCount} reviews)
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                            <p className="text-gray-600">{lawyer.bio}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                                <div className="flex flex-wrap gap-2">
                                    {lawyer.specialties.map((specialty, index) => (
                                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                                <p className="text-gray-600">{lawyer.education}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Sidebar */}
                <div>
                    <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                                <span className="text-gray-600">{lawyer.phone}</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                                <span className="text-gray-600">{lawyer.email}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                                <span className="text-gray-600">Consultation: {lawyer.consultationFee}</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700">
                                Schedule Consultation
                            </button>
                            <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-50">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};