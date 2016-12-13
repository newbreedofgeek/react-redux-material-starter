'use strict';

import App from 'containers/App';
import HomeRoute from './home';
import StationsRoute from './stations';
import StationRoute from './station';
import TrainsRoute from './trains';
import TrainRoute from './train';
import LoginRoute from './login';

const Routes = [
  {
    path: '/',
    component: App,
    indexRoute: HomeRoute,
    childRoutes: [
      LoginRoute,
      StationsRoute,
      StationRoute,
      TrainsRoute,
      TrainRoute
    ]
  }
];

export default Routes;
