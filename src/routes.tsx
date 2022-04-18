import { lazy, useEffect } from 'react';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';

const Login = lazy(() => import('src/pages/login'));
const User = lazy(() => import('src/pages/user'));
const UserDetail = lazy(() => import('src/pages/user/detail'));
const Main = lazy(() => import('src/pages/main'));
const MainDetail = lazy(() => import('src/pages/main/detail'));
const Error = lazy(() => import('src/pages/error'));

export default function Routes() {
  const location = useLocation();
  const navigate = useNavigate();

  const routes = useRoutes([
    { path: 'login', element: <Login /> },
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
    { path: '*', element: <Error /> },
  ]);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('login');
    }
  });

  return routes;
}
