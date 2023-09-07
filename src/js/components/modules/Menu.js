import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MenuItem extends Component {
  isExternal() {
    const { to: url } = this.props;
    const link = url ? url.substring(0, 4) : '';
    return link === 'http';
  }

  render() {
    const {
      to, className, title, ...item
    } = this.props;
    return (
      <li>
        {
          this.isExternal() ? (
            <a href={to} className={className}>{title}</a>
          ) : (
            <NavLink {...item} to={to} className={className}>
              {title}
            </NavLink>
          )
        }
      </li>
    );
  }
}

MenuItem.defaultProps = {
  to: '/',
  activeClassName: 'active',
  className: '',
  title: ''
};

class Menu extends Component {
  render() {
    const { className, data } = this.props;
    const renderItems = data.map((item, index) => <MenuItem {...item} key={`${index}`} />);

    return (
      <ul className={className}>
        {renderItems}
      </ul>
    );
  }
}

Menu.defaultProps = {
  className: 'menu',
  data: []
};

export default Menu;
