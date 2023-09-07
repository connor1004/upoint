import React, {
  Component
} from 'react';
import {
  Container, Row, Col, Button,
  Card, CardBody, CardHeader
} from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import Section from '../../sections/Section';

class Bills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue_date: '',
      total_amount: 0,
      due_on: ''
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleViewBill = this.handleViewBill.bind(this);
  }

  handleUpdate() {
    console.log('Update Payment Details');
  }

  handleViewBill() {
    console.log('View Bill');
  }

  render() {
    const {
      issue_date, total_amount, due_on
    } = this.state;
    return (
      <Section className="main-section bg-maze section-view-bill">
        <Container>
          <h3 className="title-underlined-primary title-underlined-center text-center font-weight-extrabold">Billing & payments</h3>
          <div className="eat-container">
            <Card className="form-card">
              <CardBody className="card-body-p-xl">
                <Row>
                  <Col lg="6">
                    <h4 className="title-underlined-primary font-weight-extrabold">Your current bill</h4>
                  </Col>
                  <Col lg="6">
                    <Row>
                      <Col xs={6} className="mb-2">
                        <div className="text-primary"><strong>Bill issue date</strong></div>
                      </Col>
                      <Col xs={6} className="mb-2">
                        <div><strong>{ issue_date || '-' }</strong></div>
                      </Col>
                      <Col xs={6} className="mb-2">
                        <div className="text-primary"><strong>Total amount</strong></div>
                      </Col>
                      <Col xs={6} className="mb-2">
                        <div>
                          <div className="font-weight-extrabold">
                            <strong>
                              $
                              { total_amount || 0 }
                            </strong>
                          </div>
                          <div>
                            <small>
                              due on
                              { due_on || '-' }
                            </small>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="border-top border-primary my-6" />
                    <div className="d-flex justify-content-between">
                      <Button color="info" size="sm" className="font-weight-extrabold btn-round text-uppercase mr-4" tag={Link} to="/dashboard/payment-details">Update Payment Details</Button>
                      <Button color="info" size="sm" outline className="font-weight-extrabold btn-round text-uppercase btn-bill" onClick={this.handleViewBill}>View Bill</Button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card className="card-billing-history">
              <CardHeader className="py-4">
                Billing history
              </CardHeader>
              <table className="table table-transaction">
                <thead>
                  <tr>
                    <th style={{ width: '50%' }}><span className="ml-3 ml-md-5">Date</span></th>
                    <th className="text-center">Bill number</th>
                    <th className="text-center">Bill amount</th>
                    <th className="text-center" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="ml-3 ml-md-5 h5 font-weight-extrabold">03/06/2019</span>
                    </td>
                    <td className="text-center">195</td>
                    <td className="text-center">$1.65</td>
                    <td className="text-center">
                      <Button color="primary" size="sm" outline className="btn-round">View PDF</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="ml-3 ml-md-5 h5 font-weight-extrabold">03/06/2019</span>
                    </td>
                    <td className="text-center">195</td>
                    <td className="text-center">$1.65</td>
                    <td className="text-center">
                      <Button color="primary" size="sm" outline className="btn-round">View PDF</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="ml-3 ml-md-5 h5 font-weight-extrabold">03/06/2019</span>
                    </td>
                    <td className="text-center">195</td>
                    <td className="text-center">$1.65</td>
                    <td className="text-center">
                      <Button color="primary" size="sm" outline className="btn-round">View PDF</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="ml-3 ml-md-5 h5 font-weight-extrabold">03/06/2019</span>
                    </td>
                    <td className="text-center">195</td>
                    <td className="text-center">$1.65</td>
                    <td className="text-center">
                      <Button color="primary" size="sm" outline className="btn-round">View PDF</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>
        </Container>
      </Section>
    );
  }
}

export default Bills;
