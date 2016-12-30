import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';
import { Link, browserHistory } from 'React-Router';
import css from './include.scss';

export default class TrainsComponent extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  componentDidMount() {
    const { getTrains } = this.props;
    this.props.getTrains();
  }

  render() {
    const { trains, train, station, location, params } = this.props;
    const { stationId } = params;

    return (
      <div className={css.trains}>
        <h2>Trains of {station.name}</h2>

        <div className={css.newTrain}>
          <FloatingActionButton onTouchTap={ () => { this.context.router.push('/stations/' + stationId + '/trains/add'); }} >
            <ContentAdd />
          </FloatingActionButton>
        </div>

        <RaisedButton
          label="Back to Station"
          secondary={ true }
          onTouchTap={ () => { this.context.router.push('/stations/' + stationId); } }
        />

        <br/><br/>

        <Divider />

        <br/>

        {
          trains && trains.length > 0
          ?
            <Table onRowSelection={(r) => this.context.router.push('/stations/' + stationId + '/trains/' + this.props.trains[r[0]].id)}>
              <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Train Name</TableHeaderColumn>
                  <TableHeaderColumn>Role</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} showRowHover={true}>
              {
                trains.map((train, index) => {
                  return <TableRow key={index}>
                    <TableRowColumn>{ train.id }</TableRowColumn>
                    <TableRowColumn>{ train.name }</TableRowColumn>
                    <TableRowColumn>{ train.role }</TableRowColumn>
                  </TableRow>;
                })
              }
              </TableBody>
            </Table>
          :
            <CircularProgress size={80} thickness={5} />
        }
      </div>
    );
  }
}
