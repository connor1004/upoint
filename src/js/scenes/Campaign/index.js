import React, {
  Component, Fragment
} from 'react';

import Hero from './Hero';
import Main from './Main';

class Campaign extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Main />
      </Fragment>
    );
  }
}

export default Campaign;
