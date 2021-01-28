import React from 'react';
import PropTypes from 'prop-types';

import './arrows.scss';
import CurlArrow from '../../images/curl-arrow.svg';

const ArrowCurl = (props) => (
  <div className="arrow-curl uk-visible@m">
    <div>
      <img src={CurlArrow} alt="Curly arrow pointing to video" />
    </div>
    <div className="uk-margin-top">
      <strong className="arrow-curl__caption">{props.caption}</strong>
    </div>
  </div>
);

ArrowCurl.propTypes = {
  caption: PropTypes.string.isRequired,
};

export default ArrowCurl;
