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
import Pack from '../../components/cards/Pack';
import { Icons } from '../../theme';
import Section from '../../sections/Section';

class Difference extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Section className="section-info">
        <Container>
          <h1 className="section-title section-item title-responsive">The uPoint difference</h1>
          <div className="section-item">
            <Slick
              dots
              slidesToShow={3}
              slidesToScroll={1}
              arrows={false}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]}
            >
              <div>
                <Pack
                  source={Icons.cuttingOut}
                  size="75px"
                  title="Cutting out big business"
                  description="uPoint is set up to look after us, not the fat cats. Let’s share with each other, not shareholders!"
                />
              </div>
              <div>
                <Pack
                  source={Icons.givingBack}
                  size="75px"
                  title="Giving back"
                  description="Profits go back into your union to grow the movement and make us stronger."
                />
              </div>
              <div>
                <Pack
                  source={Icons.austrialianSupport}
                  size="75px"
                  scale={2}
                  title="Australian support"
                  description="Manage your account and services easily with the online portal."
                />
              </div>
            </Slick>
          </div>
          <div className="section-item text-center">
            <NavLink className="btn btn-outline-primary btn-round font-weight-extrabold text-uppercase" to="/help">Find out More</NavLink>
          </div>
        </Container>
      </Section>
    );
  }
}

export default Difference;
