import UsersContainer from 'containers/Users';
import { UserIsAuthenticated, } from 'lib/wrappers.js';

const UserRoute = {
  path: '/users(/:id)',
  component: UserIsAuthenticated(UsersContainer),
};

export default UserRoute;
