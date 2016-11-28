import React from 'react';
import util from '../lib/util';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends React.Component {
  render() {
    const key = util.getPathParts(this.props.location, 1);

    return <CSSTransitionGroup
          transitionName="animate"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
        {React.cloneElement(this.props.children, {
          key: key
        })}
      </CSSTransitionGroup>
  }
};
