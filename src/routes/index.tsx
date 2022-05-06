import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layout/dashboard';
import LogoOnlyLayout from '../layout/only-logo-layout';
import Login from '../pages/login';
import RecoverPassword from '../pages/recover-password';
import Register from '../pages/register';
import Home from '../pages/app';

// import_screen

const AppRoutes = () => { 
  const IS_AUTHENTICATED = false;

  const AUTHENTICATED_ROUTES = {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { element: <Navigate to="/app" replace /> },
      { path: 'app', element: <Home /> },
      // use_screen
    ]
  };

  const UNAUTHENTICATED_ROUTES = {
    path: '/',
    element: <LogoOnlyLayout />,
    children: [
      { path: '', element: <Login /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'recover-password', element: <RecoverPassword /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  };

  return useRoutes([AUTHENTICATED_ROUTES]);
};

export default AppRoutes;