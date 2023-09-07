import React, { Component } from 'react';
import {
  Container, Row, Col, Card
} from 'reactstrap';
import Section from '../../sections/Section';
import { Bitmaps } from '../../theme';

class PaymentSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Section className="main-section bg-maze section-payment-details half-back-section">
        <Container>
          <div className="eat-container">
            <Card className="form-card card-payment">
              <Row className="outer-row bg-primary">
                <Col md="6" className="card-body bg-primary text-white">
                  <div className="text-center pb-6">
                    <img src={Bitmaps.lightSIM} alt="light sim" />
                  </div>
                  <h3 className="text-center title-underlined-white title-underlined-center font-weight-bold mb-10">
                    Thank you for activating your uPoint SIM card.
                  </h3>
                  <Row>
                    <Col xs={7}>
                      <div className="font-size-lg">
                        Order ID
                      </div>
                    </Col>
                    <Col xs={5}>
                      <div className="font-size-lg font-weight-bold">
                        4567892
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={7}>
                      <div className="font-size-lg">
                        Account number
                      </div>
                    </Col>
                    <Col xs={5}>
                      <div className="font-size-lg font-weight-bold">
                        129345
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-10">
                    <Col xs={7}>
                      <div className="font-size-lg">
                        Account password
                      </div>
                    </Col>
                    <Col xs={5}>
                      <div className="font-size-lg font-weight-bold">
                        fghjkl
                      </div>
                    </Col>
                  </Row>
                  <p className="font-weight-semibold">Your activation order has been received; please take a note of your order ID in case you need to contact us about your activation.</p>
                  <p>You should also take a note of your account number and password information which is shown here, you'll need to this to log into your uPoint account.</p>
                </Col>
                <Col md={6} className="card-body form-col">
                  <h3 className="font-weight-bold text-center title-underlined-primary title-underlined-center mb-10">What happens next?</h3>
                  <div className="happen-item">
                    <div className="circle-number">
                      1
                    </div>
                    <div className="content">
                      Your new service will normally be active within 4 hours, so please allow time for your new number to be actived Occasionally, delays do happen and can last 7-10 days, this is rare but you can find out more here.
                    </div>
                  </div>
                  <div className="happen-item">
                    <div className="circle-number">
                      2
                    </div>
                    <div className="content">
                      Put your new SIM can your handset, and when the service is active we will send you an SMS to let you know that your new service is ready to use.
                    </div>
                  </div>
                  <div className="happen-item">
                    <div className="circle-number">
                      3
                    </div>
                    <div className="content">
                      Once you receive this SMS, you should turn your phone off for a few minutes and turn it back on, this is important as it will enable your handset to pick up the relevant settings which will need to be installed/downloaded to enable things like MMS and internet to work.
                    </div>
                  </div>
                  <div className="happen-item">
                    <div className="circle-number">
                      4
                    </div>
                    <div className="content">
                      You SIM card is pre-loaded with $5 of Pay As You Go credit so you can start using your service as soon as it is activated.
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </div>
        </Container>
      </Section>
    );
  }
}

export default PaymentSuccess;
