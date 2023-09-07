import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link, NavLink as LinkNav } from 'react-router-dom';

import {
  Nav, NavItem, NavLink
} from 'reactstrap';
import { logout } from '../../actions/common';
import { Svgs } from '../../theme';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleToggle() {
    document.body.classList.toggle('navigation-opened');
  }

  handleClose() {
    document.body.classList.remove('navigation-opened');
  }

  async handleLogout() {
    await this.props.logout();
    await this.props.history.replace('/');
  }

  handleSetLogin() {
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className="site-header">
        <div className="header-banner">
          <div className="message">
            Collectively we’ve cut out&nbsp;
            <b>$2,034,123</b>
            &nbsp;from big business
          </div>
          <div className="ml-auto">
            <Nav>
              <NavItem>
                <NavLink tag={Link} to="/help">Help</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleSetLogin.bind(this)}>Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleLogout.bind(this)} active>LogOut</NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
        <div className="header-navigation">
          <Link className="brand" to="/" dangerouslySetInnerHTML={{ __html: Svgs.brandUPoint }} onClick={this.handleClose.bind(this)} />
          <button type="button" className="nav-toggler" onClick={this.handleToggle.bind(this)}>
            <span />
          </button>
          <Nav className="main-nav">
            <NavItem className="has-subnav">
              <NavLink>Billing &amp; Payments</NavLink>
              <Nav className="subnav">
                <NavItem>
                  <NavLink tag={LinkNav} to="/dashboard/bills" onClick={this.handleClose.bind(this)}>
                    <span>View bills</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleClose.bind(this)} tag={LinkNav} to="/dashboard/payment-details">
                    <span>Edit payment details</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </NavItem>
            <NavItem className="has-subnav">
              <NavLink>Member services</NavLink>
              <Nav className="subnav">
                <NavItem>
                  <NavLink onClick={this.handleClose.bind(this)} tag={LinkNav} to="/mobile/plans">
                    <span>Mobile</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleClose.bind(this)} tag={LinkNav} to="/nbn/check-address">
                    <span>NBN</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleClose.bind(this)} tag={LinkNav} to="/energy">
                    <span>Electricity</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleClose.bind(this)} tag={LinkNav} to="/energy/gas">
                    <span>Gas</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleClose.bind(this)} tag={LinkNav} to="/union-health">
                    <span>Finance</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleClose.bind(this)} tag={LinkNav} to="/campaign">
                    <span>Insurance</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleClose.bind(this)} tag={LinkNav} to="/member-advantage">
                    <span>Member Advantage</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </NavItem>
            <NavItem className="has-subnav">
              <NavLink>My details</NavLink>
              <Nav className="subnav">
                <NavItem>
                  <NavLink onClick={this.handleClose.bind(this)} tag={LinkNav} to="/dashboard/details/contact">
                    <span>Contact details</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleClose.bind(this)} tag={LinkNav} to="/dashboard/details/account-settings">
                    <span>Account settings</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logout, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
