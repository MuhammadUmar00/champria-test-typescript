import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Dashboards

const Champria = Loader(lazy(() => import('src/content/dashboards/Champria')));

const routes: PartialRouteObject[] = [
  {
    path: 'dashboards',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/dashboards/champria"
            replace
          />
        )
      },
      {
        path: 'Champria',
        element: <Champria />
      }
    ]
  }
];

export default routes;
