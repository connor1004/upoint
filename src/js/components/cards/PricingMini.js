import React, { Component } from 'react';
import Numeral from 'numeral';

class PricingCardMini extends Component {
  render() {
    const {
      className,
      type, title, period, currency, price, priceDetails, resource, description
    } = this.props;

    const renderPricingDetails = priceDetails.map((item, index) => (
      <div key={`${index}`} dangerouslySetInnerHTML={{ __html: item }} />
    ));

    return (
      <div className={`pricing-card-mini pricing-card-mini-${type} ${className}`}>
        <div className="pricing-body">
          <div className="pricing-main">
            <div className="pricing">
              <span className="symbol">{currency.symbol}</span>
              <span className="price">{Numeral(price).format('0,0[.]00')}</span>
              <div className="pricing-period">{period}</div>
            </div>
            <div className="pricing-details">
              <h5 className={`font-weight-extrabold text-${type}`}>{title}</h5>
              {renderPricingDetails}
              <div className="pricing-content">
                <div className="pricing-resource-amount pr-1">{resource.amount}</div>
                <div className="pricing-resource-unit">{resource.unit}</div>
              </div>
              <div className="pricing-resource-description">{description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PricingCardMini.defaultProps = {
  className: '',
  type: 'primary',
  title: 'Mobile Plans',
  currency: {
    symbol: '$',
    name: 'US Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'USD',
    name_plural: 'US dollars'
  }
};

export default PricingCardMini;
