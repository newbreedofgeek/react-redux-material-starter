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

export default class StationsComponent extends Component {
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
    const { station } = nextProps;
    const { station: prevStation } = this.props;

    if (!_.isEqual(station, prevStation)) {
      this.setState({
        open: true
      });
    }
  }

  onClick = (e) => {
    e.preventDefault();

    const { createNew, saveStation, updateStation, station } = this.props;

    if (!createNew) {
      updateStation({
        id: station.id,
        name: this.refs.name.input.value,
        address: {
          street: this.refs.addressStreet.input.value,
          suburb: this.refs.addressSuburb.input.value,
          postcode: this.refs.addressPostcode.input.value,
          state: this.refs.addressState.input.value
        },
      });
    }
    else {
      saveStation({
        name: this.refs.name.input.value,
        address: {
          street: this.refs.addressStreet.input.value,
          suburb: this.refs.addressSuburb.input.value,
          postcode: this.refs.addressPostcode.input.value,
          state: this.refs.addressState.input.value
        },
      });

      this.context.router.push('/stations');
    }
  }

  render() {
    const { createNew, location, params } = this.props;
    let { station } = this.props;

    // hot patch required due to transisitons
    if (!station || createNew) {
      station = {
        id: null,
        name: '',
        address: {
          street: '',
          suburb: '',
          postcode: '',
          state: '',
        }
      };
    }

    let actionButton = <RaisedButton
                          label="Edit Station Details"
                          primary={true}
                          onTouchTap={this.onClick}
                         />;

    if (createNew) {
      actionButton = <RaisedButton
                        label="Add New Station"
                        primary={true}
                        onTouchTap={this.onClick}
                      />;
    }

    return (
      <div className={css.station}>
        <h2>{ station.name }</h2>
        <RaisedButton
          label="Back to Stations"
          secondary={ true }
          onTouchTap={ () => { this.context.router.push('/stations'); } }
        />

        {
          (!createNew)
          ?
            <span>
              <span className={css.gap} />

              <RaisedButton
                label="View Trains"
                secondary={true}
                onTouchTap={ () => { this.context.router.push('/stations/' + station.id + '/trains'); } }
              />
            </span>
          :
            null
        }

        <br/><br/>

        <Divider />

        <TextField
          ref="name"
          floatingLabelText="Station Name"
          defaultValue={ station.name }
        />

        <br />

        <TextField
          ref="addressStreet"
          floatingLabelText="Street Address"
          defaultValue={ station.address.street }
        />

        <br />

        <TextField
          ref="addressSuburb"
          floatingLabelText="Suburb"
          defaultValue={ station.address.suburb }
        />

        <br />

        <TextField
          ref="addressPostcode"
          floatingLabelText="Postcode"
          defaultValue={ station.address.postcode }
        />

        <br />

        <TextField
          ref="addressState"
          floatingLabelText="State"
          defaultValue={ station.address.state }
        />

        <br /> <br />

        { actionButton }

         <span className={css.gap} />

         <RaisedButton
           label="Cancel"
           primary={true}
           onTouchTap={ () => { browserHistory.push('/stations'); } }
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

// <div className={css.stations}>
//   <h2>Stations</h2>
//   <p>
//     Reducer state passed to props:
//   </p>
//   <pre>{JSON.stringify(example, null, 2)}</pre>
//   <p>
//     Router location passed to props:
//   </p>
//   <pre>{JSON.stringify(location, null, 2)}</pre>
//   <p>
//     Router params passed to props:
//   </p>
//   <pre>{JSON.stringify(params, null, 2)}</pre>
// </div>
