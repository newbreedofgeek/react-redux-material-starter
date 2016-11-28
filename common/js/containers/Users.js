import { connect } from 'react-redux';
import Users from '../components/Users';

const mapStateToProps = (state) => ({
  users: {
    ...state.users
  }
});

const UsersContainer = connect(
  mapStateToProps
)(Users);

export default UsersContainer;
