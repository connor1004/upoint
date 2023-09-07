import React, {
  Component
} from 'react';
import {
  NavLink
} from 'react-router-dom';
import {
  Container
} from 'reactstrap';
import Slick from 'react-slick';
import { Bitmaps } from '../../theme';
import Section from '../../sections/Section';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Section className="section-hero">
        <Slick
          fade
          className="slick-home-hero"
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          autoplaySpeed={6000}
          autoplay
          dots
        >
          <div>
            <div
              className="slick-item"
              style={{
                backgroundImage: `url(${Bitmaps.heroImage1})`
              }} />
          </div>
          <div>
            <div
              className="slick-item"
              style={{
                backgroundImage: `url(${Bitmaps.heroImage2})`
              }} />
          </div>
          <div>
            <div
              className="slick-item"
              style={{
                backgroundImage: `url(${Bitmaps.heroImage3})`
              }} />
          </div>
          <div>
            <div
              className="slick-item"
              style={{
                backgroundImage: `url(${Bitmaps.heroImage4})`,
                backgroundPosition: '70% center'
              }} />
          </div>
        </Slick>
        <Container>
          <h1 className="hero-title">Look how you benefit from being in a union!</h1>
          <span className="hero-description">Great deals on mobile plans, NBN internet, and electricity</span>
          <div className="hero-hint">
            <NavLink className="btn btn-primary btn-round" to="/register">Join Upoint</NavLink>
          </div>
        </Container>
        <div className="cover" />
      </Section>
    );
  }
}

export default Hero;
