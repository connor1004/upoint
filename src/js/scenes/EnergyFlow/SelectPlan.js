/* eslint-disable react/no-unescaped-entities */
import React, {
  Component
} from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Row, Col, Button,
  Card, CardBody, Form, FormGroup, Input, Label
} from 'reactstrap';
import {
  YES_NO
} from '../../configs/enums';
import { PRICING_UNION } from '../../configs/constants';
import { SAMPLE_BILL } from '../../configs/example-data';
import Step from '../../components/modules/Step';
import Section from '../../sections/Section';
import PriceCardUnion from '../../components/cards/PriceUnion';
import { Icons } from '../../theme';
import SvgIcon from '../../components/modules/SvgIcon';
import CheckButton from '../../components/forms/CheckButton';

class EnergySelectPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pack_type: '',
      compare_bill: SAMPLE_BILL
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.props.history.goBack();
  }

  handleSubmit() {
    const { pack_type, compare_bill } = this.state;
    this.props.history.push('/dashboard/energy/special-requirements', {
      pack_type,
      compare_bill
    });
  }

  handleSelectPackType(value) {
    this.setState({
      pack_type: value
    });
  }

  render() {
    const { pack_type, compare_bill } = this.state;
    const renderPricingCards = PRICING_UNION.map((item, index) => {
      const className = pack_type ? (pack_type === item.value ? 'pricing-card-selected' : 'pricing-card-disabled') : '';
      return (
        <Col md={4} key={`${index}`}>
          <PriceCardUnion
            key={`${index}`}
            className={className}
            data={item}
            onClick={this.handleSelectPackType.bind(this, item.value)}
            actionTitle={pack_type === item.value ? 'Selected' : 'Select'}
          />
        </Col>
      );
    });
    return (
      <Section className="main-section bg-maze">
        <Container>
          <h3 className="title-underlined-primary title-underlined-center text-center font-weight-extrabold">Add an energy service</h3>
          <div className="eat-container">
            <Step steps={['Choose plan', 'Special requirements', 'Your Details', 'Identification', 'Confirm']} index={0} />
            <Card className="form-card">
              <CardBody className="card-body-p-xl">
                <h4 className="title title-underlined-primary font-weight-extrabold">Enter your details to compare your electricity bill</h4>
                <Row>
                  <Col md={8} className="mb-4">
                    <p>As a Union member, our promise to you is to ensure you are getting an affordable offer to power your home. That's why we only have one market offer with no confusing discounts or hidden costs. What you see is what you get.</p>
                    <p>Grab a recent bill the enter your postcode below to get started.</p>
                  </Col>
                </Row>
                <Form rol="form">
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Label>What is your postcode?</Label>
                        <div className="custom-text">
                          <Input
                            className="custom-input"
                            type="text"
                            name="peak_usage"
                            value={compare_bill && compare_bill.postcode}
                          />
                          <SvgIcon source={Icons.check} className="custom-label text-primary" />
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Label>What type of energy bill is it?</Label>
                        <CheckButton
                          className="btn-block"
                          color="primary"
                          checked={compare_bill && compare_bill.bill_type_residential === YES_NO.YES}
                          style={{ width: 190 }}
                        >
                          Residential
                        </CheckButton>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Label>Do you have solar?</Label>
                        <div className="d-flex" style={{ maxWidth: '100%', width: '396px' }}>
                          <div className="mr-4" style={{ flex: 1 }}>
                            <CheckButton
                              className="btn-block"
                              color="primary"
                              checked={compare_bill && compare_bill.solar === YES_NO.YES}

                            >
                              Yes
                            </CheckButton>
                          </div>
                          <div style={{ flex: 1 }}>
                            <CheckButton
                              className="btn-block"
                              color="primary"
                              checked={compare_bill && compare_bill.solar === YES_NO.NO}

                            >
                              No
                            </CheckButton>
                          </div>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Label>Electricity Tariff</Label>
                        <CheckButton
                          className="btn-block"
                          color="primary"
                          checked={compare_bill && compare_bill.electricity_single_rate === YES_NO.YES}
                          style={{ width: 190 }}
                        >
                          Single rate
                        </CheckButton>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label className="d-block">&nbsp;</Label>
                        <small className="text-muted">
                          We use the single rate tariff for your postcode to provide you with an estimate that's easy to understand.
                        </small>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Label>Do you have controlled load?</Label>
                        <div className="d-flex" style={{ maxWidth: '100%', width: '396px' }}>
                          <div className="mr-4" style={{ flex: 1 }}>
                            <CheckButton
                              className="btn-block"
                              color="primary"
                              checked={compare_bill && compare_bill.controlled_load === YES_NO.YES}

                            >
                              Yes
                            </CheckButton>
                          </div>
                          <div style={{ flex: 1 }}>
                            <CheckButton
                              className="btn-block"
                              color="primary"
                              checked={compare_bill && compare_bill.controlled_load === YES_NO.NO}

                            >
                              No
                            </CheckButton>
                          </div>
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label className="d-block">&nbsp;</Label>
                        <small className="text-muted">
                          Controlled load is electricity supplied to specific appliances, such as electric how water systems or slab or underfloor heating, which are often separately metered.
                        </small>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Label>What is your peak usage?</Label>
                        <div className="custom-text">
                          <Input
                            className="custom-input"
                            type="text"
                            name="peak_usage"
                            value={compare_bill && compare_bill.peak_usage}

                          />
                          <span className="custom-label text-cyan">kW</span>
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label className="d-block">&nbsp;</Label>
                        <small className="text-muted">
                          Referring to your bill, enter the total peak kWh.
                        </small>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Label>Number of days on energy bill</Label>
                        <div className="custom-text">
                          <Input
                            className="custom-input"
                            type="text"
                            name="peak_usage"
                            value={compare_bill && compare_bill.bill_days}

                          />
                          <span className="custom-label text-cyan">days</span>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Label>Your name</Label>
                        <Input
                          type="text"
                          name="name"
                          value={compare_bill && compare_bill.name}

                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Label>Your phone number</Label>
                        <Input
                          type="text"
                          name="name"
                          value={compare_bill && compare_bill.phone_number}

                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Label>Your email</Label>
                        <Input
                          type="email"
                          name="name"
                          value={compare_bill && compare_bill.email}

                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <FormGroup>
                        <Button
                          type="button"
                          color="primary"
                          className="text-uppercase btn-round font-weight-extrabold"
                        >
                          Compare your current bill
                        </Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardBody className="card-body-p-xl card-stack">
                <h5 className="text-center mb-10 font-weight-bold" style={{ maxWidth: 670, marginLeft: 'auto', marginRight: 'auto' }}>We're compared your bill based on the information you've provided us. Compare and select from one of uPoint Energy's plans:</h5>
                <Row className="mb-10">
                  {renderPricingCards}
                </Row>
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
            <div className="text-center" style={{ maxWidth: 940, marginLeft: 'auto', marginRight: 'auto' }}>
              <p>Our estimate is based on the single rate tariff for your postcode and the information you have provided about your bill, including your Peak usage and billing period. If there are multiple distributes for the postcode you have provided, we have assumed your distributor. Please call us for an accurate estimate.</p>
              <p>To view all rates for your distributor, take a look at our Energy Price Fact Sheets below.</p>
              <div className="mb-6">
                <NavLink to="#" className="text-primary font-weight-extrabold d-block">Union Saver - AusNet(PDF)</NavLink>
                <NavLink to="#" className="text-primary font-weight-extrabold d-block">Union Saver - Citipower(PDF)</NavLink>
                <NavLink to="#" className="text-primary font-weight-extrabold d-block">Union Saver - Jemena(PDF)</NavLink>
                <NavLink to="#" className="text-primary font-weight-extrabold d-block">Union Saver - Powercor(PDF)</NavLink>
                <NavLink to="#" className="text-primary font-weight-extrabold d-block">Union Saver - United Energy(PDF)</NavLink>
              </div>
            </div>
            <div className="text-center">
              <small className="text-muted">
                We have excluded any additional changes that might apply. To ensure an accurate comparison please check that your bill has your retailers current prices.
                <br />
                Retail energy provided by uEnergy. uEnergy is a business name of Energy Locals Pty Ltd.
              </small>
            </div>
          </div>
        </Container>
      </Section>
    );
  }
}

export default EnergySelectPlan;
