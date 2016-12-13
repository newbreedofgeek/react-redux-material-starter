import StationsContainer from 'containers/Stations';
import { UserIsAuthenticated } from 'lib/wrappers.js';

const StationsRoute = {
  path: '/stations',
  component: UserIsAuthenticated(StationsContainer)
};

// const ClinicsRoute = {
//   path: '/stations',
//   component: UserIsAuthenticated(ClinicsContainer),
//   childRoutes: [
//     {
//       path: ':id',
//       component: ClinicContainer
//     },
//   ]
// };

export default StationsRoute;
