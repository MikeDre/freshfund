import React from 'react';
import SocialIcons from './SocialIcons/SocialIcons';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

const navLinks = {
  'Our Winners': '/winners',
};

const header = () => (
  <div className="uk-margin-medium-top uk-margin-large-bottom">
    <div className="uk-container">
      <div className="uk-grid uk-grid-small uk-child-width-1-3" data-uk-grid>
        <div>
          <SocialIcons
            darkMode
            instagram="https://instagram.com/freshfund"
            twitter="https://twitter.com/freshfund"
            linkedin="https://linkedin.com/freshfund"
          />
        </div>
        <div>
          <Logo />
        </div>
        <div>
          <Navigation
            navLinks={navLinks}
          />
        </div>
      </div>
    </div>
  </div>
);

export default header;
