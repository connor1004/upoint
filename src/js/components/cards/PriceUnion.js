import React from 'react';
import {
  Card, CardBody, CardHeader, CardText, Button
} from 'reactstrap';
import classnames from 'classnames';

const PriceCardUnion = (props) => {
  const {
    data, className, actionTitle, onClick, value, ...rest
  } = props;
  const {
    title,
    color,
    price,
    description,
    features
  } = data;

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
                <span className="value">
                  *
                </span>
              </div>
            )
          }
          {description && (
            <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
        {features && (
          <div className="price-card-features">
            {features.map((item, index) => (
              <div className="price-card-item" key={`${index}`}>
                <div className="main">
                  <div className="label font-size-lg">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        <Button color={color} className="btn-round" onClick={onClick.bind(value)} style={{ marginBottom: -24 }}>{actionTitle}</Button>
      </CardBody>
    </Card>
  );
};

PriceCardUnion.defaultProps = {
  data: {
    title: 'Union Saver',
    color: 'primary',
    price: 105.60,
    description: 'For the same bill (excl.GST)',
    features: [
      {
        label: 'A great offer for current and financial members of approved Trade Unions'
      },
      {
        label: 'Monthly billing available'
      }
    ]
  },
  className: '',
  onClick: () => {}
};

export default PriceCardUnion;
