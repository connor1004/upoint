import React, {
  Fragment
} from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Row, Col, Button
} from 'reactstrap';
import classnames from 'classnames';

import SvgIcon from '../modules/SvgIcon';
import {
  Icons
} from '../../theme';
import {
  SERVICE_TYPE_LIST, PERIOD_TYPE_LIST
} from '../../configs/constants';
import ConstantHelper from '../../helpers/ConstantHelper';

const currencyFormatter = Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  minimumFractionDigits: 2
});

const ServiceListItem = (props) => {
  const {
    data
  } = props;
  const {
    service_type, service_name, service_plan, service_nickname, price, period_type
  } = data;

  const classNameMap = {
    'service-list-item': true,
    blur: !price
  };

  let periodTypeItem = null;
  if (period_type) {
    periodTypeItem = ConstantHelper.getListItem(PERIOD_TYPE_LIST, 'value', period_type);
  }

  const serviceTypeItem = ConstantHelper.getListItem(SERVICE_TYPE_LIST, 'value', service_type);

  return (
    <div className={classnames(classNameMap)}>
      <Row>
        <Col md="6">
          <div className="d-flex align-items-center">
            <div className="mr-4">
              <SvgIcon size={50} source={Icons[serviceTypeItem.icon]} className={`text-${serviceTypeItem.color}`} />
            </div>
            <div>
              <div className="service-name">{service_name}</div>
              <div className={`service-plan text-${serviceTypeItem.color}`}>{service_plan}</div>
              {service_nickname && <div className="service-nickname">{service_nickname}</div>}
            </div>
          </div>
        </Col>
        <Col md="6" className="mt-2 mt-md-0">
          <div className="service-item-right d-flex justify-content-start justify-content-between justify-content-md-end align-items-center flex-wrap">
            {
              price ? (
                <Fragment>
                  <div className="price">
                    {currencyFormatter.format(price)}
                    {' '}
                    {periodTypeItem && periodTypeItem.label}
                  </div>
                  <div>
                    <Button to={serviceTypeItem.detail_link} tag={Link} color="link" size="sm" className={`px-0 font-weight-bold btn-has-char btn-has-char-chevron btn-has-char-${serviceTypeItem.color}`}>
                      See details
                    </Button>
                  </div>
                </Fragment>
              ) : (
                <div>
                  <Button tag={Link} color={serviceTypeItem.color} to={serviceTypeItem.button_link} size="sm" className="btn-has-char btn-has-char-plus">
                    {`Add ${serviceTypeItem.label2}`}
                  </Button>
                </div>
              )
            }
          </div>
        </Col>
      </Row>
    </div>
  );
};

ServiceListItem.defaultProps = {
};

export const ServiceListItemEmpty = ({ message }) => (
  <div className="text-center">
    {message}
  </div>
);

ServiceListItemEmpty.defaultProps = {
  message: 'No services available'
};

const ServiceList = (props) => {
  const {
    data
  } = props;
  return (
    <div className="service-list">
      {
        data && data.length > 0 ? (
          data.map((item, index) => (
            <ServiceListItem data={item} key={`${index}`} />
          ))
        ) : (
          <ServiceListItemEmpty />
        )
      }
    </div>
  );
};

ServiceList.defaultProps = {
  data: []
};

export default ServiceList;
