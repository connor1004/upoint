import React, {
  Component
} from 'react';
import {
  Container, Row, Col, Form, FormFeedback, FormGroup, Label, Input, Button, UncontrolledAlert,
  Card, CardBody
} from 'reactstrap';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import Select from 'react-select';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import Step from '../../components/modules/Step';
import Section from '../../sections/Section';
import Pack from '../../components/cards/Pack';
import {
  COUNTRIES, STATES, IDENTIFICATIONS, COLOURS
} from '../../configs/constants';

const autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/yyyy');
class MobileIdentity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pack_type: props.location.state ? props.location.state.pack_type : '',
      your_details: props.location.state ? props.location.state.your_details : null,
      identification_type: ''
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeValue(field, value) {
    this.setState({
      [field]: value
    });
  }

  handleBack() {
    this.props.history.goBack();
  }

  handleSubmit(values, bags) {
    const {
      pack_type, your_details, identification_type
    } = this.state;
    this.props.history.push('/dashboard/mobile/confirm', {
      pack_type,
      your_details,
      identification_type,
      identity: values
    });
  }

  handleSelectIdentificationType(value) {
    this.changeValue('identification_type', value);
  }

  renderMedicareCard() {
    return (
      <div className="panel-card-body">
        <Formik
          initialValues={{
            identification_medicare_number: '',
            identification_medicare_individual_name_no: '',
            identification_medicare_middle_name: '',
            identification_medicare_card_color: null,
            identification_medicare_card_expiry_date: ''
          }}
          validationSchema={
            Yup.object().shape({
              identification_medicare_number: Yup.string().required('This field is required!'),
              identification_medicare_individual_name_no: Yup.string().required('This field is required!'),
              identification_medicare_middle_name: Yup.string().required('This field is required!'),
              identification_medicare_card_color: Yup.mixed().required('This field is required!'),
              identification_medicare_card_expiry_date: Yup.string().required('This field is required!')
            })
          }
          onSubmit={this.handleSubmit}
          render={({
            values,
            errors,
            status,
            touched,
            handleBlur,
            handleChange,
            setFieldValue,
            handleSubmit
          }) => (
            <Form onSubmit={handleSubmit}>
              {status && <UncontrolledAlert {...status} />}
              <Row>
                <Col md={8}>
                  <FormGroup>
                    <Label className="d-block" htmlFor="identification_medicare_number">
                      <span>Medicare number</span>
                      <NavLink to="/login" className="float-right text-primary"><small>Where is this?</small></NavLink>
                    </Label>
                    <Input
                      type="text"
                      id="identification_medicare_number"
                      value={values.identification_medicare_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      invalid={touched.identification_medicare_number && !!errors.identification_medicare_number}
                    />
                    <FormFeedback>{errors.identification_medicare_number}</FormFeedback>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={8}>
                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <Label htmlFor="identification_medicare_individual_name_no">Individual name no.</Label>
                        <Input
                          type="text"
                          id="identification_medicare_individual_name_no"
                          value={values.identification_medicare_individual_name_no}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          invalid={touched.identification_medicare_individual_name_no && !!errors.identification_medicare_individual_name_no}
                        />
                        <FormFeedback>{errors.identification_medicare_individual_name_no}</FormFeedback>
                      </FormGroup>
                    </Col>
                    <Col md={8}>
                      <FormGroup>
                        <Label htmlFor="identification_medicare_middle_name">Middle name / initial</Label>
                        <Input
                          type="text"
                          id="identification_medicare_middle_name"
                          value={values.identification_medicare_middle_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          invalid={touched.identification_medicare_middle_name && !!errors.identification_medicare_middle_name}
                        />
                        <FormFeedback>{errors.identification_medicare_middle_name}</FormFeedback>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label className="d-none d-md-block" htmlFor="identification_medicare_middle_name">&nbsp;</Label>
                    <small className="form-text text-muted">
                      If your card has a middle initial or middle name, enter it. Otherwise leave it blank.
                    </small>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={8}>
                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <Label htmlFor="identification_medicare_card_color">Card colour</Label>
                        <Select
                          placeholder="Select a Colour"
                          classNamePrefix="react-select-lg"
                          indicatorSeparator={null}
                          options={COLOURS}
                          getOptionValue={option => option.value}
                          getOptionLabel={option => option.label}
                          value={values.identification_medicare_card_color}
                          onChange={(color) => {
                            setFieldValue('identification_medicare_card_color', color);
                          }}
                          className={(touched.identification_medicare_card_color && !!errors.identification_medicare_card_color) && 'is-invalid'}
                        />
                        {(!!errors.identification_medicare_card_color && touched.identification_medicare_card_color) && (
                          <FormFeedback className="d-block">{errors.identification_medicare_card_color}</FormFeedback>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={8}>
                      <FormGroup>
                        <Label htmlFor="identification_medicare_card_expiry_date">Card expiry date</Label>
                        <MaskedInput
                          className={(touched.identification_medicare_card_expiry_date && !!errors.identification_medicare_card_expiry_date) ? 'is-invalid form-control' : 'form-control'}
                          pipe={autoCorrectedDatePipe}
                          value={values.identification_medicare_card_expiry_date}
                          id="identification_medicare_card_expiry_date"
                          placeholder="MM/YYYY"
                          mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                          onChange={handleChange}
                        />
                        <FormFeedback className="d-block">{errors.identification_medicare_card_expiry_date}</FormFeedback>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <FormGroup>
                <div className="d-flex justify-content-between">
                  <Button type="button" color="primary" outline className="font-weight-extrabold btn-round text-uppercase mr-4" onClick={this.handleBack} style={{ width: '170px' }}>Back</Button>
                  <Button color="primary" type="submit" className="font-weight-extrabold btn-round text-uppercase" style={{ width: '170px' }}>Next</Button>
                </div>
              </FormGroup>
            </Form>
          )}
        />
      </div>
    );
  }

  renderDriverLicence() {
    return (
      <div className="panel-card-body">
        <Formik
          initialValues={{
            identification_driver_licence_state: null,
            identification_driver_licence_number: ''
          }}
          validationSchema={
            Yup.object().shape({
              identification_driver_licence_state: Yup.mixed().required('This field is required!'),
              identification_driver_licence_number: Yup.string().required('This field is required!')
            })
          }
          onSubmit={this.handleSubmit}
          render={({
            values,
            errors,
            status,
            touched,
            handleBlur,
            handleChange,
            setFieldValue,
            handleSubmit
          }) => (
            <Form onSubmit={handleSubmit}>
              {status && <UncontrolledAlert {...status} />}
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label>Driver&apos;s licence state</Label>
                    <Select
                      placeholder="Select a State"
                      classNamePrefix="react-select-lg"
                      indicatorSeparator={null}
                      options={STATES}
                      getOptionValue={option => option.value}
                      getOptionLabel={option => option.label}
                      value={values.identification_driver_licence_state}
                      onChange={(state) => {
                        setFieldValue('identification_driver_licence_state', state);
                      }}
                      className={(touched.identification_driver_licence_state && !!errors.identification_driver_licence_state) && 'is-invalid'}
                    />
                    {(!!errors.identification_driver_licence_state && touched.identification_driver_licence_state) && (
                      <FormFeedback className="d-block">{errors.identification_driver_licence_state}</FormFeedback>
                    )}
                  </FormGroup>
                </Col>
                <Col md={8}>
                  <FormGroup>
                    <Label>Driver&apos;s licence number</Label>
                    <Input
                      type="text"
                      id="identification_driver_licence_number"
                      value={values.identification_driver_licence_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      invalid={touched.identification_driver_licence_number && !!errors.identification_driver_licence_number}
                    />
                    <FormFeedback>{errors.identification_driver_licence_number}</FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <div className="d-flex justify-content-between">
                  <Button type="button" color="primary" outline className="font-weight-extrabold btn-round text-uppercase mr-4" onClick={this.handleBack} style={{ width: '170px' }}>Back</Button>
                  <Button color="primary" type="submit" className="font-weight-extrabold btn-round text-uppercase" style={{ width: '170px' }}>Next</Button>
                </div>
              </FormGroup>
            </Form>
          )}
        />
      </div>
    );
  }

  renderPassport() {
    const renderOptions = [];
    Object.keys(COUNTRIES).forEach((key, index) => {
      const value = COUNTRIES[key];
      renderOptions.push({ label: value, value: key });
    });
    return (
      <div className="panel-card-body">
        <Formik
          initialValues={{
            identification_passport_number: '',
            identification_passport_nationality: null
          }}
          validationSchema={
            Yup.object().shape({
              identification_passport_nationality: Yup.mixed().required('This field is required!'),
              identification_passport_number: Yup.string().required('This field is required!')
            })
          }
          onSubmit={this.handleSubmit}
          render={({
            values,
            errors,
            status,
            touched,
            handleBlur,
            handleChange,
            setFieldValue,
            handleSubmit
          }) => (
            <Form onSubmit={handleSubmit}>
              {status && <UncontrolledAlert {...status} />}
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label>Passport number</Label>
                    <Input
                      type="text"
                      id="identification_passport_number"
                      value={values.identification_passport_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      invalid={touched.identification_passport_number && !!errors.identification_passport_number}
                    />
                    <FormFeedback>{errors.identification_passport_number}</FormFeedback>
                  </FormGroup>
                </Col>
                <Col md={8}>
                  <FormGroup>
                    <Label>Nationality</Label>
                    <Select
                      placeholder="Please Select"
                      classNamePrefix="react-select-lg"
                      indicatorSeparator={null}
                      options={renderOptions}
                      getOptionValue={option => option.value}
                      getOptionLabel={option => option.label}
                      value={values.identification_passport_nationality}
                      onChange={(country) => {
                        setFieldValue('identification_passport_nationality', country);
                      }}
                      className={(touched.identification_passport_nationality && !!errors.identification_passport_nationality) && 'is-invalid'}
                    />
                    {(!!errors.identification_passport_nationality && touched.identification_passport_nationality) && (
                      <FormFeedback className="d-block">{errors.identification_passport_nationality}</FormFeedback>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <div className="d-flex justify-content-between">
                  <Button type="button" color="primary" outline className="font-weight-extrabold btn-round text-uppercase mr-4" onClick={this.handleBack} style={{ width: '170px' }}>Back</Button>
                  <Button color="primary" type="submit" className="font-weight-extrabold btn-round text-uppercase" style={{ width: '170px' }}>Next</Button>
                </div>
              </FormGroup>
            </Form>
          )}
        />
      </div>
    );
  }

  render() {
    const { identification_type } = this.state;
    const renderPacks = IDENTIFICATIONS.map((item, index) => {
      const className = identification_type ? (identification_type === item.value ? 'pack-round pack-selected' : 'pack-round pack-disabled') : 'pack-round';
      return (
        <Pack
          key={`${index}`}
          className={className}
          {...item}
          onClick={this.handleSelectIdentificationType.bind(this, item.value)}
        />
      );
    });
    let renderBody = null;
    switch (identification_type) {
      case 'medicare_card':
        renderBody = this.renderMedicareCard();
        break;
      case 'driver_licence':
        renderBody = this.renderDriverLicence();
        break;
      case 'passport':
        renderBody = this.renderPassport();
        break;
      default:
        break;
    }
    return (
      <Section className="main-section bg-maze">
        <Container>
          <h3 className="title-underlined-primary title-underlined-center text-center font-weight-extrabold">Add a mobile service</h3>
          <div className="eat-container">
            <Step steps={['Choose plan', 'Your Details', 'Identity', 'Confirm']} index={3} />
            <Card className="form-card">
              <CardBody className="card-body-p-lg">
                <h3 className="title font-weight-extrabold text-center mb-10">Identity</h3>
                <p className="text-center font-size-md">
                  It is a legal requirement that we verify your identity before we can activate your SIM card.
                  Please select how you would like to verify your identity. By providing this information you are confirming
                  that you are authorised to provide these details to us. You are also confirming that you consent to us using
                  this information to carry out an
                  {' '}
                  <br />
                  <NavLink className="text-primary" to="#">identity check verification.</NavLink>
                </p>
              </CardBody>
              <CardBody className="card-body-p-lg bg-primary">
                <h3 className="title card-title title-underlined-light title-underlined-center text-center font-weight-extrabold text-white">Select your ID type</h3>
                <div className="d-flex flex-column flex-md-row justify-content-center">
                  {renderPacks}
                </div>
                {
                  identification_type ? (
                    <p className="text-right d-block d-md-none">
                      <NavLink to="#" onClick={this.changeValue.bind(this, 'identification_type', '')}>Change your ID type</NavLink>
                    </p>
                  ) : null
                }
              </CardBody>
              {
                identification_type && (
                  <CardBody className="card-body-p-xl">
                    {renderBody}
                  </CardBody>
                )
              }
            </Card>
          </div>
        </Container>
      </Section>
    );
  }
}

export default MobileIdentity;
