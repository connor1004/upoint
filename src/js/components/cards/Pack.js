/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import SvgIcon from '../modules/SvgIcon';

class Pack extends Component {
  render() {
    const {
      className, src, source, scale, size, title, description, onClick
    } = this.props;
    const imgStyle = {
      transform: `scale(${scale})`
    };
    return (
      <div className={`pack-card ${className}`} onClick={onClick}>
        {
          src ? (
            <div className="pack-icon" style={imgStyle}>
              <img src={src} alt=""/>
            </div>
          ) : null
        }
        {
          source ? (
            <SvgIcon size={size} className="pack-icon" dangerouslySetInnerHTML={{ __html: source }} style={imgStyle} />
          ) : null
        }
        <div className="pack-content">
          {
            title ? (
              <div className="pack-title">{title}</div>
            ) : null
          }
          {
            description ? (
              <div className="pack-description">{description}</div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

Pack.defaultProps = {
  className: '',
  alt: '',
  source: '',
  src: '',
  scale: 1,
  size: '24px',
  title: 'Buy a SIM',
  description: '',
  onClick: () => {}
};

export default Pack;
