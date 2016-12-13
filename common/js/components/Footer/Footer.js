import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { Link, browserHistory } from 'react-router';

const homeIcon = <FontIcon className="material-icons">home</FontIcon>;
const ejectIcon = <FontIcon className="material-icons">eject</FontIcon>;

class Footer extends Component {
  // select = (index) => {
  //   switch(index) {
  //     case 0:
  //       browserHistory.push('/');
  //     break;
  //     case 1:
  //       browserHistory.push('/logout');
  //     break;
  //   }
  // }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation>
          <BottomNavigationItem
            label="Home"
            icon={homeIcon}
            onTouchTap={ () => { browserHistory.push('/'); } }
          />
          <BottomNavigationItem label="Logout"
            icon={ejectIcon}
            onTouchTap={ () => { this.props.logout(); } }
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Footer;


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
