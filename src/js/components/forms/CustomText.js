/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import {
  Input
} from 'reactstrap';
import classnames from 'classnames';


class CustomText extends Component {
  render() {
    const {
      label, className, ...rest
    } = this.props;

    const classNameMap = {
      ...(className ? { [className]: true } : {}),
      'custom-text': true
    };

    return (
      <div className={classnames(classNameMap)}>
        <Input className="custom-input" {...rest} />
        <span className="custom-label">{label}</span>
      </div>
    );
  }
}

export default CustomText;
