import React from 'react';
import PropTypes from 'prop-types';
import './winners-layout.scss';

// eslint-disable-next-line
import '/node_modules/uikit/dist/js/uikit.min.js';

class WinnersLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="winners-layout">
        {children}
      </div>
    );
  }
}

WinnersLayout.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default WinnersLayout;
