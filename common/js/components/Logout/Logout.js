import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import css from './include.scss';

export default class Logout extends Component {
	componentWillMount() {
		const { logout } = this.props;

		setTimeout(function() {
			logout();
		}, 3000);
	}

	render() {
		return(
			<div className={css.logout}>
				<h2>Logout</h2>
				<CircularProgress size={80} thickness={5} />
      </div>
		);
	}
}
