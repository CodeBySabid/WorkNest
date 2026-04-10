import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Home from '../page/Home';
import Error from '../error/Error';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                path: '/home',
                Component: Home,
            },
            {
                path: '*',
                Component: Error,
            }
        ]
    }
]);

export default router;