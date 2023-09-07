import React, {
  Component
} from 'react';
import Hero from './Hero';
import Main from './Main';
import Difference from './Difference';
import SectionSlogan from './Slogan';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    document.body.classList.add('nav-transparent');
  }

  componentWillUnmount() {
    document.body.classList.remove('nav-transparent');
  }

  render() {
    return (
      <div className="page page-home">
        <Hero />
        <Main />
        <Difference />
        <SectionSlogan />
      </div>
    );
  }
}

export default Home;
