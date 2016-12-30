import { connect } from 'react-redux';
import Station from '../components/Station';
import { updateStation, saveStation } from '../actions/stations';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.params.stationId == 'add'){
    return {
      station: {},
      createNew: true
    };
  }
  else {
    return {
      station: state.stations.filter((d) => (d.id == ownProps.params.stationId) )[0]
    };
  }
};

const mapDispatchToProps = ({
  updateStation,
  saveStation
});

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;
