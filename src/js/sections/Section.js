import React from 'react';
import classnames from 'classnames';

const Section = (props) => {
  const {
    children, className, ...rest
  } = props;

  const classNameMap = {
    section: true,
    ...(className ? { [className]: true } : {})
  };

  return (
    <div {...rest} className={classnames(classNameMap)}>
      {children}
    </div>
  );
};

Section.defaultProps = {
  className: ''
};

export default Section;
