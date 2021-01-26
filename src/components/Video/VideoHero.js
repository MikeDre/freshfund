import React from 'react';
import PropTypes from 'prop-types';

import './video.scss';
import './wistia.scss';

class VideoHero extends React.Component {
  render() {
    return (
      <div className="video-hero">
        <div className="wistia_responsive_padding">
          <div className="wistia_responsive_wrapper">
            <iframe src={`https://fast.wistia.net/embed/iframe/${this.props.wistiaID}?videoFoam=true`} title="Fresh Fund Compilation - (with captions) Video" allow="autoplay; fullscreen" allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullScreen msallowfullscreen width="100%" height="100%" />
          </div>
        </div>
      </div>
    );
  }
}

VideoHero.defaultProps = {
  wistiaID: 'mncpoovoet',
};

VideoHero.propTypes = {
  wistiaID: PropTypes.string,
};

export default VideoHero;
