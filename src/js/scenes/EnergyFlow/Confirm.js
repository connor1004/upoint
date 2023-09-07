/* eslint-disable react/no-unescaped-entities */
import React, {
  Component
} from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Row, Col, Label, Button,
  Card, CardBody, Modal, ModalBody
} from 'reactstrap';

import Step from '../../components/modules/Step';
import Section from '../../sections/Section';

class EnergyConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pack_type: props.location.state ? props.location.state.pack_type : '',
      compare_bill: props.location.state ? props.location.state.compare_bill : null,
      special_requirements: props.location.state ? props.location.state.special_requirements : null,
      identification_type: props.location.state ? props.location.state.identification_type : '',
      your_details: props.location.state ? props.location.state.your_details : null,
      identity: props.location.state ? props.location.state.identity : null,
      agree_terms: false,
      modal: false
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBack() {
    this.props.history.goBack();
  }

  handleSubmit() {
    const {
      pack_type, identification_type, identity, your_details, special_requirements, compare_bill
    } = this.state;
    this.props.history.push('/dashboard/payment-details', {
      pack_type,
      compare_bill,
      special_requirements,
      identification_type,
      identity,
      your_details
    });
  }

  handleToggleModal() {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  }

  handleGotoStepInformationCode() {
    const {
      pack_type, identification_type, identity, special_requirements
    } = this.state;
    this.props.history.push('/dashboard/energy/your-details', {
      pack_type,
      special_requirements,
      identification_type,
      identity
    });
  }

  handleGotoStepAddressCode() {
    const {
      pack_type, identification_type, identity, special_requirements
    } = this.state;
    this.props.history.push('/dashboard/energy/your-details', {
      pack_type,
      special_requirements,
      identification_type,
      identity
    });
  }

  handleGotoStepSpecialCode() {
    const {
      pack_type, identification_type, identity, your_details
    } = this.state;
    this.props.history.push('/dashboard/energy/special-requirements', {
      pack_type,
      your_details,
      identification_type,
      identity
    });
  }

  handleGotoStepIdentity() {
    const { pack_type, your_details, special_requirements } = this.state;
    this.props.history.push('/dashboard/energy/identification', {
      pack_type,
      special_requirements,
      your_details
    });
  }

  render() {
    const {
      your_details, agree_terms, identification_type, identity, special_requirements
    } = this.state;
    return (
      <Section className="main-section bg-maze">
        <Container>
          <h3 className="title-underlined-primary title-underlined-center text-center font-weight-extrabold">Add an NBN service</h3>
          <div className="eat-container">
            <Step steps={['Choose plan', 'Special requirements', 'Your Details', 'Identification', 'Confirm']} index={4} />
            <Modal
              className="modal-lg modal-primary"
              isOpen={this.state.modal}
              toggle={this.handleToggleModal.bind(this)}>
              <div className="modal-header">
                <h3 className="text-center title-underlined-primary title-underlined-center font-weight-extrabold">Terms of activation</h3>
              </div>
              <ModalBody>
                <p>
                  This is a summary of the Terms and Conditions on which UPOINT Australia Pty Limited (ABN 58 106 611 330)&nbsp;
                  NO supply the UPOINT mobile service for the prepaid service branded uPoint to you and is not intended to&nbsp;
                  replace our full Terms and Conditions which are available on our website or by calling us on 2534 (uPoint) from your uPoint.&nbsp;
                </p>
                <p>
                  We supply the service to you.
                  By activating your SIM card, you are agreeing to the Terms and Conditions outlined in the full version on our website,&nbsp;
                  you are also agreeing to abide by the Acceptable Use Policy which applies to all uPoint mobile plans and services.&nbsp;
                  To activate your SIM card you will need to provide valid identification this is a requirement by law. You will need to provide:&nbsp;
                  Your name, address, date of birth and your driver&apos;s license, Medicare card or passport number.&nbsp;
                  The service must not be used for any illegal or anti-social purposes, including obscene, abusive, fraudulent,&nbsp;
                  threatening or otherwise unacceptable messages or usage.
                </p>
                <p><strong className="font-weight-extrabold">Your number</strong></p>
                You can request to receive a new number, or you can choose to bring your own number to uPoint (transfer or port your number to uPoint).&nbsp;
                By selecting to transfer a number to uPoint, you:
                <ul>
                  <li>
                    confirm that you are the account holder of the service selected to be transferred (port.) to uPoint,&nbsp;
                    or are an Authorised Representative of the account holder
                  </li>
                  <li>
                    acknowledge that there may be costs and obligations (such as early termination fees and port-out fees)&nbsp;
                    associated with the port that may result in the finalisation of your current account with the losing service provider
                  </li>
                  <li>
                    understand that by porting the telephone number to uPoint mobile, the service associat.
                    with that number will be disconnected from your current service provider, and may result in the finalisation of your account for the service
                  </li>
                  <li>certify that all information provided during the activation process is true, correct and complete</li>
                  <li>
                    are responsible for any fees that may apply as a result of a failed or delayed transfer due to incorrect or incomplete&nbsp;
                    information provided during the activation process.
                  </li>
                </ul>
                <p><strong className="font-weight-extrabold">The service and network coverage</strong></p>
                <p>
                  We do not guarantee that the service is not available in all areas of Australia.&nbsp;
                  Before purchasing or activating your SIM card, you should review coverage maps showing where the service is available in Australia by clicking here.&nbsp;
                  You are responsible for enquiring as to whether coverage is available in the area in which you would normally use the service.&nbsp;
                  We will always aim to provide the best and most reliable service possible, but cannot be responsible for any loss of service, regardless of the party at fault.
                </p>
                <p><strong className="font-weight-extrabold">Your plan and balance</strong></p>
                <p>
                  You should check the full details of the plan you select so that you are informed about the credit, inclusions and expiry period of your plan.&nbsp;
                  Full details can be found on our website at uPoint.com.au. Once your plan or credit has expired, we will hold your number for you for up to 90 days.&nbsp;
                  If you do not recharge within this time, your number may be allocated to someone else in line with ACMA&apos;s numbering regulations.&nbsp;
                  You may transfer your existing mobile phone number to uPoint if you have one, or you can receive a new mobile phone number.&nbsp;
                  If your cr.it is zero, you can receive calls and SMS&apos;s, however you will be unable to use any services that incur further charges.&nbsp;
                  You will not be able to access your voicemail or make any calls, except to 2534 (uPoint) or SMS 590 to recharge your account and calls to emerge, services.
                </p>
                <p><strong className="font-weight-extrabold">Your mobile phone</strong></p>
                <p>
                  Your device must be compatible with UNITS 850 to take full advantage of part of Telstra&apos;s 3G mobile network and data speeds.
                </p>
              </ModalBody>
              <div className="modal-footer text-center">
                <Button color="primary" className="btn-round" onClick={this.handleToggleModal.bind(this)}>I Understand</Button>
              </div>
            </Modal>
            <Row>
              <Col md={6}>
                <Card className="form-card">
                  <CardBody className="card-body-p-lg">
                    <Row>
                      <Col className="text-right">
                        <h5 className="card-title title-underlined-primary float-left font-weight-bold">Service Address</h5>
                        <Button
                          type="button"
                          size="sm"
                          color="outline-primary"
                          className="btn-round"
                          onClick={this.handleGotoStepAddressCode.bind(this)}
                        >
                          Edit
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <div className="text-primary mb-4">
                          <strong>Address</strong>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="mb-4">
                          <strong>
                            {your_details && your_details.user_street_number}
                            {', '}
                            {your_details && your_details.user_street}
                            {', '}
                            {your_details && your_details.user_city}
                            {', '}
                            {your_details && your_details.user_state && your_details.user_state.label}
                            {', '}
                            {your_details && your_details.user_postcode}
                          </strong>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardBody className="card-body-p-lg card-stack">
                    <Row>
                      <Col className="text-right">
                        <h5 className="card-title title-underlined-primary float-left font-weight-bold">Special information</h5>
                        <Button
                          type="button"
                          size="sm"
                          color="outline-primary"
                          className="btn-round"
                          onClick={this.handleGotoStepSpecialCode.bind(this)}
                        >
                          Edit
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <div className="mb-4 text-primary">
                          <strong>Moving house</strong>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="mb-4"><strong>{special_requirements && special_requirements.have_solar}</strong></div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <div className="mb-4 text-primary"><strong>NMI or Meter Number</strong></div>
                      </Col>
                      <Col xs={6}>
                        <div className="mb-4"><strong>{special_requirements && special_requirements.nmi_meter}</strong></div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <div className="mb-4 text-primary"><strong>MIRN or Meter Number</strong></div>
                      </Col>
                      <Col xs={6}>
                        <div className="mb-4"><strong>{special_requirements && special_requirements.mirn_meter}</strong></div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <div className="mb-4 text-primary"><strong>Receive notices via</strong></div>
                      </Col>
                      <Col xs={6}>
                        <div className="mb-4"><strong>{special_requirements && special_requirements.notice_type}</strong></div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <div className="mb-4 text-primary"><strong>Life support equipment</strong></div>
                      </Col>
                      <Col xs={6}>
                        <div className="mb-4"><strong>{special_requirements && special_requirements.have_address}</strong></div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <div className="mb-4 text-primary"><strong>Solar panels</strong></div>
                      </Col>
                      <Col xs={6}>
                        <div className="mb-4"><strong>{special_requirements && special_requirements.have_solar_panel}</strong></div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <div className="mb-4 text-primary"><strong>Concession card</strong></div>
                      </Col>
                      <Col xs={6}>
                        <div className="mb-4"><strong>{special_requirements && special_requirements.hold_concession_card}</strong></div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardBody className="card-body-p-lg card-stack d-none d-md-block">
                    <div className="mb-6">
                      <span className="switch">
                        <input
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
                          <span className="text-muted mt-2">
                            I have read and agree to the&nbsp;
                            <NavLink className="text-primary" to="#" onClick={this.handleToggleModal.bind(this)}>Terms and Conditions.</NavLink>
                          </span>
                        </Label>
                      </span>
                    </div>
                    <div className="mb-4">
                      <Button
                        color="primary"
                        className="btn-round btn-block"
                        disabled={!agree_terms}
                        onClick={this.handleSubmit}
                      >
                        Submit Order
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="form-card">
                  <CardBody className="card-body-p-lg">
                    <Row>
                      <Col className="text-right">
                        <h5 className="card-title title-underlined-primary float-left font-weight-bold">Your details</h5>
                        <Button
                          type="button"
                          size="sm"
                          color="outline-primary"
                          className="btn-round"
                          onClick={this.handleGotoStepInformationCode.bind(this)}>
                          Edit
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <div className="text-primary mb-4"><strong>Name</strong></div>
                      </Col>
                      <Col xs={6}>
                        <div className="mb-4">
                          <strong>
                            {your_details && (
                              <span>{`${your_details.user_title && your_details.user_title.label} ${your_details.user_first_name} ${your_details.user_last_name}`}</span>
                            )}
                          </strong>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <div className="text-primary mb-4"><strong>Phone</strong></div>
                      </Col>
                      <Col xs={6}>
                        <div className="mb-4">
                          <strong>
                            {your_details && your_details.user_mobile}
                          </strong>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <div className="text-primary mb-4"><strong>Email</strong></div>
                      </Col>
                      <Col xs={6}>
                        <div className="mb-4">
                          <strong>{your_details && your_details.user_email}</strong>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardBody className="card-body-p-lg card-stack">
                    <Row>
                      <Col className="text-right">
                        <h5 className="card-title title-underlined-primary float-left font-weight-bold">Identification</h5>
                        <Button
                          type="button"
                          size="sm"
                          color="outline-primary"
                          className="btn-round"
                          onClick={this.handleGotoStepIdentity.bind(this)}>
                          Edit
                        </Button>
                      </Col>
                    </Row>
                    {identification_type === 'medicare_card' && (
                      <Row>
                        <Col xs={6}>
                          <div className="text-primary mb-4">
                            <strong>Medicare number</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="mb-4">
                            <strong>{identity && identity.identification_medicare_number}</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="text-primary mb-4">
                            <strong>Individual name no.</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="mb-4">
                            <strong>{identity && identity.identification_medicare_individual_name_no}</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="text-primary mb-4">
                            <strong>Middle name /initial</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="mb-4">
                            <strong>{identity && identity.identification_medicare_middle_name}</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="text-primary mb-4">
                            <strong>Card color</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="mb-4">
                            <strong>{identity && identity.identification_medicare_card_color && identity.identification_medicare_card_color.label}</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="text-primary mb-4">
                            <strong>Card expiry date</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="mb-4">
                            <strong>{identity && identity.identification_medicare_card_expiry_date}</strong>
                          </div>
                        </Col>
                      </Row>
                    )}
                    {identification_type === 'driver_licence' && (
                      <Row>
                        <Col xs={6}>
                          <div className="text-primary mb-4">
                            <strong>Driver's licence state</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="mb-4">
                            <strong>{identity && identity.identification_driver_licence_state && identity.identification_driver_licence_state.label}</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="text-primary mb-4">
                            <strong>Driver's licence number</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="mb-4">
                            <strong>{identity && identity.identification_driver_licence_number}</strong>
                          </div>
                        </Col>
                      </Row>
                    )}
                    {identification_type === 'passport' && (
                      <Row>
                        <Col xs={6}>
                          <div className="text-primary mb-4">
                            <strong>Passport number</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="mb-4">
                            <strong>{identity && identity.identification_passport_number}</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="text-primary mb-4">
                            <strong>Nationality</strong>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="mb-4">
                            <strong>{identity && identity.identification_passport_nationality && identity.identification_passport_nationality.label}</strong>
                          </div>
                        </Col>
                      </Row>
                    )}
                  </CardBody>
                  <CardBody className="card-body-p-lg card-stack d-block d-md-none">
                    <div className="mb-6">
                      <span className="switch">
                        <input
                          type="checkbox"
                          id="switch_agree_terms"
                          checked={agree_terms}
                          onChange={(event) => {
                            this.setState({
                              agree_terms: event.target.checked
                            });
                          }}
                        />
                        <Label htmlFor="switch_agree_terms2">
                          <span className="text-muted mt-2">
                            I have read and agree to the&nbsp;
                            <NavLink className="text-primary" to="#" onClick={this.handleToggleModal.bind(this)}>Terms and Conditions.</NavLink>
                          </span>
                        </Label>
                      </span>
                    </div>
                    <div className="mb-4">
                      <Button
                        color="primary"
                        className="btn-round btn-block"
                        disabled={!agree_terms}
                        onClick={this.handleSubmit}
                      >
                        Submit Order
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Section>
    );
  }
}

export default EnergyConfirm;
