export const NotFoundPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <div className="mb-8">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-3xl font-bold text-gray-700 mb-4">Page Not Found</h2>
                <p className="text-xl text-gray-600 mb-8">
                    Sorry, we couldn't find the page you're looking for.
                </p>
            </div>

            <div className="space-y-4">
                <a
                    href="/"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                    Go Home
                </a>
                <div>
                    <a href="/resources" className="text-blue-600 hover:text-blue-500 mx-4">
                        Browse Resources
                    </a>
                    <a href="/lawyers" className="text-blue-600 hover:text-blue-500 mx-4">
                        Find Lawyers
                    </a>
                </div>
            </div>
        </div>
    );
};