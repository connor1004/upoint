import React, {
  Component, Fragment
} from 'react';

import Hero from './Hero';
import Energy from './Energy';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Energy />
      </Fragment>
    );
  }
}

export default Home;
