import React, {
  Component
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import {
  Container, Row, Col, Card, CardHeader, CardBody, CardFooter,
  Badge
} from 'reactstrap';
import { Bitmaps, Svgs, Icons } from '../../theme';

import Action from '../../components/modules/Action';
import SvgIcon from '../../components/modules/SvgIcon';
import SvgImage from '../../components/modules/SvgImage';
import CreditCard from '../../components/cards/Credit';
import ServiceList from '../../components/lists/ServiceList';
import Section from '../../sections/Section';
import { getServices, getOrders } from '../../actions/common';
import Api from '../../apis/app';
// import {
//   servicesData, orderHistoiesData
// } from '../../configs/example-data';

import OrderHistoryTable from '../../components/tables/OrderHistoryTable';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesData: [],
      orderHistoriesData: []
    };
  }

  async componentWillMount() {
    const {
      response, body
    } = await Api.get('v1/account/orders');
    switch (response.status) {
      case 422:
        break;
      case 200: {
        this.props.Orders(body);
        break;
      }
      default:
        break;
    }
  }

  async componentDidMount() {
    const {
      services, orders
    } = this.props;
    if (services && services.length > 0) {
      this.setState({
        servicesData: services
      });
    }
    if (orders && orders.length > 0) {
      // const today = new Date();
      // const priorDate = new Date().setDate(today.getDate() - 30);
      // const lastDate = moment(priorDate).format('YYYY-MM-DD');
      // orders.sort();
      this.setState({
        orderHistoriesData: orders
      });
    }
    const {
      response, body
    } = await Api.get('v1/account/services');
    switch (response.status) {
      case 422:
        break;
      case 200: {
        this.props.Services(body.data);
        break;
      }
      default:
        break;
    }
  }

  render() {
    const { account } = this.props;
    const { servicesData, orderHistoriesData } = this.state;
    return (
      <Section className="main-section bg-maze">
        <Container>

          {/* OFFERS CARD CREDIT START */}
          <h3 className="title-underlined-primary mb-4">
            <b>Hi Andrew, </b>
            check out some our latest offers
            <i> – just for union members </i>
          </h3>

          {/* OFFERS CARD CREDIT START */}
          <Row>
            <Col md="12" lg="4" className="mt-5">
              <CreditCard
                className="energy-card-credit"
                background={Bitmaps.creditOffer2}
                style={{
                  backgroundPosition: 'top right'
                }}
              >
                <CardBody>
                  <div className="card-title">
                    <h2>
                      uPoint Energy
                    </h2>
                    {/* <span className="percentage">
                      <span className="value">20</span>
                      <span className="unit">%</span>
                    </span> */}
                    <h4>Powered by the union</h4>
                  </div>
                  <div className="card-text">
                    Try a bill comparison and see how our rates compare
                  </div>
                </CardBody>
                <CardFooter style={{ marginTop: '-15px' }}>
                  <Action
                    className="btn-has-char btn-has-char-chevron px-0"
                    size="sm"
                    color="link"
                    title="Find out more"
                    to="/energy"
                  />
                </CardFooter>
              </CreditCard>
            </Col>
            <Col md="12" lg="4" className="mt-5">
              <CreditCard
                light
                className="upoint-nbn-credit-card"
                background={Bitmaps.creditOffer1}
                style={{
                  backgroundPosition: 'right top'
                }}
              >
                <CardBody>
                  <Badge>
                    <SvgIcon size="35px" source={Icons.aim} />
                    <SvgImage className="ml-4" width="128px" height="23px" source={Svgs.brandUPointNBN} />
                  </Badge>
                </CardBody>
                <CardFooter>
                  <div className="card-title mb-0">
                    <h3>From $65 per month</h3>
                  </div>
                  <Action
                    className="btn-has-char btn-has-char-chevron px-0"
                    size="sm"
                    color="link"
                    title="Check your address"
                    to="/nbn/check-address"
                  />
                </CardFooter>
              </CreditCard>
            </Col>
            <Col md="12" lg="4" className="mt-5">
              <CreditCard
                className="mobile-credit-card"
                background={Bitmaps.creditOffer3}
                style={{
                  backgroundPosition: 'bottom right'
                }}
              >
                <Badge color="white">from $29 per month!</Badge>
                <CardBody>
                  <div className="card-title">
                    <span className="capacity">
                      {/* <span className="value">30</span>
                      <span className="unit">GB</span> */}
                      uPoint Mobile
                    </span>
                    <div className="card-text mt-3">Get the data without the price tags</div>
                    {/* <h4>
                      only
                      <span className="price">
                        <span className="unit">$</span>
                        <span className="value">35</span>
                      </span>
                      / month
                    </h4> */}
                  </div>
                </CardBody>
                <CardFooter>
                  <Action
                    className="btn-has-char btn-has-char-chevron px-0"
                    size="sm"
                    color="link"
                    title="Find out more"
                    to="/mobile/plans"
                  />
                </CardFooter>
              </CreditCard>
            </Col>
          </Row>
          {/* OFFERS CARD CREDIT END */}

          <Row className="mt-12">
            <Col md="12" lg="8" className="mt-5">

              {/* YOUR SERVICES START */}
              <div className="eat-container">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-primary text-white">
                    <div className="d-flex justify-content-between flex-wrap align-items-center">
                      <div className="card-title">
                        Your services
                      </div>
                      <div>
                        <strong>Account no:</strong>
                        <b className="ml-2">{account.number}</b>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <ServiceList data={servicesData} />
                  </CardBody>
                </Card>
              </div>
              {/* YOUR SERVICES END */}

              <div className="mt-6 eat-container">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-primary text-white">
                    <div className="d-flex justify-content-between flex-wrap align-items-center">
                      <div className="card-title">
                        Order history
                      </div>
                      <div className="d-none d-md-block">
                        <strong>Track your orders from the last 30 days</strong>
                      </div>
                    </div>
                  </CardHeader>
                  <OrderHistoryTable data={orderHistoriesData} />
                </Card>
              </div>

            </Col>

            {/* CREDIT CARDS START */}
            <Col md="12" lg="4" className="mt-5">
              <div>
                <CreditCard
                  className="giving-back-credit-card"
                  background={Bitmaps.creditGivingBack}
                  style={{
                    backgroundPosition: 'right top'
                  }}
                >
                  <CardBody>
                    <div className="card-title">
                      <h5 className="mb-4">Giving back</h5>
                      <div className="font-size-base" style={{ color: '#99C9FF' }}>
                        Remember, signing up for a uPoint service benefits us all.
                      </div>
                      {/* <span className="price">
                        <span className="unit">$</span>
                        <span className="value">27</span>
                        <span className="unit">.35</span>
                      </span> */}
                    </div>
                    <div className="card-text">
                      A percentage of profit goes directly back into your union, which helps grow the movement and make us stronger.
                    </div>
                  </CardBody>
                </CreditCard>
              </div>
              <div>
                <CreditCard
                  className="member-advantage-credit-card mt-4"
                  background={Bitmaps.creditMemberAdvantage}
                  style={{
                    backgroundPosition: 'right bottom'
                  }}
                >
                  <CardBody>
                    <div className="card-title">
                      <div className="d-flex align-items-center">
                        <div className="mr-2">
                          <SvgIcon size="49px" source={Icons.aim} />
                        </div>
                        <div>
                          <h4>Member Advantage</h4>
                          <div className="font-size-md font-weight-bold">Perks active on your account</div>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      Get the most out of your uPoint, find out how you can save through our partnership with Member Advantage.
                    </div>
                  </CardBody>
                  <CardFooter>
                    <Action
                      className="btn-has-char btn-has-char-chevron btn-has-char-primary"
                      size="sm"
                      color="white"
                      title="Explore your benefit"
                      to="/"
                    />
                  </CardFooter>
                </CreditCard>
              </div>
              <div>
                <CreditCard
                  light
                  className="support-credit-card mt-4"
                  background={Bitmaps.creditSupport}
                  style={{
                    backgroundPosition: 'right bottom'
                  }}
                >
                  <CardBody>
                    <div className="card-title">
                      <div className="d-flex align-items-center">
                        <div className="mr-2">
                          <SvgIcon size="49px" source={Icons.support} className="text-primary" />
                        </div>
                        <div>
                          <h4>Get Australian support</h4>
                          <div className="font-size-md font-weight-bold">Need help with your account?</div>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      Talk with a union worker for customer support who you’re helping to employ.
                    </div>
                  </CardBody>
                  <CardFooter>
                    <Action
                      className="btn-has-char btn-has-char-chevron"
                      size="sm"
                      color="primary"
                      title="Contact us"
                      to="/"
                    />
                  </CardFooter>
                </CreditCard>
              </div>
            </Col>
            {/* CREDIT CARDS END */}

          </Row>
        </Container>
      </Section>
    );
  }
}

const mapStateToProps = state => ({
  account: state.common.auth && state.common.auth.profile,
  services: state.common.services,
  orders: state.common.orders
});

const mapDispatchToProps = dispatch => ({
  Services: bindActionCreators(getServices, dispatch),
  Orders: bindActionCreators(getOrders, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
