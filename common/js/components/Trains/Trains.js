import React, { Component } from 'react';
import css from './include.scss';

export default class TrainsComponent extends Component {
  render() {
    const { example, location, params } = this.props;

    return (
      <div className={css.trains}>
        <h2>Trains</h2>
        <p>
          Reducer state passed to props:
        </p>
        <pre>{JSON.stringify(example, null, 2)}</pre>
        <p>
          Router location passed to props:
        </p>
        <pre>{JSON.stringify(location, null, 2)}</pre>
        <p>
          Router params passed to props:
        </p>
        <pre>{JSON.stringify(params, null, 2)}</pre>
      </div>
    );
  }
}
