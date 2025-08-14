import React from 'react';

const PrivacyPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">Last updated: January 1, 2024</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                    <p className="text-gray-600 mb-4">
                        We collect information you provide directly to us, such as when you create an account,
                        use our services, or contact us for support.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                    <p className="text-gray-600 mb-4">
                        We use the information we collect to provide, maintain, and improve our services,
                        communicate with you, and ensure the security of our platform.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                    <p className="text-gray-600 mb-4">
                        We do not sell, trade, or otherwise transfer your personal information to third parties
                        without your consent, except as described in this policy.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <p className="text-gray-600">
                        If you have questions about this Privacy Policy, please contact us at privacy@legalfox.com
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPage;