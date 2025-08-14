import React from 'react';
import { useParams } from 'react-router-dom';

export const ResourceDetailPage = () => {
    const { category, id } = useParams();

    // Mock data - replace with API call
    const resource = {
        id: 1,
        title: 'Understanding Your Rights During Police Encounters',
        category: 'Criminal Law',
        content: `
      <h2>Know Your Constitutional Rights</h2>
      <p>When interacting with law enforcement, it's crucial to understand your constitutional rights...</p>
      
      <h3>Your Right to Remain Silent</h3>
      <p>The Fifth Amendment protects you from self-incrimination...</p>
      
      <h3>Your Right to Legal Representation</h3>
      <p>You have the right to an attorney during questioning...</p>
    `,
        author: 'Legal Fox Editorial Team',
        publishDate: '2024-01-15',
        readTime: '8 min read'
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <article>
                <header className="mb-8">
                    <div className="mb-4">
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                            {resource.category}
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{resource.title}</h1>
                    <div className="flex items-center text-gray-600 text-sm">
                        <span className="mr-4">By {resource.author}</span>
                        <span className="mr-4">{new Date(resource.publishDate).toLocaleDateString()}</span>
                        <span>{resource.readTime}</span>
                    </div>
                </header>

                <div className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: resource.content }} />
                </div>

                <footer className="mt-12 pt-8 border-t border-gray-200">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                        <p className="text-sm text-yellow-800">
                            <strong>Legal Disclaimer:</strong> This information is for educational purposes only
                            and does not constitute legal advice. Consult with a qualified attorney for advice
                            specific to your situation.
                        </p>
                    </div>
                </footer>
            </article>
        </div>
    );
};