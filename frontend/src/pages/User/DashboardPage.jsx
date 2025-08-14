import React from 'react';

export const DashboardPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
                    <p className="text-gray-600">Your recent legal searches and activities</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-2">Saved Lawyers</h3>
                    <p className="text-gray-600">Lawyers you've bookmarked</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-2">Appointments</h3>
                    <p className="text-gray-600">Upcoming consultations</p>
                </div>
            </div>
        </div>
    );
};