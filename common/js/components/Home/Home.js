import React from 'react';
import { Link } from 'react-router';
import Time from 'react-time';
import css from './include.scss';

export default class Home extends React.Component {
	render() {
		return(
			<div className={css.home}>
				<h2>Home</h2>

        <div className="inner">
					<h1 className="welcome_greeting">Welcome!</h1>
					<div className="welcome_patient">
						<img src={ this.props.user.avatar.thumb } className="welcome_avatar" />
						<h3 className="welcome_patientName">{ this.props.user.fullName }</h3>
						<p>DOB: <Time value={ this.props.user.dob } format="DD/MM/YYYY" /></p>
					</div>
					<ul className="welcome_tabs">
            <li><Link to="/">Home</Link></li>
						<li><Link to="/trains">Trains</Link></li>
						<li><Link to="/users">Users</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}
