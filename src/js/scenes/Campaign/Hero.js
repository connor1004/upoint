import React from 'react';

import { Bitmaps } from '../../theme';
import HeroSection from '../../sections/Hero';

const Hero = () => (
  <HeroSection
    className="campaign-hero-section"
    background={Bitmaps.heroNSWQLD}
  />
);

export default Hero;
