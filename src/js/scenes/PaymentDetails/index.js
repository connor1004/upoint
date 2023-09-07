import React, { Component } from 'react';
import {
  Container, Row, Col, Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import CardReact from 'card-react';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

import Section from '../../sections/Section';

class AccountPaymentEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agree_terms: false,
      payment_type: 'card',
      card_name: '',
      card_number: '',
      card_cvv: '',
      card_expiry_date: '',
      bank_bsb: '',
      bank_account_no: ''
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  changeValue(name, value) {
    this.setState({
      [name]: value
    });
  }

  handleChange(name, event) {
    this.handleChangeValue(name, event.target.value);
  }

  handleChangeValue(name, value) {
    this.changeValue(name, value);
  }

  handleBack() {
    this.props.history.goBack();
  }

  handleUpdate(values) {
    console.log(values);
    this.props.history.push('/dashboard/payment-success');
  }

  render() {
    const {
      agree_terms,
      payment_type,
      card_name,
      card_number,
      card_cvv,
      card_expiry_date,
      bank_bsb,
      bank_account_no
    } = this.state;
    return (
      <Section className="main-section bg-maze section-payment-details half-back-section">
        <Container>
          <h3 className="title-underlined-primary title-underlined-center text-center font-weight-extrabold">Billing & payments</h3>
          <div className="eat-container">
            <CardReact
              container="card_container"
              formInputsNames={{
                number: 'card_number',
                expiry: 'card_expiry_date',
                cvc: 'card_cvv',
                name: 'card_name'
              }}
              classes={{
                valid: 'valid',
                invalid: 'invalid'
              }}
              initialValues={
                {
                  number: card_number,
                  cvc: card_cvv,
                  expiry: card_expiry_date,
                  name: card_name
                }
              }
            >
              <div className="card form-card card-payment">
                <Row className="outer-row bg-primary">
                  <Col className="col-md-6 card-action align-self-center">
                    <div id="card_container" />
                  </Col>
                  <div className="card-body col-md-6 form-col">
                    <h4 className="title-underlined-primary title-underlined-center font-weight-extrabold text-center">Edit payment details</h4>
                    <Form onSubmit={this.handleUpdate}>
                      <FormGroup>
                        <Label htmlFor="payment_type">Pay by</Label>
                        <select
                          className="form-control custom-select"
                          name="payment_type"
                          id="payment_type"
                          value={payment_type}
                          onChange={this.handleChange.bind(this, 'payment_type')}
                        >
                          <option value="card">Credit Card</option>
                          <option value="bank">Direct Debit</option>
                        </select>
                      </FormGroup>
                      {
                        payment_type === 'card' ? (
                          <div>
                            <h4 className="title text-center font-weight-extrabold">Card details</h4>
                            <FormGroup>
                              <Label htmlFor="order_card_name">Name on card</Label>
                              <Input
                                type="text"
                                name="card_name"
                                id="order_card_name"
                                onChange={this.handleChange.bind(this, 'card_name')}
                              />
                            </FormGroup>
                            <Row>
                              <Col lg={9}>
                                <FormGroup>
                                  <Label htmlFor="order_card_number">Card number</Label>
                                  <Input
                                    type="text"
                                    name="card_number"
                                    id="order_card_number"
                                    onChange={this.handleChange.bind(this, 'card_number')}
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg={3}>
                                <FormGroup>
                                  <Label htmlFor="order_card_cvv">CVV</Label>
                                  <Input
                                    type="text"
                                    name="card_cvv"
                                    id="billing_card_cvv"
                                    onChange={this.handleChange.bind(this, 'card_cvv')}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>

                            <FormGroup>
                              <Label htmlFor="order_card_expiry_date">Card expiry date</Label>
                              <Input
                                type="text"
                                name="card_expiry_date"
                                id="order_card_expiry_date"
                                onChange={this.handleChange.bind(this, 'card_expiry_date')}
                              />
                            </FormGroup>
                          </div>
                        ) : (
                          <div>
                            <h4 className="title text-center font-weight-extrabold">Bank details</h4>
                            <FormGroup>
                              <Label htmlFor="order_bank_account_no">Bank account number</Label>
                              <Input
                                type="text"
                                name="bank_account_no"
                                value={bank_account_no}
                                id="order_bank_account_no"
                                onChange={this.handleChange.bind(this, 'bank_account_no')}
                              />
                            </FormGroup>

                            <FormGroup>
                              <Label htmlFor="order_bank_bsb">Bank BSB</Label>
                              <Input
                                type="text"
                                name="bank_bsb"
                                value={bank_bsb}
                                id="order_bank_bsb"
                                onChange={this.handleChange.bind(this, 'bank_bsb')}
                              />
                            </FormGroup>
                          </div>
                        )
                      }
                      <FormGroup>
                        <span className="switch">
                          <Input
                            type="checkbox"
                            id="switch_agree_terms"
                            checked={agree_terms}
                            onChange={(event) => {
                              this.setState({
                                agree_terms: event.target.checked
                              });
                            }}
                          />
                          <Label htmlFor="switch_agree_terms">
                            <span className="text-muted">
                              I understand my monthly services will be billed using these details.
                            </span>
                          </Label>
                        </span>
                      </FormGroup>

                      <Row>
                        <Col>
                          <Button
                            className="btn-round float-left"
                            type="button"
                            outline
                            color="primary"
                            onClick={this.handleBack.bind(this)}>
                            Back
                          </Button>
                          <Button
                            className="float-right btn-round"
                            disabled={!agree_terms}
                            color="primary"
                            type="submit"
                          >
                            Update
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Row>
              </div>
            </CardReact>
          </div>
        </Container>
      </Section>
    );
  }
}

export default AccountPaymentEdit;
