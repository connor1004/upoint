import React, { Component } from 'react';
import {
  Label, Input, Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import LaddaButton from 'react-ladda';
import { Svgs, Icons } from '../../../theme';
import SvgIcon from '../../../components/modules/SvgIcon';
import SvgImage from '../../../components/modules/SvgImage';

const CHECK_STATUS_SUCCESS = 'success';
const CHECK_STATUS_FAIL = 'fail';
const CHECK_STATUS_NONE = '';

class ElectricityGas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: '',
      email: '',
      check_email_status: CHECK_STATUS_NONE,
      register_status: CHECK_STATUS_NONE,
      loading: false
    };
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleBuyNow() {
    this.props.history.push('/register');
  }

  handleSubmitElectricityPostcode(event) {
    event.preventDefault();
    const { postcode } = this.state;
    if (!postcode) {
      return;
    }
    this.props.history.push(`/energy/plans-pricing?postcode=${postcode}`);
  }

  handleEmailCheck(event) {
    event.preventDefault();
  }

  renderEmailFail() {
    return (
      <div className="panel-card-footer bg-indigo px-4">
        <h1 className="text-white text-center mb-4">Sorry, we’re not in your area.</h1>
        <p className="text-center text-white mb-5">However, please register your interest to stay updated on upcoming developments.</p>
        <div className="row px-lg-5">
          <div className="col-md-6">
            <Label className="text-white" htmlFor="name">Name</Label>
            <Input
              className="bg-info text-white border-0"
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-6">
            <Label className="text-white" htmlFor="email">Email</Label>
            <Input
              className="bg-info text-white border-0"
              type="email"
              name="email"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center w-100 mt-5">
            <Button type="button" className="btn-info btn-round font-weight-extrabold text-uppercase">Register your interest</Button>
          </div>
        </div>
      </div>
    );
  }

  renderEmailSuccess() {
    return (
      <div className="panel-card-footer bg-indigo px-4">
        <h1 className="text-white text-center mb-4">Great news, we’re available in your area!</h1>
        <p className="text-center text-white mb-5">Thank you, we will be in touch with updates about the Gas product in the near future!</p>
        <div className="text-center mt-5">
          <Button type="button" className="btn-info btn-round font-weight-extrabold text-uppercase">Get started</Button>
        </div>
      </div>
    );
  }

  renderEmailCheckStatus() {
    switch (this.state.check_email_status) {
      case CHECK_STATUS_FAIL:
        return this.renderEmailFail();
      case CHECK_STATUS_SUCCESS:
        return this.renderEmailSuccess();
      default:
        return null;
    }
  }

  renderRegisterSuccess() {
    return (
      <div className="panel-card-footer bg-indigo px-4">
        <h1 className="text-white text-center mb-4">Thank you for your interest!</h1>
        <p className="text-center text-white">We will be in touch with updates about the Gas product in the near future!</p>
      </div>
    );
  }

  renderRegisterFail() {
    return (
      <div className="panel-card-footer bg-indigo px-4">
        <h1 className="text-white text-center mb-4">There was a problem signing you up.</h1>
        <p className="text-center text-white">Please try again later.</p>
      </div>
    );
  }

  renderRegisterStatus() {
    switch (this.state.register_status) {
      case CHECK_STATUS_FAIL:
        return this.renderRegisterFail();
      case CHECK_STATUS_SUCCESS:
        return this.renderRegisterSuccess();
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <div className="mt-6 panel-card panel-upoint">
          <div className="panel-card-heading bg-success">
            <SvgIcon className="panel-card-heading-icon icon-white" source={Icons.upointEnergy} size="58px" />
            <div className="panel-card-heading-content">
              <SvgImage source={Svgs.brandUPoint} />
              <span className="ml-2 text-success font-weight-bold">ENERGY</span>
            </div>
          </div>
          <div className="panel-card-body">
            <div className="panel-card-left">
              <h3 className="mb-4">It’s time to take the power back!</h3>
              <p>We’ve decided to change the rules and use the power of the movement to keep your electricity prices down. We believe union members deserve affordable energy without the misleading discounts, price gouging and hidden fees so we have developed a member only electricity offer to deliver just that. It’s called Union Saver and it’s available now to our union members.</p>
              <Label htmlFor="postcode" className="text-info">Check your postcode for more information and pricing</Label>
              <div className="row">
                <div className="col-xl-8 col-12">
                  <form onSubmit={this.handleSubmitElectricityPostcode.bind(this)}>
                    <div className="form-group position-relative mb-3">
                      <Input
                        type="text"
                        name="postcode"
                        id="postcode"
                        value={this.state.postcode}
                        onChange={this.handleChange.bind(this, 'postcode')}
                        style={{ borderRadius: '0 30px 30px 0', paddingRight: '160px' }}
                      />
                      <LaddaButton
                        className="btn btn-success position-absolute btn-round"
                        style={{ right: '0', top: '0', height: '48px' }}
                        type="submit">
                        CHECK
                      </LaddaButton>
                    </div>
                  </form>
                </div>
                <div className="col-xl-4 col-12">
                  <NavLink to="/energy" className="btn btn-success btn-round text-nowrap">Find out more</NavLink>
                </div>
              </div>
            </div>
            <div className="panel-card-right bg-success text-white">
              <h3 className="text-center">Union Saver</h3>
              <div className="card text-info shadow-sm border-rounded">
                <div className="card-body">
                  <div className="d-flex justicy-content-between">
                    <div className="electricity-energy pt-1 pr-3">
                      <SvgIcon className="icon-success" size="60px" source={Icons.upointEnergy} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="font-weight-extrabold mb-2">Cut big business profits out of your bill</div>
                      <div>Check your postcode for offer details and pricing. Offer available to all households with a card-carrying member of the union movement.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 mb-0 panel-card panel-upoint">
          <div className="panel-card-heading bg-indigo">
            <SvgIcon className="panel-card-heading-icon icon-white" source={Icons.upointGas} size="58px" />
            <div className="panel-card-heading-content">
              <SvgImage source={Svgs.brandUPoint} />
              <span className="ml-2 text-indigo font-weight-bold">GAS</span>
            </div>
            <div className="panel-card-heading-hint text-indigo">
              <span className="text-white">Coming soon</span>
            </div>
          </div>
          <div className="panel-card-body">
            <div className="panel-card-left">
              <form onSubmit={this.handleEmailCheck.bind(this)}>
                <Label htmlFor="email" className="text-info">Enter email to receive updates</Label>
                <div className="form-group position-relative">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this, 'email')}
                    style={{ borderRadius: '0 30px 30px 0', paddingRight: '160px' }}
                  />
                  <LaddaButton
                    className="btn btn-indigo position-absolute btn-round text-uppercase font-weight-extrabold"
                    style={{ right: '0', top: '0', height: '48px' }}
                    loading={this.state.loading}
                    type="submit">
                    Sign up
                  </LaddaButton>
                </div>
              </form>
            </div>
            <div className="panel-card-right pl-lg-0 pt-0 pt-lg-5">
              <p className="mt-lg-4">Please check back for more information, or enter your email to receive updates.</p>
            </div>
          </div>
          {this.renderRegisterStatus()}
        </div>
        <div className="section text-center pb-0 font-size-xs">
          Retail energy provided by uEnergy. uEnergy is a business name of Energy Locals Pty Ltd
        </div>
      </div>
    );
  }
}

export default ElectricityGas;
