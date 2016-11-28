import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { Link, browserHistory } from 'react-router';

const homeIcon = <FontIcon className="material-icons">home</FontIcon>;
const ejectIcon = <FontIcon className="material-icons">eject</FontIcon>;

class Footer extends Component {
  select = (index) => {
    switch(index) {
      case 0:
        browserHistory.push('/');
      break;
      case 1:
        browserHistory.push('/logout');
      break;
    }
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation>
          <BottomNavigationItem
            label="Home"
            icon={homeIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem label="Logout"
            icon={ejectIcon}
            onTouchTap={() => this.select(1)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Footer;
