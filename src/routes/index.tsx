import type { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import PrivateOutlet from './PrivateOutlet';
import PublicOutlet from './PublicOutlet';
import AuthPage from '../features/auth';
import DashboardPage from '../features/dashboard';
import NotFound from '../common/components/NotFound';
import { MainLayout } from '../common/layouts/MainLayout';

const AppRoutes: FC = () => (
    <Routes>
        <Route element={<PublicOutlet />}>
            <Route element={<AuthPage />} path='/auth' />
        </Route>

        <Route
            element={
                <MainLayout>
                    <PrivateOutlet />
                </MainLayout>
            }
        >
            <Route
                element={<DashboardPage />}
                path="/"
            />
        </Route>

        <Route element={<NotFound />} path="/not-found" />

        <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
);

export default AppRoutes;
