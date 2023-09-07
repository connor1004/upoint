import React from 'react';
import classnames from 'classnames';

const SvgIcon = (props) => {
  const {
    className, size, style, source, ...rest
  } = props;

  const classNameMap = {
    'icon-svg': true,
    ...(className ? { [className]: true } : {})
  };

  const styleMap = {
    width: size,
    height: size,
    ...(style || {})
  };

  return (
    <span
      className={classnames(classNameMap)}
      dangerouslySetInnerHTML={{ __html: source }}
      {...rest}
      style={styleMap}
    />
  );
};

SvgIcon.defaultProps = {
  size: '24px'
};

export default SvgIcon;
