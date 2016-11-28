import { connect } from 'react-redux';
import App from '../components/App';
import { logout } from '../actions/user';

const mapStateToProps = (state) => ({
  trains: {
    ...state.trains
  }
});

const mapDispatchToProps = {
  logout
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
