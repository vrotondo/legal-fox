import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout Components
import { Layout, AuthLayout, FullWidthLayout } from '../components/layout';

// Page Components (we'll create these next)
import HomePage from '../pages/Home/HomePage';
import ResourcesPage from '../pages/Legal/ResourcesPage';
import ResourceDetailPage from '../pages/Legal/ResourceDetailPage';
import LawyersPage from '../pages/Directory/LawyersPage';
import LawyerProfilePage from '../pages/Directory/LawyerProfilePage';
import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import ProfilePage from '../pages/User/ProfilePage';
import DashboardPage from '../pages/User/DashboardPage';
import AboutPage from '../pages/Static/AboutPage';
import ContactPage from '../pages/Static/ContactPage';
import PrivacyPage from '../pages/Static/PrivacyPage';
import TermsPage from '../pages/Static/TermsPage';
import NotFoundPage from '../pages/Static/NotFoundPage';

// Route Protection Components
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes - Main Layout */}
                <Route
                    path="/"
                    element={
                        <FullWidthLayout>
                            <HomePage />
                        </FullWidthLayout>
                    }
                />

                <Route
                    path="/about"
                    element={
                        <Layout>
                            <AboutPage />
                        </Layout>
                    }
                />

                <Route
                    path="/contact"
                    element={
                        <Layout>
                            <ContactPage />
                        </Layout>
                    }
                />

                {/* Legal Resources Routes */}
                <Route
                    path="/resources"
                    element={
                        <Layout>
                            <ResourcesPage />
                        </Layout>
                    }
                />

                <Route
                    path="/resources/:category"
                    element={
                        <Layout>
                            <ResourcesPage />
                        </Layout>
                    }
                />

                <Route
                    path="/resources/:category/:id"
                    element={
                        <Layout>
                            <ResourceDetailPage />
                        </Layout>
                    }
                />

                {/* Lawyer Directory Routes */}
                <Route
                    path="/lawyers"
                    element={
                        <Layout>
                            <LawyersPage />
                        </Layout>
                    }
                />

                <Route
                    path="/lawyers/:id"
                    element={
                        <Layout>
                            <LawyerProfilePage />
                        </Layout>
                    }
                />

                {/* Authentication Routes - Auth Layout */}
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <AuthLayout>
                                <LoginPage />
                            </AuthLayout>
                        </PublicRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <AuthLayout>
                                <RegisterPage />
                            </AuthLayout>
                        </PublicRoute>
                    }
                />

                {/* Protected Routes - Require Authentication */}
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Layout>
                                <ProfilePage />
                            </Layout>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Layout>
                                <DashboardPage />
                            </Layout>
                        </PrivateRoute>
                    }
                />

                {/* Legal/Static Pages */}
                <Route
                    path="/privacy"
                    element={
                        <Layout>
                            <PrivacyPage />
                        </Layout>
                    }
                />

                <Route
                    path="/terms"
                    element={
                        <Layout>
                            <TermsPage />
                        </Layout>
                    }
                />

                {/* Redirects */}
                <Route path="/home" element={<Navigate to="/" replace />} />

                {/* 404 Page */}
                <Route
                    path="*"
                    element={
                        <Layout>
                            <NotFoundPage />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;