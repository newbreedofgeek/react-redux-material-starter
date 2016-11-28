import { connect } from 'react-redux';
import Trains from '../components/Trains';

const mapStateToProps = (state) => ({
  trains: {
    ...state.trains
  }
});

const TrainsContainer = connect(
  mapStateToProps
)(Trains);

export default TrainsContainer;
