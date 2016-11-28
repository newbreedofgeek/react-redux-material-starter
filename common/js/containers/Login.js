import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import Login from '../components/Login';
import { login } from '../actions/user';

const mapStateToProps = (state, ownProps) => {
  const isAuthenticated = state.user.username || false;
  const redirect = ownProps.location.query.redirect || '/';

  return {
    isAuthenticated,
    redirect
  };
};

const mapDispatchToProps = ({
  login,
  replace: routerActions.replace
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);


export default LoginContainer;
