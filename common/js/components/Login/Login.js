import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import css from './include.scss';

export default class Login extends Component {
  componentWillMount() {
    const { isAuthenticated, replace, redirect } = this.props;

    if (isAuthenticated) {
      replace(redirect);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isAuthenticated, replace, redirect } = nextProps;
    const { isAuthenticated: wasAuthenticated } = this.props;

    if (!wasAuthenticated && isAuthenticated) {
      replace(redirect);
    }
  }

  onClick = (e) => {
    e.preventDefault();

    const { login } = this.props;

    login({
      username: this.refs.username.input.value,
      password: this.refs.password.input.value,
      isAdmin: this.refs.admin.state.switched
    });
  }

  render() {
    return (
			<div className={css.login}>
				<h2>Login</h2>
          <TextField
            ref="username"
            floatingLabelText="Username"
          />
          <br/>
          <TextField
            ref="password"
            floatingLabelText="Password"
            type="password"
          />
          <Checkbox
            ref="admin"
            label="Admin"
           />
          <br />
          <RaisedButton
            label="Login"
            primary={true}
            onTouchTap={this.onClick}
           />
      </div>
    );
  }
}
