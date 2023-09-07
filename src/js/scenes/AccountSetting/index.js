import React, {
  Component
} from 'react';
import {
  Container, Row, Col, Form, FormGroup, FormFeedback, Label, Input, Button,
  Card, CardBody
} from 'reactstrap';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Section from '../../sections/Section';

class AccountSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
                    currentpw: '',
                    newpw: '',
                    confirmpw: ''
                  }}
                  validationSchema={
                    Yup.object().shape({
                      currentpw: Yup.string().required('This field is required!').min(6, 'The old password has to be longer than 6 characters!'),
                      newpw: Yup.string().min(6, 'The old password has to be longer than 6 characters!').notOneOf([Yup.ref('currentpw'), null], 'New Password must not match!').required('This field is required!'),
                      confirmpw: Yup.string().min(6, 'The old password has to be longer than 6 characters!').oneOf([Yup.ref('newpw'), null], 'Confirm Password must match!').required('This field is required!')
                    })
                  }
                  onSubmit={this.handleSubmit.bind(this)}
                  render={({
                    values,
                    touched,
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <h4 className="title-underlined-primary font-weight-extrabold">Account settings</h4>
                      <FormGroup>
                        <Label htmlFor="currentpw" className="text-primary">Current password</Label>
                        <Row>
                          <Col lg="8">
                            <Input
                              type="password"
                              name="currentpw"
                              id="currentpw"
                              value={values.currentpw}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.currentpw && !!errors.currentpw}
                            />
                            <FormFeedback>{errors.currentpw}</FormFeedback>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="newpw" className="text-primary">New password</Label>
                        <Row>
                          <Col lg="8">
                            <Input
                              type="password"
                              name="newpw"
                              id="newpw"
                              value={values.newpw}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.newpw && !!errors.newpw}
                            />
                            <FormFeedback>{errors.newpw}</FormFeedback>
                          </Col>
                          <Col lg="4">
                            <small>Password must be a minimum of 8 characters in length.</small>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="confirmpw" className="text-primary">Confirm password</Label>
                        <Row>
                          <Col lg="8">
                            <Input
                              type="password"
                              name="confirmpw"
                              id="confirmpw"
                              value={values.confirmpw}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.confirmpw && !!errors.confirmpw}
                            />
                            <FormFeedback>{errors.confirmpw}</FormFeedback>
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

export default AccountSetting;
