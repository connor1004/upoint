
import React, {
  Component, Fragment
} from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Row, Col,
  Card, CardBody, Button,
  Form, FormGroup, FormFeedback, Input,
  UncontrolledAlert
} from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AddressInput from '../../components/forms/AddressAutocomplete';
import PriceCard from '../../components/cards/Price';
import {
  servicePlanData, billPlanData
} from '../../configs/example-data';
import SvgIcon from '../../components/modules/SvgIcon';
import Icons from '../../theme/Icons';

class PlanAndPricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check_status: undefined,
      address: '',
      address_info: null
    };
  }

  handleCheckAddress(value) {
    if (value.address !== undefined) {
      this.setState({
        check_status: true,
        address: value.address,
        address_info: value.info
      });
    } else {
      this.setState({
        check_status: false
      });
    }
  }

  handleGetStarted() {
    const { address, address_info } = this.state;
    this.props.history.push('/energy/select-plan', {
      address: {
        address,
        address_info
      }
    });
  }

  handleSubmit(values) {
    console.log(values);
    const { address, address_info } = this.state;
    this.props.history.push('/energy/select-plan', {
      address: {
        address,
        address_info
      }
    });
  }

  render() {
    const { check_status } = this.state;
    return (
      <div className="text-center">
        <Card className="energy-card bg-maze text-left">
          <CardBody>
            <h3 className="card-title text-center mb-10">Check what plans are available at your address</h3>
            <AddressInput
              onChange={this.handleCheckAddress.bind(this)}
            />
          </CardBody>
        </Card>
        {
          check_status === true && (
            <Card className="energy-card bg-maze text-center text-white confirm-state">
              <CardBody>
                <SvgIcon source={Icons.checkCircle} />
                <h3 className="card-title mb-4">Great news, we’re available in your area!</h3>
                <h5 className="font-weight-semibold font-size-md mb-8">
                  8 Milton Rd, Indooroopilly QLD 4000
                  <a className="text-decoration-underline text-white font-weight-bold font-size-base" href="/"> Edit Address</a>
                </h5>
                <Button className="btn-round text-uppercase font-weight-black" onClick={this.handleGetStarted.bind(this)} color="success">Get Started</Button>
              </CardBody>
            </Card>
          )
        }
        {
          check_status === false && (
            <Card className="energy-card bg-maze text-center text-white px-12 confirm-state">
              <CardBody>
                <SvgIcon source={Icons.clock} />
                <h3 className="card-title mb-4">Sorry, we’re not in your area yet.</h3>
                <h5 className="font-weight-semibold font-size-md mb-0">
                  8 Milton Rd, Indooroopilly QLD 4000
                  <a className="text-decoration-underline text-white font-weight-bold font-size-base" href="/"> Edit Address</a>
                </h5>
                <h5 className="font-weight-semibold font-size-md mb-6">
                  Enter your details to stay updated on upcoming developments.
                </h5>
                <Formik
                  initialValues={{
                    name: '',
                    email: ''
                  }}
                  validationSchema={
                    Yup.object().shape({
                      name: Yup.string().required('Name is required!'),
                      email: Yup.string().email('Email is not valid!').required('Email is required!')
                    })
                  }
                  onSubmit={this.handleSubmit.bind(this)}
                  render={({
                    values,
                    errors,
                    status,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit
                  }) => (
                    <Form onSubmit={handleSubmit} className="confirm-address-form">
                      {status && <UncontrolledAlert {...status} />}
                      <div className="d-flex w-100 flex-wrap mb-6">
                        <FormGroup className="px-1 px-md-3 text-left">
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            invalid={touched.name && !!errors.name}
                          />
                          <FormFeedback invalid={touched.name && !!errors.name}>{errors.name}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="px-1 px-md-3 text-left">
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            invalid={touched.email && !!errors.email}
                          />
                          <FormFeedback invalid={touched.email && !!errors.email}>{errors.email}</FormFeedback>
                        </FormGroup>
                      </div>
                      <Button className="btn-round text-uppercase font-weight-black" type="submit" color="success">
                        Register
                        <span className="d-none d-sm-inline"> your interest</span>
                      </Button>
                    </Form>
                  )}
                />
              </CardBody>
            </Card>
          )
        }
        <Row className="mb-10">
          <Col lg={4} className="mb-6">
            <PriceCard data={servicePlanData[0]} />
          </Col>
          <Col lg={4} className="mb-6">
            <PriceCard data={servicePlanData[1]} />
          </Col>
          <Col lg={4} className="mb-6">
            <PriceCard data={servicePlanData[2]} />
          </Col>
        </Row>
        <Button className="btn-round text-uppercase font-weight-black" color="primary" tag={Link} to="/signup">
          Sign up
          <span className="d-none d-sm-inline"> for upoint energy</span>
          &nbsp;now
        </Button>
        <div className="mt-12 pt-md-12 mb-12">
          <h5 className="w-100 font-weight-bold mb-10">
            We’ve compared your bill based on the information you’ve provided us.
            <br />
            With uPoint, you will pay:
          </h5>
          <PriceCard
            className="bill-price-card"
            data={billPlanData[0]}
            action={{
              className: 'btn-round text-uppercase font-weight-black',
              title: (
                <Fragment>
                  Sign up
                  <span className="d-none d-sm-inline"> for upoint energy</span>
                  &nbsp;now
                </Fragment>
              ),
              to: '/singup'
            }}
          />
        </div>
        <div className="mb-10">
          <a className="font-size-sm font-weight-bold text-decoration-underline text-success" href="https://www.goggle.com">
            EPFS Bill Comparison
          </a>
        </div>
        <p>
          <small className="font-weight-semibold text-gray">*This is an estimate based on the selected products. The information you have provided about your bill, and selected distributor and meter type. Where different prices apply at different times of day, we assume your pattern of electricity usage throughout the day and week is the same as that of the average household. </small>
        </p>
        <p>
          <small className="font-weight-semibold text-gray">We assume you receive all available discounts and have excluded any additional charges that might apply. To ensure an accurate comparison please check that your bill has your retailers current prices.</small>
        </p>
      </div>
    );
  }
}

export default PlanAndPricing;
