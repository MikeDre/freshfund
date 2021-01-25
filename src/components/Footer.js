import React from 'react';
import SocialIcons from './SocialIcons/SocialIcons';

const footer = () => (
  <footer className="u-background-color-black-off uk-margin-large-top uk-padding-large">
    <div className="uk-container u-color-white">
      <div className="uk-grid" uk-grid>
        <div className="uk-width-2-3@m">
          [ Footer ]
        </div>
        <div className="uk-width-1-3@m">
          <SocialIcons
            darkMode={false}
            instagram="https://instagram.com/freshfund"
            twitter="https://twitter.com/freshfund"
            linkedin="https://linkedin.com/freshfund"
          />
        </div>
      </div>
    </div>
  </footer>
);

export default footer;
