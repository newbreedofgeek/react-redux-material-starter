import { connect } from 'react-redux';
import Trains from '../components/Trains';
import { getTrains } from '../actions/trains';

const mapStateToProps = (state, ownProps) => ({
    trains: state.trains.filter((r) => (r.stationId == ownProps.params.stationId)),
    station: state.stations.filter((d) => (d.id == ownProps.params.stationId))[0]
  }
);

const mapDispatchToProps = ({
  getTrains
});

const TrainsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trains);

export default TrainsContainer;
