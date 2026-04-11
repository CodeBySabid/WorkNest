import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Home from '../page/home/Home';
import Error from '../error/Error';
import Server from '../page/server/Server';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/server',
                Component: Server,
            },
            {
                path: '*',
                Component: Error,
            }
        ]
    }
]);

export default router;