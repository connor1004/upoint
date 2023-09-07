import React, {
  Component
} from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Row, Col, Button,
  Card, CardBody
} from 'reactstrap';

import { PRICING_NBN_PACKS } from '../../configs/constants';
import Step from '../../components/modules/Step';
import Section from '../../sections/Section';
import PricingCardNbn from '../../components/cards/PricingNbn';

class NbnSelectPlan extends Component {
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
    this.props.history.push('/dashboard/nbn/special-requirements', {
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
    const renderPricingCards = PRICING_NBN_PACKS.map((item, index) => {
      const className = pack_type ? (pack_type === item.value ? 'pricing-card-selected' : 'pricing-card-disabled') : '';
      return (
        <Col md={6} key={`${index}`}>
          <PricingCardNbn
            key={`${index}`}
            className={className}
            {...item}
            onClick={this.handleSelectPackType.bind(this, item.value)}
            actionTitle={pack_type === item.value ? 'Selected' : 'Select'}
          />
        </Col>
      );
    });
    return (
      <Section className="main-section bg-maze">
        <Container>
          <h3 className="title-underlined-primary title-underlined-center text-center font-weight-extrabold">Add an NBN service</h3>
          <div className="eat-container">
            <Step steps={['Choose plan', 'Special requirements', 'Your Details', 'Identification', 'Confirm']} index={0} />
            <Card className="form-card">
              <CardBody className="card-body-p-xl">
                <h4 className="title mb-6 title-underlined-primary font-weight-extrabold">Select your NBN plan</h4>
                <p>uPoint offers you two great plans, depending on your internet needs. Please choose one to proceed.</p>
                <Row className="mb-10">
                  {renderPricingCards}
                </Row>
                <p className="text-center font-size-md">
                  *
                  {' '}
                  <NavLink className="text-primary" to="/">Fair Use policy</NavLink>
                  {' '}
                  applies at 1TB
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

export default NbnSelectPlan;
