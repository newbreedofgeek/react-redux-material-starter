'use strict';

import App from 'containers/App';
import HomeRoute from './home';
import TrainsRoute from './trains';
import UsersRoute from './users';
import LoginRoute from './login';

const Routes = [
  {
    path: '/',
    component: App,
    indexRoute: HomeRoute,
    childRoutes: [
      LoginRoute,
      TrainsRoute,
      UsersRoute,
    ]
  }
];

export default Routes;
