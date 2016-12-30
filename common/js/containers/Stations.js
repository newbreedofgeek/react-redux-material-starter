import { connect } from 'react-redux';
import Stations from '../components/Stations';
import { getStations } from '../actions/stations';

const mapStateToProps = (state, ownProps) => ({
  stations: state.stations
});

const mapDispatchToProps = ({
  getStations
});

const StationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations);

export default StationsContainer;
