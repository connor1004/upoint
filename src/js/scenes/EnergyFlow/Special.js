import React, {
  Component
} from 'react';
import {
  Container, Row, Col, Form, FormGroup, Button, Label, Input,
  Card, CardBody
} from 'reactstrap';

import { Formik } from 'formik';
import {
  YES_NO
} from '../../configs/enums';
import Step from '../../components/modules/Step';
import Section from '../../sections/Section';
import CheckButton from '../../components/forms/CheckButton';

class EnergySpecialRequirements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pack_type: props.location.state ? props.location.state.pack_type : '',
      compare_bill: props.location.state ? props.location.state.compare_bill : null
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBack() {
    this.props.history.goBack();
  }

  handleSubmit(values, bags) {
    this.props.history.push('/dashboard/energy/your-details', {
      pack_type: this.state.pack_type,
      compare_bill: this.state.compare_bill,
      special_requirements: values
    });
  }

  render() {
    return (
      <Section className="main-section bg-maze">
        <Container>
          <h3 className="title-underlined-primary title-underlined-center text-center font-weight-extrabold">Add an energy service</h3>
          <div className="eat-container">
            <Step steps={['Choose plan', 'Special requirements', 'Your Details', 'Identification', 'Confirm']} index={1} />
            <Card className="form-card">
              <CardBody className="card-body-p-xl">
                <Formik
                  onSubmit={this.handleSubmit}
                  initialValues={{
                    have_solar: '',
                    nmi_meter: '',
                    mirn_meter: '',
                    notice_type: '',
                    have_address: '',
                    have_solar_panel: '',
                    hold_concession_card: ''
                  }}
                  render={props => (
                    <Form onSubmit={props.handleSubmit}>
                      <h4 className="title-underlined-primary font-weight-extrabold mb-6">General configurations?</h4>
                      <Row>
                        <Col lg={8}>
                          <FormGroup>
                            <Label>Do you have solar?</Label>
                            <div className="d-flex" style={{ maxWidth: '100%', width: '396px' }}>
                              <div className="mr-4" style={{ flex: 1 }}>
                                <CheckButton
                                  className="btn-block"
                                  color="primary"
                                  checked={props.values.have_solar === YES_NO.YES}
                                  onClick={() => {
                                    props.setFieldValue('have_solar', YES_NO.YES);
                                  }}
                                >
                                  YES
                                </CheckButton>
                              </div>
                              <div style={{ flex: 1 }}>
                                <CheckButton
                                  className="btn-block"
                                  color="primary"
                                  checked={props.values.have_solar === YES_NO.NO}
                                  onClick={() => {
                                    props.setFieldValue('have_solar', YES_NO.NO);
                                  }}
                                >
                                  NO
                                </CheckButton>
                              </div>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={8}>
                          <FormGroup>
                            <Label>Please enter your NMI or Meter Number (if available)</Label>
                            <Input
                              type="text"
                              name="nmi_meter"
                              value={props.values.nmi_meter}
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={8}>
                          <FormGroup>
                            <Label>Please enter your MIRN or Meter Number (if available)</Label>
                            <Input
                              type="text"
                              name="mirn_meter"
                              value={props.values.mirn_meter}
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <h4 className="title-underlined-primary font-weight-extrabold mb-6">Configure electricity</h4>
                      <Row>
                        <Col md={8}>
                          <FormGroup>
                            <Label>How would you like to receive energy bills and other notices?</Label>
                            <div className="d-flex" style={{ maxWidth: '100%', width: '396px' }}>
                              <div className="mr-4" style={{ flex: 1 }}>
                                <CheckButton
                                  className="btn-block"
                                  color="primary"
                                  checked={props.values.notice_type === 'email'}
                                  onClick={() => {
                                    props.setFieldValue('notice_type', 'email');
                                  }}
                                >
                                  Email
                                </CheckButton>
                              </div>
                              <div style={{ flex: 1 }}>
                                <CheckButton
                                  className="btn-block"
                                  color="primary"
                                  checked={props.values.notice_type === 'post'}
                                  onClick={() => {
                                    props.setFieldValue('notice_type', 'post');
                                  }}
                                >
                                  Post
                                </CheckButton>
                              </div>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={8}>
                          <FormGroup>
                            <Label>Do you have life support equipment at this address?</Label>
                            <div className="d-flex" style={{ maxWidth: '100%', width: '396px' }}>
                              <div className="mr-4" style={{ flex: 1 }}>
                                <CheckButton
                                  className="btn-block"
                                  color="primary"
                                  checked={props.values.have_address === YES_NO.YES}
                                  onClick={() => {
                                    props.setFieldValue('have_address', YES_NO.YES);
                                  }}
                                >
                                  YES
                                </CheckButton>
                              </div>
                              <div style={{ flex: 1 }}>
                                <CheckButton
                                  className="btn-block"
                                  color="primary"
                                  checked={props.values.have_address === YES_NO.NO}
                                  onClick={() => {
                                    props.setFieldValue('have_address', YES_NO.NO);
                                  }}
                                >
                                  NO
                                </CheckButton>
                              </div>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={8}>
                          <FormGroup>
                            <Label>Do you have solar panels that generate electricity?</Label>
                            <div className="d-flex" style={{ maxWidth: '100%', width: '396px' }}>
                              <div className="mr-4" style={{ flex: 1 }}>
                                <CheckButton
                                  className="btn-block"
                                  color="primary"
                                  checked={props.values.have_solar_panel === YES_NO.YES}
                                  onClick={() => {
                                    props.setFieldValue('have_solar_panel', YES_NO.YES);
                                  }}
                                >
                                  YES
                                </CheckButton>
                              </div>
                              <div style={{ flex: 1 }}>
                                <CheckButton
                                  className="btn-block"
                                  color="primary"
                                  checked={props.values.have_solar_panel === YES_NO.NO}
                                  onClick={() => {
                                    props.setFieldValue('have_solar_panel', YES_NO.NO);
                                  }}
                                >
                                  NO
                                </CheckButton>
                              </div>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={8}>
                          <FormGroup>
                            <Label>Do you hold a concession card?</Label>
                            <div className="d-flex" style={{ maxWidth: '100%', width: '396px' }}>
                              <div className="mr-4" style={{ flex: 1 }}>
                                <CheckButton
                                  className="btn-block"
                                  color="primary"
                                  checked={props.values.hold_concession_card === YES_NO.YES}
                                  onClick={() => {
                                    props.setFieldValue('hold_concession_card', YES_NO.YES);
                                  }}
                                >
                                  YES
                                </CheckButton>
                              </div>
                              <div style={{ flex: 1 }}>
                                <CheckButton
                                  className="btn-block"
                                  color="primary"
                                  checked={props.values.hold_concession_card === YES_NO.NO}
                                  onClick={() => {
                                    props.setFieldValue('hold_concession_card', YES_NO.NO);
                                  }}
                                >
                                  NO
                                </CheckButton>
                              </div>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup className="mb-0">
                        <div className="d-flex justify-content-between">
                          <Button type="button" color="primary" outline className="font-weight-extrabold btn-round text-uppercase mr-4" onClick={this.handleBack} style={{ width: '170px' }}>Back</Button>
                          <Button color="primary" type="submit" className="font-weight-extrabold btn-round text-uppercase" style={{ width: '170px' }}>Next</Button>
                        </div>
                      </FormGroup>
                    </Form>
                  )}
                />
              </CardBody>
            </Card>
          </div>
        </Container>
      </Section>
    );
  }
}

export default EnergySpecialRequirements;
