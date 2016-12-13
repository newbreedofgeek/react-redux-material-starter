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
        <AppBar title="Station Manager" onLeftIconButtonTouchTap={this.handleToggle}  />

        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >
          <h1 className={ css.title }>Menu</h1>
          <MenuItem onTouchTap={this.handleClose} primaryText="Home" containerElement={<Link to="/" />} className = { css.menuHolder } />
          <MenuItem onTouchTap={this.handleClose} primaryText="Stations" containerElement={<Link to="/stations" />} />
          <MenuItem onTouchTap={this.handleLogout} primaryText="Logout" />
        </Drawer>
      </div>
    );
  }
}

// <MenuItem onTouchTap={this.handleClose} primaryText="Trains" containerElement={<Link to="/trains" />} />
