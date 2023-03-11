import { lazy, LazyExoticComponent, ReactNode } from 'react';

import Paths from '../constants/path';

const Login = lazy(() => import('../pages/login/Login'));
const OrganizationChart = lazy(() => import('../pages/OrganizationChart/OrganizationChart'));
const PersonProfile = lazy(() => import('../pages/personalProfile/index'));
const Potential = lazy(() => import('../pages/Potential/potential'))
const Career = lazy(() => import('../pages/Career/career'))

type TRoute = {
    name: string;
    path: string;
    Component: LazyExoticComponent<() => JSX.Element>;
    Fallback: ReactNode | null;
};

const routes = [
    {
        name: 'profile',
        path: Paths.PERSON_PROFILE,
        Component: PersonProfile,
        Fallback: null,
    },
    {
        name: 'organization-chart',
        path: Paths.ORGANIZATION_CHART,
        Component: OrganizationChart,
        Fallback: null,
    },
    {
        name: 'login-page',
        path: Paths.LOGIN_PAGE,
        Component: Login,
        Fallback: null,
    }, {
        name: 'potential',
        path: Paths.POTENTIAL,
        Component: Potential,
        Fallback: null

    },{
        name: 'career',
        path: Paths.CAREER,
        Component: Career,
        Fallback: null
    }
] as TRoute[];

export default routes;
