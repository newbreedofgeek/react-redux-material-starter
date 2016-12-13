import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => ({
  train: {}
});

const HomeContainer = connect(
  mapStateToProps
)(Home);

export default HomeContainer;
