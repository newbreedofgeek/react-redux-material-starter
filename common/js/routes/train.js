import TrainContainer from 'containers/Train';
import { UserIsAuthenticated } from 'lib/wrappers.js';

const TrainRoute = {
  path: '/stations/:stationId/trains/:trainId',
  component: UserIsAuthenticated(TrainContainer)
};


export default TrainRoute;
