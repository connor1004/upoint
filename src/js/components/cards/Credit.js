import React from 'react';
import {
  Card
} from 'reactstrap';
import classnames from 'classnames';

export const CardCredit = (props) => {
  const {
    className, background, style, light, action, children, ...rest
  } = props;

  const newStyle = {
    ...(style || {}),
    backgroundImage: `url(${background})`
  };

  const classNameMap = {
    'credit-card': true,
    'credit-card-light': light,
    ...(className ? { [className]: true } : {})
  };

  return (
    <Card className={classnames(classNameMap)} style={newStyle} {...rest}>
      {children}
    </Card>
  );
};

CardCredit.defaultProps = {
  background: null,
  light: false
};

export default CardCredit;
