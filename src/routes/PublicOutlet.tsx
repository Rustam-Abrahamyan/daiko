import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../features/auth/hooks/useAuth';

const PublicOutlet: FC = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
        <Navigate to="/" replace />
    ) : (
        <Outlet />
    );
};

export default PublicOutlet;
