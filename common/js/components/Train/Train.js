import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';
import { browserHistory } from 'react-router';
import css from './include.scss';
import _ from 'lodash';

export default class TrainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  static contextTypes = {
    router: PropTypes.object,
  };

  componentWillReceiveProps(nextProps) {
    const { train } = nextProps;
    const { train: prevTrain } = this.props;

    if (!_.isEqual(train, prevTrain)) {
      this.setState({
        open: true
      });
    }
  }

  onClick = (e) => {
    e.preventDefault();

    const { createNew, saveTrain, updateTrain, train, station } = this.props;

    if (!createNew) {
      updateTrain({
        id: train.id,
        stationId: train.stationId,
        name: this.refs.name.input.value,
        role: this.refs.role.input.value,
        color: this.refs.color.input.value,
        speed: this.refs.speed.input.value,
        seats: this.refs.seats.input.value,
      });
    }
    else {
      saveTrain({
        id: train.id,
        stationId: station.id,
        name: this.refs.name.input.value,
        role: this.refs.role.input.value,
        color: this.refs.color.input.value,
        speed: this.refs.speed.input.value,
        seats: this.refs.seats.input.value,
      });

      this.context.router.push(`/stations/${station.id}/trains`);
    }
  }

  render() {
    const { createNew, location, params, station } = this.props;
    const { stationId } = params;
    let { train } = this.props;

    // hot patch required due to transisitons
    if (!train || createNew) {
      train = {
        id: null,
        stationId: null,
        name: '',
        role: '',
        color: '',
        speed: '',
        seats: '',
      };
    }

    let actionButton = <RaisedButton
                          label="Edit Train Details"
                          primary={true}
                          onTouchTap={this.onClick}
                         />;

    if (createNew) {
      actionButton = <RaisedButton
                        label="Add New Train"
                        primary={true}
                        onTouchTap={this.onClick}
                      />;
    }

    return (
      <div className={css.train}>
        <h2>{ `${train.name} from ${station.name} Station` } </h2>
        <RaisedButton
          label="Back to Trains"
          secondary={true}
          onTouchTap={ () => { this.context.router.push('/stations/' + stationId + '/trains'); } }
        />

        <br/><br/>

        <Divider />

        <TextField
          ref="name"
          floatingLabelText="Train Name"
          defaultValue={ train.name }
        />

        <br />

        <TextField
          ref="role"
          floatingLabelText="Role"
          defaultValue={ train.role }
        />

        <br />

        <TextField
          ref="color"
          floatingLabelText="Color"
          defaultValue={ train.color }
        />

        <br />

        <TextField
          ref="speed"
          floatingLabelText="Speed"
          defaultValue={ train.speed }
        />

        <br />

        <TextField
          ref="seats"
          floatingLabelText="Seats"
          defaultValue={ train.seats }
        />

        <br /> <br />

        { actionButton }

         <span className={css.gap} />

         <RaisedButton
           label="Cancel"
           primary={true}
           onTouchTap={ () => { this.context.router.push('/stations/' + stationId + '/trains'); } }
          />

          <Snackbar
            open={this.state.open}
            message="Successfully Changed!"
            autoHideDuration={4000}
            onRequestClose={() => this.setState({open: false})}
            />

      </div>
    );
  }
}
