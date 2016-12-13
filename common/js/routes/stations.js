import StationsContainer from 'containers/Stations';
import { UserIsAuthenticated } from 'lib/wrappers.js';

const StationsRoute = {
  path: '/stations',
  component: UserIsAuthenticated(StationsContainer)
};

// const StationsRoute = {
//   path: '/stations',
//   component: UserIsAuthenticated(StationsContainer),
//   childRoutes: [
//     {
//       path: ':id',
//       component: StationContainer
//     },
//   ]
// };

export default StationsRoute;
