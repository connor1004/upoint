import React, {
  Component
} from 'react';
import { Bitmaps } from '../../theme';
import Slogan from '../../sections/Slogan';

class SectionSlogan extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Slogan
        className="has-triangle-left text-center"
        title="uPoint uses our collective power to get you a better deal on the best utilities."
      >
        <p>We’ve created our own company to cut out the middle man and get benefits for you instead of paying out huge profits to shareholders. Normally when you pay less, you get less, but with uPoint you pay less to get the best quality goods and services, like the coverage of Australia’s largest mobile network.</p>
        <img
          src={Bitmaps.brandACTU}
          alt="ACTU"
          width="231px"
          height="51px"
          style={{ marginTop: '40px' }}
        />
      </Slogan>
    );
  }
}

export default SectionSlogan;
