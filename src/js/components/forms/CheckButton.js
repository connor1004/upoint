/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import {
  Button
} from 'reactstrap';
import classnames from 'classnames';
import { Icons } from '../../theme';
import SvgIcon from '../modules/SvgIcon';

let increment = 0;

class CheckButton extends Component {
  constructor(props) {
    super(props);
    const {
      id
    } = props;
    this.id = id || `custom_input_generated_${increment}`;
    increment++;
  }

  render() {
    const {
      checked, className, children, ...rest
    } = this.props;

    const classNameMap = {
      ...(className ? { [className]: true } : {}),
      'btn-checkbox': true,
      checked
    };

    return (
      <Button type="button" className={classnames(classNameMap)} {...rest}>
        <div className="btn-checkbox-inner">
          <SvgIcon size={20} source={checked ? Icons.check : null} />
          <div className="btn-checkbox-content">
            {children}
          </div>
        </div>
      </Button>
    );
  }
}

CheckButton.defaultProps = {
  checked: false
};

export default CheckButton;
