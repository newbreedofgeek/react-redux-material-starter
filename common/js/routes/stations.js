import StationsContainer from 'containers/Stations';
import { UserIsAuthenticated } from 'lib/wrappers.js';

const StationsRoute = {
  path: '/stations',
  component: UserIsAuthenticated(StationsContainer)
};

export default StationsRoute;

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
