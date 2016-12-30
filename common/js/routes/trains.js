import TrainsContainer from 'containers/Trains';
import { UserIsAuthenticated } from 'lib/wrappers.js';

const TrainsRoute = {
  path: '/stations/:stationId/trains',
  component: UserIsAuthenticated(TrainsContainer)
};

export default TrainsRoute;
