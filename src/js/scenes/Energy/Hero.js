import React, {
  Component
} from 'react';

import { Bitmaps, Icons } from '../../theme';
import HeroSection from '../../sections/Hero';

class Hero extends Component {
  render() {
    return (
      <HeroSection
        className="small-hero-section"
        background={Bitmaps.heroEnergy}
        icon={{
          className: 'bg-success text-white',
          source: Icons.electricity
        }}
        title="uPoint Energy"
      />
    );
  }
}

export default Hero;
