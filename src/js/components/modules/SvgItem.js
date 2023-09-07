import React from 'react';
import SvgIcon from './SvgIcon';

const SvgItem = (props) => {
  const {
    size, style, source, icon_color, title, content
  } = props;

  const styleMap = {
    width: size,
    height: size,
    ...(style || {})
  };

  return (
    <div className="d-flex mb-4 mb-md-6">
      <div className="mr-4">
        <SvgIcon source={source} className={icon_color} size={styleMap} />
      </div>
      <div>
        {
          title && (
            <span className="font-weight-bold">{title}</span>
          )
        }
        <span dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

SvgItem.defaultProps = {
  size: '',
  source: '',
  title: '',
  content: ''
};

export default SvgItem;
