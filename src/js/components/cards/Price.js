import React from 'react';
import {
  Card, CardBody, CardHeader, CardText
} from 'reactstrap';
import classnames from 'classnames';
import {
  PERIOD_TYPE_LIST
} from '../../configs/constants';
import ConstantHelper from '../../helpers/ConstantHelper';
import Link from '../modules/Link';
import Action from '../modules/Action';

const PriceCard = (props) => {
  const {
    data, className, action, ...rest
  } = props;
  const {
    title,
    period_type,
    color,
    price,
    description,
    summary,
    capacities,
    features
  } = data;

  const periodTypeItem = ConstantHelper.getListItem(PERIOD_TYPE_LIST, 'value', period_type, PERIOD_TYPE_LIST[0]);

  const classNameMap = {
    'price-card': true,
    ...(className ? { [className]: true } : {})
  };

  return (
    <Card className={classnames(classNameMap)}>
      <CardHeader className={`bg-${color} text-white`}>
        {title && <CardText>{title}</CardText>}
      </CardHeader>
      <CardBody>
        <div className="price-card-main">
          {
            price && (
              <div className={`price text-${color}`}>
                <span className="unit">
                  $
                </span>
                <span className="value">
                  {price}
                </span>
              </div>
            )
          }
          <div className={`period text-${color}`}>
            {periodTypeItem.label}
          </div>
          {description && (
            <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
          )}
          {summary && (
            <Link className="summary" to={summary}>
                Critical information summary
            </Link>
          )}
        </div>
        {capacities && (
          <div className="price-card-capacities">
            {capacities.map((item, index) => (
              <div className="price-card-item" key={`${index}`}>
                <div className="main">
                  <span className="amount">{item.amount}</span>
                  <span className="unit">{item.unit}</span>
                  <span className="label">{item.label}</span>
                </div>
                <div className="details" dangerouslySetInnerHTML={{ __html: item.details }} />
              </div>
            ))}
          </div>
        )}
        {features && (
          <div className="price-card-features">
            {features.map((item, index) => (
              <div className="price-card-item" key={`${index}`}>
                <div className="main">
                  <div className="label">{item.label}</div>
                </div>
                <div className="details" dangerouslySetInnerHTML={{ __html: item.details }} />
              </div>
            ))}
          </div>
        )}
        { action && <Action color={color} {...action} /> }
      </CardBody>
    </Card>
  );
};

PriceCard.defaultProps = {
  data: {},
  action: null
};

export default PriceCard;
