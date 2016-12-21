import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { Link, browserHistory } from 'react-router';
import { VisibleOnlyAuthenticated, VisibleOnlyAdmin } from '../../lib/wrappers.js';
import css from './include.scss';

const homeIcon = <FontIcon className="material-icons">home</FontIcon>;
const ejectIcon = <FontIcon className="material-icons">eject</FontIcon>;

export default class Footer extends Component {
  render() {
    const OnlyAuthLinkLogout = VisibleOnlyAuthenticated(() => <BottomNavigationItem label="Logout"
                                                        icon={ejectIcon}
                                                        onTouchTap={ () => { this.props.logout(); } }
                                                      />);

    return (
      <div className={css.footer}>

        <Paper zDepth={1}>
          <BottomNavigation>
            <BottomNavigationItem
              label="Home"
              icon={homeIcon}
              onTouchTap={ () => { browserHistory.push('/'); } }
            />
            <OnlyAuthLinkLogout />
          </BottomNavigation>
        </Paper>

      </div>
    );
  }
}


//
// const Footer = () => (
//   <footer className={css.bgColor}>
//     <Link to="/">Home</Link>
//     <Link to="/stations">Stations</Link>
//     <Link to="/trains">Trains</Link>
//     <Link to="/logout">Logout</Link>
//   </footer>
// );
//
// export default Footer;
