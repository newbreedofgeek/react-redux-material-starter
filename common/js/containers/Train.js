import { connect } from 'react-redux';
import Train from '../components/Train';
import { updateTrain, saveTrain } from '../actions/trains';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.params.trainId == 'add'){
    return {
      station: state.stations.filter((d) => (d.id == ownProps.params.id))[0],
      train: {},
      createNew: true
    };
  }
  else {
    return {
      station: state.stations.filter((d) => (d.id == ownProps.params.id))[0],
      train: state.trains.filter(function(d) { return d.id == ownProps.params.trainId; } )[0]
    };
  }
};

const mapDispatchToProps = ({
  updateTrain,
  saveTrain
});

const TrainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Train);

export default TrainContainer;
