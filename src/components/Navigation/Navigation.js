import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

class Navigation extends React.Component {
  render() {
    const navItems = Object.entries(this.props.navLinks).map(([key, value]) => <Link to={value} key={key} className="u-color-black">{key}</Link>);
    return (
      <div className="uk-text-right">
        {navItems}
      </div>
    );
  }
}

Navigation.propTypes = {
  navLinks: PropTypes.shape({}).isRequired,
};

export default Navigation;
