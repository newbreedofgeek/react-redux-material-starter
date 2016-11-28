import React, { Component } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import css from './include.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => {
    this.setState({open: false});
  };

  handleLogout = () => {
    const { logout } = this.props;

    logout();

    this.setState({open: false});
  };

  render() {
    return (
      <div className="nav">
        <AppBar title="Train Control (Demo App)" onLeftIconButtonTouchTap={this.handleToggle}  />

        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose} primaryText="Home" containerElement={<Link to="/" />} />
          <MenuItem onTouchTap={this.handleClose} primaryText="Trains" containerElement={<Link to="/trains" />} />
          <MenuItem onTouchTap={this.handleClose} primaryText="Users" containerElement={<Link to="/users" />} />
          <MenuItem onTouchTap={this.handleLogout} primaryText="Logout" />
        </Drawer>
      </div>
    );
  }
}
