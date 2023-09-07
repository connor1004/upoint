import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import LaddaButton, { EXPAND_LEFT } from 'react-ladda';
import {
  Container, Row, Col,
  Form, FormGroup, FormFeedback, Label, Input, Card, CardBody,
  UncontrolledAlert
} from 'reactstrap';
import Slick from 'react-slick';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../actions/common';
import Pack from '../../components/cards/Pack';
import Section from '../../sections/Section';
import { Icons } from '../../theme';
import Api from '../../apis/app';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const auth = Api.getAuth();
    if (auth) {
      this.login(auth);
    }
  }

  async login(auth) {
    await this.props.login(auth);
    this.props.history.push('/dashboard');
  }

  async handleSubmit(values, bags) {
    const data = await Api.post('auth/login', values);
    const {
      body, response
    } = data;
    switch (response.status) {
      case 422:
        if (body.message) {
          bags.setStatus({
            color: 'danger',
            children: body.message
          });
        }
        bags.setErrors(body.errors);
        break;
      case 200:
        await this.login(body);
        break;
      default:
        break;
    }
    bags.setSubmitting(false);
  }

  render() {
    return (
      <div className="page-login bg-maze">
        <Section>
          <Container>
            <Row>
              <Col className="col-xl-1 col-md-1" />
              <Col className="col-xl-10 col-md-10">
                <Card className="form-card">
                  <CardBody className="card-body-p-xl">
                    <h3 className="title-underlined-primary title-underlined-center text-center font-weight-extrabold">Log in to the portal</h3>
                    <Formik
                      initialValues={{
                        email: '',
                        password: ''
                      }}
                      validationSchema={
                        Yup.object().shape({
                          email: Yup.string().email('Email is not valid!').required('Email is required!'),
                          password: Yup.string().min(8, 'Password has to be longer than 8 characters!').required('Password is required!')
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
                        handleSubmit,
                        isSubmitting
                      }) => (
                        <Form onSubmit={handleSubmit}>
                          {status && <UncontrolledAlert {...status} />}
                          <FormGroup>
                            <Label htmlFor="email" className="text-primary">Enter email address</Label>
                            <Input
                              type="text"
                              name="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.email && !!errors.email}
                            />
                            <FormFeedback>{errors.email}</FormFeedback>
                          </FormGroup>
                          <FormGroup>
                            <Label htmlFor="password" className="d-block text-primary">
                              <span>Enter your password</span>
                              <NavLink to="/reset" className="float-right"><small>Forgot your password?</small></NavLink>
                            </Label>
                            <Input
                              type="password"
                              name="password"
                              id="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={touched.password && !!errors.password}
                            />
                            <FormFeedback>{errors.password}</FormFeedback>
                          </FormGroup>
                          <FormGroup className="text-center mt-5">
                            <LaddaButton
                              data-style={EXPAND_LEFT}
                              loading={isSubmitting}
                              type="submit"
                              className="btn btn-primary btn-round"
                            >
                              Login
                            </LaddaButton>
                          </FormGroup>
                          <FormGroup className="text-center">
                            Not a member yet?
                          </FormGroup>
                          <FormGroup className="text-center">
                            <NavLink
                              className="btn btn-primary btn-round"
                              to="/register"
                            >
                              Join UPoint
                            </NavLink>
                          </FormGroup>
                        </Form>
                      )}
                    />
                  </CardBody>
                  <div className="bg-info px-4 text-white py-4">
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
                          source={Icons.sim2}
                          size="80px"
                          title="Check your usage"
                          description="See what you've used and what you have left from your included calls, TXT and data."
                        />
                      </div>
                      <div>
                        <Pack
                          source={Icons.money_light}
                          size="80px"
                          scale="1.3"
                          title="Make a payment"
                          description="Pay your bill, recharge your prepaid service, set up direct debit, or view recent bills and recharge history."
                        />
                      </div>
                      <div>
                        <Pack
                          source={Icons.sim3}
                          size="80px"
                          scale="2"
                          title="Get add-ons"
                          description="Load up your service with more of what you love. Add extra data, national talk or international talk."
                        />
                      </div>
                    </Slick>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </Section>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
