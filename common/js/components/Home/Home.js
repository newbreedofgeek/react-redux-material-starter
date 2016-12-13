import React, { Component } from 'react';
import css from './include.scss';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router';

export default class Home extends Component {
	render() {
		return(
			<div className={css.home}>
				<Paper zDepth={5} className={css.holder}>
					<div className="inner">
						<h1 className="welcome_greeting">Welcome to the Station Manager</h1>
						<h2 className="welcome_blob">This is a demo app to to show how this project comes together, its a basic stations manager app.</h2>
						<div className="welcome_patient">
							<RaisedButton
								label="Get Started, Login and Manage Stations"
								secondary={true}
								onTouchTap={ () => { browserHistory.push('/stations'); } }
								/>
						</div>
					</div>
				</Paper>
			</div>
		);
	}
}
