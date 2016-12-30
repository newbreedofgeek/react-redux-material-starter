import StationContainer from 'containers/Station';
import { UserIsAuthenticated } from 'lib/wrappers.js';

const StationRoute = {
  path: '/stations/:stationId',
  component: UserIsAuthenticated(StationContainer)
};


export default StationRoute;
