import React, {
  Component
} from 'react';
import {
  Container, Row, Col, Form, FormGroup, FormFeedback, Label, Input, Button,
  Card, CardBody
} from 'reactstrap';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import Section from '../../sections/Section';
import { TITLES, STATES } from '../../configs/constants';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, bags) {
    console.log(values, bags);
  }

  render() {
    return (
      <Section className="main-section bg-maze">
        <Container>
          <h3 className="title-underlined-primary title-underlined-center text-center font-weight-extrabold">My details</h3>
          <div className="eat-container">
            <Card className="form-card">
              <CardBody className="card-body-p-xl">
                <Formik
                  initialValues={{
                    title: null,
                    first_name: '',
                    last_name: '',
                    contact_number: '',
                    birthday: '',
                    street_number: '',
                    street: '',
                    postcode: '',
                    suburb: '',
                    state: null,
                    email: ''
                  }}
                  validationSchema={
                    Yup.object().shape({
                      title: Yup.mixed().required('This field is required!'),
                      first_name: Yup.string().required('This field is required!'),
                      last_name: Yup.string().required('This field is required!'),
                      contact_number: Yup.string().required('This field is required!'),
                      birthday: Yup.string().required('This field is required!'),
                      street_number: Yup.string().required('This field is required!'),
                      street: Yup.string().required('This field is required!'),
                      postcode: Yup.string().required('This field is required!'),
                      suburb: Yup.string().required('This field is required!'),
                      state: Yup.mixed().required('This field is required!'),
                      email: Yup.string().required('This field is required!')
                    })
                  }
                  onSubmit={this.handleSubmit}
                  render={({
                    values,
                    touched,
                    errors,
                    handleBlur,
                    handleChange,
                    setFieldValue,
                    handleSubmit
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <h4 className="title-underlined-primary font-weight-extrabold">Edit contact details</h4>
                      <Row>
                        <Col lg="3">
                          <FormGroup>
                            <Label for="title" className="text-primary">Title</Label>
                            <Select
                              classNamePrefix="react-select-lg"
                              indicatorSeparator={null}
                              options={TITLES}
                              getOptionValue={option => option.value}
                              getOptionLabel={option => option.label}
                              value={values.title}
                              onChange={(title) => {
                                setFieldValue('title', title);
                              }}
                              className={(touched.title && !!errors.title) && 'is-invalid'}
                            />
                            {(!!errors.title && touched.title) && (
                              <FormFeedback className="d-block">{errors.title}</FormFeedback>
                            )}
                          </FormGroup>
                        </Col>
                        <Col lg="5">
                          <FormGroup>
                            <Label for="first_name" className="text-primary">First name</Label>
                            <Input
                              type="text"
                              name="first_name"
                              id="first_name"
                              value={values.first_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.first_name && !!errors.first_name}
                            />
                            <FormFeedback>{errors.first_name}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="8">
                          <FormGroup>
                            <Label for="last_name" className="text-primary">Last name</Label>
                            <Input
                              type="text"
                              name="last_name"
                              id="last_name"
                              value={values.last_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.last_name && !!errors.last_name}
                            />
                            <FormFeedback>{errors.last_name}</FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <Label for="contact_number" className="text-primary">Contact number</Label>
                            <Input
                              type="phone"
                              name="contact_number"
                              id="contact_number"
                              value={values.contact_number}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.contact_number && !!errors.contact_number}
                            />
                            <FormFeedback>{errors.contact_number}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <Label for="birthday" className="text-primary">Date of birth</Label>
                            <Input
                              type="text"
                              name="birthday"
                              id="birthday"
                              value={values.birthday}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.birthday && !!errors.birthday}
                            />
                            <FormFeedback>{errors.birthday}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <Label className="d-block">&nbsp;</Label>
                          <small>Contact number should be active as we may need to contact you during the activation process. Please enter number only, no spaces or other characters.</small>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="3">
                          <FormGroup>
                            <Label for="street_number" className="text-primary">Street number</Label>
                            <Input
                              type="text"
                              name="street_number"
                              id="street_number"
                              value={values.street_number}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.street_number && !!errors.street_number}
                            />
                            <FormFeedback>{errors.street_number}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col lg="5">
                          <FormGroup>
                            <Label for="street" className="text-primary">Street</Label>
                            <Input
                              type="text"
                              name="street"
                              id="street"
                              value={values.street}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.street && !!errors.street}
                            />
                            <FormFeedback>{errors.street}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <Label className="d-block">&nbsp;</Label>
                          <small>This must be a physical address, we cannot accept Post Office Box addresses. Invalid addresses will be rejected.</small>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="2">
                          <FormGroup>
                            <Label for="postcode" className="text-primary">Postcode</Label>
                            <Input
                              type="text"
                              name="postcode"
                              id="postcode"
                              value={values.postcode}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.postcode && !!errors.postcode}
                            />
                            <FormFeedback>{errors.postcode}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col lg="3">
                          <FormGroup>
                            <Label for="suburb" className="text-primary">Suburb</Label>
                            <Input
                              type="text"
                              name="suburb"
                              id="suburb"
                              value={values.suburb}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.suburb && !!errors.suburb}
                            />
                            <FormFeedback>{errors.suburb}</FormFeedback>
                          </FormGroup>
                        </Col>
                        <Col lg="3">
                          <FormGroup>
                            <Label for="state" className="text-primary">State</Label>
                            <Select
                              placeholder="Select a State"
                              classNamePrefix="react-select-lg"
                              indicatorSeparator={null}
                              options={STATES}
                              getOptionValue={option => option.value}
                              getOptionLabel={option => option.label}
                              value={values.state}
                              onChange={(state) => {
                                setFieldValue('state', state);
                              }}
                              className={(touched.state && !!errors.state) && 'is-invalid'}
                            />
                            {(!!errors.state && touched.state) && (
                              <FormFeedback className="d-block">{errors.state}</FormFeedback>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Row>
                          <Col lg="8">
                            <Label for="email" className="text-primary">Email</Label>
                            <Input
                              type="email"
                              name="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.email && !!errors.email}
                            />
                            <FormFeedback>{errors.email}</FormFeedback>
                          </Col>
                          <Col lg="4">
                            <Label className="d-block">&nbsp;</Label>
                            <small>This email address will be used to keep you updated on your order and to send you important information about your service.</small>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup className="mb-0">
                        <div className="d-flex justify-content-end">
                          <Button color="primary" type="submit" className="font-weight-extrabold btn-round text-uppercase" style={{ width: '170px' }}>Save</Button>
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

export default Contact;
