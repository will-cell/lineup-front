import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../../core/useCases/authStore';
import { LoadingScreen } from './LoadingScreen';

interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { checkAuth, isAuthenticated, isLoading } = useAuthStore();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    if (isLoading && !showContent) {
        return <LoadingScreen onLoadingComplete={() => setShowContent(true)} />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};