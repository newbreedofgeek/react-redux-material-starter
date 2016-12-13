import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link, browserHistory } from 'React-Router';
import Divider from 'material-ui/Divider';
import css from './include.scss';

export default class StationsComponent extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  componentDidMount() {
    const { getStations } = this.props;
    this.props.getStations();
  }

  render() {
    const { stations, station, location, params } = this.props;

    return (
      <div className={css.stations}>
        <h2>Stations</h2>

        <div className={css.newStation}>
          <FloatingActionButton onTouchTap={ () => { this.context.router.push('/stations/add'); }} >
            <ContentAdd />
          </FloatingActionButton>
        </div>

        {
          stations && stations.length > 0
          ?
            <Table onRowSelection={(r) => this.context.router.push('/stations/' + this.props.stations[r[0]].id)}>
              <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Station Name</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} showRowHover={true}>
              {
                stations.map((station, index) => {
                  return <TableRow key={index}>
                    <TableRowColumn>{ station.id }</TableRowColumn>
                    <TableRowColumn>{ station.name }</TableRowColumn>
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

// <Link to="/stations/ass">Home</Link>
//
// <pre>{JSON.stringify(stations, null, 2)}</pre>
// <pre>{JSON.stringify(station, null, 2)}</pre>
// <pre>{JSON.stringify(params, null, 2)}</pre>

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
