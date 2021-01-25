import React from 'react';
import PropTypes from 'prop-types';

import InstagramIcon from '../../images/Instagram.svg';
import TwitterIcon from '../../images/Twitter.svg';
import LinkedinIcon from '../../images/Linkedin.svg';

import './social-icons.scss';

const SocialIcons = ({
  instagram, twitter, linkedin, darkMode,
}) => (
  <div>
    <div className={`social-icons social-icons__instagram ${darkMode ? 'social-icons--dark' : 'social-icons--light'}`}>
      <a href={instagram} rel="noopenner noreferrer" target="_blank">
        <img src={InstagramIcon} alt="Instagram Icon" />
      </a>
    </div>
    <div className={`social-icons social-icons__twitter ${darkMode ? 'social-icons--dark' : 'social-icons--light'}`}>
      <a href={twitter} rel="noopenner noreferrer" target="_blank">
        <img src={TwitterIcon} alt="Twitter Icon" />
      </a>
    </div>
    <div className={`social-icons social-icons__linkedin ${darkMode ? 'social-icons--dark' : 'social-icons--light'}`}>
      <a href={linkedin} rel="noopenner noreferrer" target="_blank">
        <img src={LinkedinIcon} alt="Linkedin Icon" />
      </a>
    </div>
  </div>
);

SocialIcons.defaultProps = {
  instagram: '',
  twitter: '',
  linkedin: '',
  darkMode: true,
};

SocialIcons.propTypes = {
  instagram: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
  darkMode: PropTypes.bool,
};

export default SocialIcons;
