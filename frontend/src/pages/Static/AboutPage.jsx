import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const AboutPage = () => {
    const values = [
        {
            icon: Target,
            title: 'Accessibility',
            description: 'Making legal information accessible to everyone, regardless of background or income.'
        },
        {
            icon: Users,
            title: 'Quality',
            description: 'Connecting people with verified, qualified legal professionals.'
        },
        {
            icon: Award,
            title: 'Trust',
            description: 'Building trust through transparency and reliable information.'
        },
        {
            icon: Heart,
            title: 'Support',
            description: 'Supporting people through difficult legal situations with compassion.'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">About Legal Fox</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We believe that everyone deserves access to quality legal information and professional legal help,
                    regardless of their background or financial situation.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                    <p className="text-gray-600 mb-4">
                        Legal Fox was founded with a simple mission: to democratize access to legal information and
                        connect people with qualified attorneys in their area.
                    </p>
                    <p className="text-gray-600">
                        We understand that legal issues can be overwhelming and intimidating. Our platform provides
                        clear, understandable legal information and helps you find the right legal professional for your needs.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Legal Fox?</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li>• Free, comprehensive legal resources</li>
                        <li>• Verified attorney directory</li>
                        <li>• User reviews and ratings</li>
                        <li>• No hidden fees or charges</li>
                        <li>• Available 24/7</li>
                    </ul>
                </div>
            </div>

            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => {
                        const IconComponent = value.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <IconComponent className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;