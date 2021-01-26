import React from 'react';
import PropTypes from 'prop-types';
import { GetVimeoIDFromUrl } from '../../helpers';

import './video.scss';

class VideoWinner extends React.Component {
  render() {
    const vimeoID = GetVimeoIDFromUrl(this.props.vimeoUrl);
    return (
      <div className="video-winner">
        <iframe title="Video Hero" src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" width="100%" height="700" frameBorder="0" allowFullScreen uk-responsive />
      </div>
    );
  }
}

VideoWinner.defaultProps = {
  vimeoUrl: '480734452',
};

VideoWinner.propTypes = {
  vimeoUrl: PropTypes.string,
};

export default VideoWinner;
