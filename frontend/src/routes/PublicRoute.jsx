import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext'; // We'll create this later

const PublicRoute = ({ children }) => {
    const location = useLocation();

    // Mock authentication check - replace with actual auth context later
    const isAuthenticated = false; // This will come from useAuth() hook

    if (isAuthenticated) {
        // If user is already logged in, redirect to dashboard or intended page
        const from = location.state?.from?.pathname || '/dashboard';
        return <Navigate to={from} replace />;
    }

    return children;
};

export default PublicRoute;