import React from 'react';

export const ContactPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                <p className="text-xl text-gray-600">
                    Have questions? We're here to help. Reach out to us anytime.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-900">Email</h3>
                            <p className="text-gray-600">support@legalfox.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Phone</h3>
                            <p className="text-gray-600">1-800-LEGAL-FOX</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Address</h3>
                            <p className="text-gray-600">
                                123 Legal Street<br />
                                New York, NY 10001
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                                rows="4"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
