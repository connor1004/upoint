import React, {
  Component
} from 'react';
import {
  Container, Row, Col, Form, FormGroup, Button,
  Card, CardBody
} from 'reactstrap';

import { Formik } from 'formik';
import {
  YES_NO
} from '../../configs/enums';
import Step from '../../components/modules/Step';
import Section from '../../sections/Section';
import CheckButton from '../../components/forms/CheckButton';

class NbnSpecialRequirements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pack_type: props.location.state ? props.location.state.pack_type : ''
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBack() {
    this.props.history.goBack();
  }

  handleSubmit(values, bags) {
    this.props.history.push('/dashboard/nbn/your-details', {
      pack_type: this.state.pack_type,
      special_requirements: values
    });
  }

  render() {
    return (
      <Section className="main-section bg-maze">
        <Container>
          <h3 className="title-underlined-primary title-underlined-center text-center font-weight-extrabold">Add an NBN service</h3>
          <div className="eat-container">
            <Step steps={['Choose plan', 'Special requirements', 'Your Details', 'Identification', 'Confirm']} index={1} />
            <Card className="form-card">
              <CardBody className="card-body-p-xl">
                <Formik
                  onSubmit={this.handleSubmit}
                  initialValues={{
                    special_answer1: '',
                    special_answer2: ''
                  }}
                  render={props => (
                    <Form onSubmit={props.handleSubmit}>
                      <h4 className="title-underlined-primary font-weight-extrabold mb-6">What is your current internet connection status?</h4>
                      <Row>
                        <Col lg={8}>
                          <FormGroup>
                            <div className="mb-4" style={{ flex: 1 }}>
                              <CheckButton
                                className="btn-block"
                                color="primary"
                                checked={props.values.special_answer1 === YES_NO.YES}
                                onClick={() => {
                                  props.setFieldValue('special_answer1', YES_NO.YES);
                                }}
                              >
                                I am changing from copper to fiber
                              </CheckButton>
                            </div>
                            <div style={{ flex: 1 }}>
                              <CheckButton
                                className="btn-block"
                                color="primary"
                                checked={props.values.special_answer1 === YES_NO.NO}
                                onClick={() => {
                                  props.setFieldValue('special_answer1', YES_NO.NO);
                                }}
                              >
                                I am moving to a new house / apartment
                              </CheckButton>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <h4 className="title-underlined-primary font-weight-extrabold mb-6">What is your current internet contract?</h4>
                        <Row>
                          <Col lg="8">
                            <CheckButton
                              className="btn-block mb-4"
                              color="primary"
                              checked={props.values.special_answer2 === YES_NO.YES}
                              onClick={() => {
                                props.setFieldValue('special_answer2', YES_NO.YES);
                              }}
                            >
                              I am not under contract
                            </CheckButton>
                            <CheckButton
                              className="btn-block mb-4"
                              color="primary"
                              checked={props.values.special_answer2 === YES_NO.NO}
                              onClick={() => {
                                props.setFieldValue('special_answer2', YES_NO.NO);
                              }}
                            >
                              I have a contract with another provider
                            </CheckButton>
                          </Col>
                        </Row>
                      </FormGroup>
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

export default NbnSpecialRequirements;
