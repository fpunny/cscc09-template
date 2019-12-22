import { lazy } from 'react';

export default [
    {
        component: lazy(() => import('./Login')),
        exact: true,
        path: '/',
    }
]