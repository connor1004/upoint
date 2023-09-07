import React, {
  Component
} from 'react';
import {
  Container, Row, Col, Form, FormGroup, Label, Input, Button, FormFeedback, UncontrolledAlert,
  Card, CardBody
} from 'reactstrap';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import Step from '../../components/modules/Step';
import Section from '../../sections/Section';
import { TITLES, STATES } from '../../configs/constants';

class NbnYourDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pack_type: props.location.state ? props.location.state.pack_type : '',
      special_requirements: props.location.state ? props.location.state.special_requirements : null
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBack() {
    this.props.history.goBack();
  }

  handleSubmit(values, bags) {
    this.props.history.push('/dashboard/nbn/identification', {
      pack_type: this.state.pack_type,
      special_requirements: this.state.special_requirements,
      your_details: values
    });
  }

  render() {
    return (
      <Section className="main-section bg-maze">
        <Container>
          <h3 className="title-underlined-primary title-underlined-center text-center font-weight-extrabold">Add an NBN service</h3>
          <div className="eat-container">
            <Step steps={['Choose plan', 'Special requirements', 'Your Details', 'Identification', 'Confirm']} index={2} />
            <Card className="form-card">
              <CardBody className="card-body-p-xl">
                <Formik
                  initialValues={{
                    user_title: null,
                    user_first_name: '',
                    user_last_name: '',
                    user_mobile: '',
                    user_email: '',
                    user_street_number: '',
                    user_street: '',
                    user_postcode: '',
                    user_city: '',
                    user_state: null
                  }}
                  validationSchema={
                    Yup.object().shape({
                      user_title: Yup.mixed().required('Title is required!'),
                      user_first_name: Yup.string().required('First name is required!'),
                      user_last_name: Yup.string().required('Last name is required!'),
                      user_mobile: Yup.string().required('Mobile is required!'),
                      user_email: Yup.string().required('Email is required!'),
                      user_street_number: Yup.string().required('Street number is required!'),
                      user_street: Yup.string().required('Street is required!'),
                      user_postcode: Yup.string().required('Postcode is required!'),
                      user_city: Yup.string().required('City is required!'),
                      user_state: Yup.mixed().required('State is required!')
                    })
                  }
                  onSubmit={this.handleSubmit}
                  render={({
                    values,
                    errors,
                    status,
                    touched,
                    handleBlur,
                    handleChange,
                    setFieldValue,
                    handleSubmit
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      {status && <UncontrolledAlert {...status} />}
                      <h4 className="title-underlined-primary font-weight-extrabold">Your details</h4>
                      <Row>
                        <Col md={3}>
                          <FormGroup>
                            <Label>Title</Label>
                            <Select
                              classNamePrefix="react-select-lg"
                              indicatorSeparator={null}
                              options={TITLES}
                              getOptionValue={option => option.value}
                              getOptionLabel={option => option.label}
                              value={values.user_title}
                              onChange={(title) => {
                                setFieldValue('user_title', title);
                              }}
                              className={(touched.user_title && !!errors.user_title) && 'is-invalid'}
                            />
                            {(!!errors.user_title && touched.user_title) && (
                              <FormFeedback className="d-block">{errors.user_title}</FormFeedback>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={5}>
                          <FormGroup>
                            <Label>First Name</Label>
                            <Input
                              type="text"
                              id="user_first_name"
                              name="user_first_name"
                              value={values.user_first_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.user_first_name && !!errors.user_first_name}
                            />
                            <FormFeedback>{errors.user_first_name}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={8}>
                          <FormGroup>
                            <Label>Last Name</Label>
                            <Input
                              type="text"
                              id="user_last_name"
                              name="user_last_name"
                              value={values.user_last_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.user_last_name && !!errors.user_last_name}
                            />
                            <FormFeedback>{errors.user_last_name}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={8}>
                          <FormGroup>
                            <Label>Mobile</Label>
                            <Input
                              type="text"
                              id="user_mobile"
                              name="user_mobile"
                              value={values.user_mobile}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.user_mobile && !!errors.user_mobile}
                            />
                            <FormFeedback>{errors.user_mobile}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={8}>
                          <FormGroup>
                            <Label>Email</Label>
                            <Input
                              type="email"
                              id="user_email"
                              name="user_email"
                              value={values.user_email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.user_email && !!errors.user_email}
                            />
                            <FormFeedback>{errors.user_email}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <h4 className="title-underlined-primary font-weight-extrabold">Your address</h4>
                      <Row>
                        <Col md={3}>
                          <FormGroup>
                            <Label>Street Number</Label>
                            <Input
                              id="user_street_number"
                              type="text"
                              name="user_street_number"
                              value={values.user_street_number}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.user_street_number && !!errors.user_street_number}
                            />
                            <FormFeedback>{errors.user_street_number}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={5}>
                          <FormGroup>
                            <Label>Street</Label>
                            <Input
                              id="user_street"
                              name="user_street"
                              type="text"
                              value={values.user_street}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.user_street && !!errors.user_street}
                            />
                            <FormFeedback>{errors.user_street}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label>&nbsp;</Label>
                            <small className="form-text text-muted mt-0">
                              This must be a physical address, we cannot accept Post Office Box addresses. Invalid addresses will be rejected.
                            </small>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={2}>
                          <FormGroup>
                            <Label>Postcode</Label>
                            <Input
                              type="text"
                              id="user_postcode"
                              name="user_postcode"
                              value={values.user_postcode}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.user_postcode && !!errors.user_postcode}
                            />
                            <FormFeedback>{errors.user_postcode}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Label>City</Label>
                            <Input
                              type="text"
                              id="user_city"
                              name="user_city"
                              value={values.user_city}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.user_city && !!errors.user_city}
                            />
                            <FormFeedback>{errors.user_city}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Label>State</Label>
                            <Select
                              placeholder="Select a State"
                              classNamePrefix="react-select-lg"
                              indicatorSeparator={null}
                              options={STATES}
                              getOptionValue={option => option.value}
                              getOptionLabel={option => option.label}
                              value={values.user_state}
                              onChange={(state) => {
                                setFieldValue('user_state', state);
                              }}
                              className={(touched.user_state && !!errors.user_state) && 'is-invalid'}
                            />
                            {(!!errors.user_state && touched.user_state) && (
                              <FormFeedback className="d-block">{errors.user_state}</FormFeedback>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
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

export default NbnYourDetails;
