import React, { Component } from 'react';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import {
  Router, Route, Switch
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Api from './apis/app';
import {
  login
} from './actions/common';

import history from './history';
import Main from './scenes/Main';
import ComingSoon from './scenes/ComingSoon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false
    };
  }

  async componentWillMount() {
    const auth = Api.getAuth();
    if (auth !== null) {
      await this.props.login(auth);
    }
    this.setState({
      initialized: true
    });
  }

  render() {
    const {
      initialized
    } = this.state;
    return initialized ? (
      <Router history={history} onUpdate={() => { window.scrollTo(0, 0); }}>
        <Switch>
          <Route path="/coming-soon" name="Coming Soon" component={ComingSoon} />
          <Route path="/" name="Main" component={Main} />
        </Switch>
      </Router>
    ) : (null);
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch)
});

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
