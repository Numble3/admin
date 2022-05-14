import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import LayoutContainer from './components/layout';
import { MuiTheme } from './components/layout/mui-theme';
import { useCheckToken } from './hooks/use-admin';

const Login = lazy(() => import('src/pages/login'));
const User = lazy(() => import('src/pages/user'));
const UserDetail = lazy(() => import('src/pages/user/detail'));
const Main = lazy(() => import('src/pages/main'));
const MainDetail = lazy(() => import('src/pages/main/detail'));
const Error = lazy(() => import('src/pages/error'));

export default function Routes() {
  useCheckToken();

  const routes = useRoutes([
    {
      path: 'login',
      element: (
        <Suspense fallback={null}>
          <MuiTheme>
            <Login />
          </MuiTheme>
        </Suspense>
      ),
    },
    {
      path: '/',
      element: (
        <MuiTheme>
          <LayoutContainer />
        </MuiTheme>
      ),
      children: [
        {
          path: 'user',
          children: [
            { index: true, element: <User /> },
            { path: ':id', element: <UserDetail /> },
          ],
        },
        {
          path: 'main',
          children: [
            { index: true, element: <Main /> },
            { path: ':id', element: <MainDetail /> },
          ],
        },
      ],
    },
    { path: '*', element: <Error /> },
  ]);

  return routes;
}
