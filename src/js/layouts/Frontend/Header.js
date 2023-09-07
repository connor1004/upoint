import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link, NavLink as LinkNav } from 'react-router-dom';
import {
  Nav, NavItem, NavLink
} from 'reactstrap';
import { Svgs } from '../../theme';
import { logout } from '../../actions/common';

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
    const { user } = this.props;
    return (
      <div className="site-header">
        <div className="header-banner">
          <div className="ml-auto">
            <Nav>
              <NavItem>
                <NavLink tag={Link} to="/help">Help</NavLink>
              </NavItem>
              {
                user && (
                  <NavItem>
                    <NavLink onClick={this.handleSetLogin.bind(this)}>Dashboard</NavLink>
                  </NavItem>
                )
              }
              <NavItem>
                {
                  user ? (
                    <NavLink onClick={this.handleLogout.bind(this)} active>LogOut</NavLink>
                  ) : (
                    <NavLink tag={Link} to="/login" active>Log In</NavLink>
                  )
                }
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
              <NavLink>Mobile &amp; NBN</NavLink>
              <Nav className="subnav">
                <NavItem>
                  <NavLink tag={LinkNav} to="/mobile/plans" onClick={this.handleClose.bind(this)}>
                    <span>Mobile</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleClose.bind(this)} tag={LinkNav} to="/nbn/check-address">
                    <span>NBN</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </NavItem>
            <NavItem className="has-subnav">
              <NavLink>Electricity &amp; Gas</NavLink>
              <Nav className="subnav">
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
              </Nav>
            </NavItem>
            <NavItem className="has-subnav">
              <NavLink>Finance &amp; Insurance</NavLink>
              <Nav className="subnav">
                <NavItem>
                  <NavLink onClick={this.handleClose.bind(this)} tag={LinkNav} to="/union-health">
                    <span>Union Health</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </NavItem>
            <NavItem className="has-subnav">
              <NavLink>Other Deals</NavLink>
              <Nav className="subnav">
                <NavItem>
                  <NavLink onClick={this.handleClose.bind(this)} tag={LinkNav} to="/member-discounts">
                    <span>Member Advantage</span>
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

const mapStateToProps = state => ({
  user: state.common.auth ? state.common.auth.profile : null
});

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logout, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
