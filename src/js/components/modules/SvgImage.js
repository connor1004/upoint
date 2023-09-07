import React from 'react';
import classnames from 'classnames';

const SvgImage = (props) => {
  const {
    className, size, style, width, height, source, ...rest
  } = props;

  const classNameMap = {
    'image-svg': true,
    ...(className ? { [className] : true } : {})
  };

  const styleMap = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...(style ? style : {})
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

SvgImage.defaultProps = {
};

export default SvgImage;
