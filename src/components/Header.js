import React from 'react';
import SocialIcons from './SocialIcons/SocialIcons';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

const header = () => (
  <div className="uk-margin-top uk-margin-large-bottom">
    <div className="uk-container">
      <div className="uk-grid uk-child-width-1-3" uk-grid>
        <div>
          <SocialIcons
            instagram="https://instagram.com/freshfund"
            twitter="https://twitter.com/freshfund"
            linkedin="https://linkedin.com/freshfund"
          />
        </div>
        <div>
          <Logo />
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </div>
  </div>
);

export default header;
