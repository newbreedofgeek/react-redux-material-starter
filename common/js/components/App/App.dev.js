import React from 'react';
import util from 'lib/util';
import Header from 'components/Header';
import Footer from 'components/Footer';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import css from './include.scss';
import DevTools from 'containers/DevTools';

export default class App extends React.Component {
  handleLogout = () => {
    const { logout } = this.props;

    logout();
  }

  render() {
    const key = util.pathToKey(this.props.location.pathname, 2);

    return (
      <MuiThemeProvider>
        <div className={css.app}>
          <Header {...this.props} />
          <div className={css.rootAnimate}>
            <CSSTransitionGroup
              transitionName="animate"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}>
                {React.cloneElement(this.props.children, {
                  key: key
                })}
              </CSSTransitionGroup>
          </div>
          <Footer {...this.props} />
        </div>
      </MuiThemeProvider>
    );
  }
}
