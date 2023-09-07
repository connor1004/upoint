import React, {
  Component
} from 'react';

import Main from './Main';
import Slogan from './Slogan';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Main />
        <Slogan />
      </div>
    );
  }
}

export default Dashboard;
