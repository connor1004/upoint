import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Container, Button, Row, Col
} from 'reactstrap';

import Section from '../../sections/Section';
import PriceCard from '../../components/cards/Price';
import {
  campaignPlansData
} from '../../configs/example-data';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: campaignPlansData
    };
  }

  render() {
    const {
      plans
    } = this.state;

    return (
      <Section className="main-section bg-maze">
        <Container className="text-center">
          <div>
            <h1 className="h3 h1-md font-weight-bold title-underlined-primary title-underlined-center">Your team, your deals.</h1>
            <p className="font-size-md font-weight-bold mx-auto" style={{ maxWidth: '930px' }}>
              Sed at massa tincidunt, malesuada enim sollicitudin, rutrum tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas mollis vehicula tellus, dignissim ornare felis facilisis non. Aliquam lacinia velit felis, non pellentesque velit dictum non.
            </p>
          </div>
          <Row className="pt-lg-12 mt-12 mb-10">
            <Col md="6" lg={{ offset: 2, size: 4 }} className="mb-4">
              <PriceCard data={plans[0]} />
            </Col>
            <Col md="6" lg="4" className="mb-4">
              <PriceCard data={plans[1]} />
            </Col>
          </Row>
          <Button className="btn-round text-uppercase font-weight-black" color="primary" tag={Link} to="/signup">Sign up for upoint energy now</Button>
        </Container>
      </Section>
    );
  }
}

export default Main;
