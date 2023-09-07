import React from 'react';
import {
  Link as RouterLink
} from 'react-router-dom';

const Link = (props) => {
  const {
    to, children, ...rest
  } = props;
  return (to.indexOf('http') === 0) ? (
    <a href={to} {...rest}>
      {children}
    </a>
  ) : (
    <RouterLink to={to} {...rest}>
      {children}
    </RouterLink>
  );
};

Link.defaultProps = {
  to: ''
};

export default Link;
