import React from 'react';
import {
  Link, withRouter
} from 'react-router-dom';
import {
  Container, Row, Col
} from 'reactstrap';
import {
  Svgs, Icons
} from '../../theme';
import SvgImage from '../../components/modules/SvgImage';
import SvgIcon from '../../components/modules/SvgIcon';

export const FooterIntro = () => (
  <div className="site-footer site-footer-intro">
    <Container>
      <Row className="align-items-end">
        <Col xs="12" md="6">
          <Link className="brand" to="/" dangerouslySetInnerHTML={{ __html: Svgs.brandUPointExt }} />
        </Col>
        <Col xs="12" md="6" className="text-md-right mt-4 mt-md-0">
          <div className="credit">
            ©&nbsp;
            {
              new Date().getFullYear()
            }
            &nbsp;UPOINT Pty Limited
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export const FooterMain = () => (
  <div className="site-footer site-footer-main">
    <Container>
      <Row>
        <Col lg="7" md="8">
          <ul className="footer-menu">
            <li>
              <Link to="/#">Order a SIM</Link>
            </li>
            <li>
              <Link to="/#">Plans</Link>
            </li>
            <li>
              <Link to="/#">uPoint Cards</Link>
            </li>
            <li>
              <Link to="/#">Contact</Link>
            </li>
            <li>
              <Link to="/#">About us</Link>
            </li>
            <li>
              <Link to="/#">Partners</Link>
            </li>
            <li>
              <Link to="/#">Help</Link>
            </li>
            <li>
              <Link to="/#">Portal</Link>
            </li>
            <li>
              <Link to="/#">Our Customer Terms</Link>
            </li>
            <li>
              <Link to="/#">Terms of use</Link>
            </li>
            <li>
              <Link to="/#">Privacy</Link>
            </li>
          </ul>
        </Col>
        <Col lg={{ offset: 2, size: 3 }} md="4">
          <div className="footer-brand">
            <SvgImage source={Svgs.brandUPointExt} />
          </div>
          <ul className="social-menu">
            <li>
              <a href="https://www.facebook.com">
                <SvgIcon size="24px" source={Icons.facebook} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <SvgIcon size="24px" source={Icons.twitter} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <SvgIcon size="24px" source={Icons.instagram} />
              </a>
            </li>
          </ul>
          <div className="credit">
            ©&nbsp;
            {new Date().getFullYear()}
            &nbsp;UPOINT Pty Limited
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

const Footer = (props) => {
  const {
    location
  } = props;
  return location.pathname && location.pathname.includes('dashboard') ? (
    <FooterIntro {...props} />
  ) : (
    <FooterMain {...props} />
  );
};

export default withRouter(Footer);
