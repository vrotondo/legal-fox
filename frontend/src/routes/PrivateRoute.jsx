import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext'; // We'll create this later

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    // Mock authentication check - replace with actual auth context later
    const isAuthenticated = false; // This will come from useAuth() hook

    if (!isAuthenticated) {
        // Redirect to login page with return url
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;