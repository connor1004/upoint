import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class FrontendLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      props
    } = this;
    return (
      <div className="site">
        <Header {...props} />
        <Main {...props} />
        <Footer {...props} />
      </div>
    );
  }
}

export default FrontendLayout;
