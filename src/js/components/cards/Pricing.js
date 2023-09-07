/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import Numeral from 'numeral';
import {
  Button
} from 'reactstrap';

class PricingCard extends Component {
  render() {
    const {
      className,
      type, currency, price,
      value, title, data, description, subDescription,
      onClick, actionTitle, details
    } = this.props;
    const renderItems = data.map((item, index) => <li key={`${index}`}>{item}</li>);
    const renderDetails = details ? <u><a href={details.summary.src} className="text-info" target="_blank">{details.summary.description}</a></u> : null;

    return (
      <div className={`pricing-card pricing-card-${type} ${className}`}>
        <div className="pricing">
          <span className="symbol">{currency.symbol}</span>
          <span className="price">{Numeral(price).format('0,0[.]00')}</span>
        </div>
        <div className="pricing-content">
          <div className="pricing-title">{title}</div>
          <ul className="pricing-items">
            {renderItems}
          </ul>
          <div className="pricing-description">{description}</div>
          <div className="pricing-subDescription">{subDescription}</div>
          {renderDetails}
        </div>
        <Button className={`btn btn-${type} btn-round`} onClick={onClick.bind(value)}>{actionTitle}</Button>
      </div>
    );
  }
}

PricingCard.defaultProps = {
  className: '',
  type: 'primary',
  onClick: () => {},
  actionTitle: 'Buy Now',
  currency: {
    symbol: '$',
    name: 'Australia Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'AUD',
    name_plural: 'Australia dollars'
  },
  price: 0,
  value: 'basic_mobile_pack',
  title: 'Basic Mobile Plan',
  data: [
    'Unlimitted standard calls',
    'Unlimitted standard SMS'
  ],
  description: '500MB data',
  details: null
};

export default PricingCard;