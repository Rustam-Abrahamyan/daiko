import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../features/auth/hooks/useAuth';

const PrivateOutlet: FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default PrivateOutlet;
