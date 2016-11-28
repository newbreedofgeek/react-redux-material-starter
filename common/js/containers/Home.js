import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => ({
  user: {
    ...state.admin,
    fullName:state.admin.firstName+' '+state.admin.lastName
  }
});

const HomeContainer = connect(
  mapStateToProps
)(Home);

export default HomeContainer;
