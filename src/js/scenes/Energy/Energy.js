import React, { Component } from 'react';
import {
  Switch,
  Route,
  withRouter,
  NavLink as Link
} from 'react-router-dom';
import {
  Container, Row, Col, Nav, NavItem, NavLink
} from 'reactstrap';
import PlansAndPricing from './PlansAndPricing';

class Energy extends Component {
  render() {
    return (
      <div className="section section-energy has-triangle-left">
        <Container>
          <Row>
            <Col lg={3} className="pr-lg-12 mb-6">
              <Nav className="menu-nav menu-nav-primary">
                <NavItem>
                  <NavLink tag={Link} to="/energy" exact>Who we are</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/energy/plans-pricing">Plans &amp; Pricing</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/energy/pay-your-bill">Pay your bill</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/energy/help">Help</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/energy/contact-us">Contact us</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col lg={9}>
              <Switch>
                <Route path="/energy/plans-pricing" title="Plans and Pricing" component={PlansAndPricing} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Energy);
