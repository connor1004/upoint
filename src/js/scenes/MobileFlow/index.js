import React, {
  Component
} from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Row, Col, Button,
  Card, CardBody
} from 'reactstrap';

import { PRICINGS, PRICING_DETAILS } from '../../configs/constants';
import Step from '../../components/modules/Step';
import Section from '../../sections/Section';
import PricingCard from '../../components/cards/Pricing';

class MobileSelectPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pack_type: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.props.history.goBack();
  }

  handleSubmit() {
    const { pack_type } = this.state;
    this.props.history.push('/dashboard/mobile/your-details', {
      pack_type
    });
  }

  handleSelectPackType(value) {
    this.setState({
      pack_type: value
    });
  }

  render() {
    const { pack_type } = this.state;
    const renderPricingCards = PRICINGS.map((item, index) => {
      const className = pack_type ? (pack_type === item.value ? 'pricing-card-selected' : 'pricing-card-disabled') : '';
      let packDetails = null;
      for (let i = 0; i < PRICING_DETAILS.length; i++) {
        if (PRICING_DETAILS[i].value === item.value) {
          packDetails = PRICING_DETAILS[i];
          break;
        }
      }
      return (
        <Col lg={4} key={`${index}`}>
          <PricingCard
            key={`${index}`}
            className={className}
            {...item}
            details={packDetails}
            onClick={this.handleSelectPackType.bind(this, item.value)}
            actionTitle={pack_type === item.value ? 'Selected' : 'Select'}
          />
        </Col>
      );
    });
    return (
      <Section className="main-section bg-maze">
        <Container>
          <h3 className="title-underlined-primary title-underlined-center text-center font-weight-extrabold">Add a mobile  service</h3>
          <div className="eat-container">
            <Step steps={['Choose plan', 'Your Details', 'Identity', 'Confirm']} index={0} />
            <Card className="form-card">
              <CardBody className="card-body-p-lg">
                {/* <h3 className="title mb-10 title-underlined-primary title-underlined-center text-center font-weight-extrabold">Select your plan</h3> */}
                <Row className="mb-10">
                  {renderPricingCards}
                </Row>
                <p className="text-center font-size-md">
                  All of our plans are 12 month SIM Only. For more information, please refer to the
                  {' '}
                  <NavLink className="text-primary" to="/">Critical Summary Information</NavLink>
                  .
                </p>
                <div className="d-flex justify-content-between pt-10 mb-8">
                  <Button type="button" color="primary" outline className="font-weight-extrabold btn-round text-uppercase mr-4" onClick={this.handleBack}>Back</Button>
                  <Button
                    onClick={this.handleSubmit}
                    disabled={!pack_type}
                    color="primary"
                    className="font-weight-extrabold btn-round text-uppercase"
                  >
                    Next
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </Container>
      </Section>
    );
  }
}

export default MobileSelectPlan;
