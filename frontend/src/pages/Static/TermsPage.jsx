export const TermsPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">Last updated: January 1, 2024</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                    <p className="text-gray-600 mb-4">
                        By accessing and using Legal Fox, you accept and agree to be bound by the terms
                        and provision of this agreement.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
                    <p className="text-gray-600 mb-4">
                        Permission is granted to temporarily use Legal Fox for personal, non-commercial
                        transitory viewing only. This is the grant of a license, not a transfer of title.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
                    <p className="text-gray-600 mb-4">
                        The information on Legal Fox is provided for educational purposes only and does not
                        constitute legal advice. Always consult with a qualified attorney for legal matters.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                    <p className="text-gray-600">
                        Questions about the Terms of Service should be sent to us at legal@legalfox.com
                    </p>
                </section>
            </div>
        </div>
    );
};
