/* eslint-disable no-undef */
import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Button
} from 'reactstrap';

const Action = (props) => {
  const {
    to, title, ...rest
  } = props;

  return to ? (
    to.indexOf('http') === 0 ? (
      <Button tag={a} href={to} {...rest}>
        {title}
      </Button>
    ) : (
      <Button tag={Link} to={to} {...rest}>
        {title}
      </Button>
    )
  ) : (
    <Button tag={Link} to={to} {...rest}>
      {title}
    </Button>
  );
};

export default Action;
