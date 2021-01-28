import React from 'react';
import SocialIcons from './SocialIcons/SocialIcons';
import CourierMailchimpLogo from '../images/courier-mailchimp.svg';

const footer = () => (
  <footer className="u-background-color-black uk-padding-large">
    <div className="uk-container u-color-white">
      <div className="uk-grid" data-uk-grid>
        <div className="uk-width-2-3@m">
          <img src={CourierMailchimpLogo} alt="Courier and Mailchimp Logo" width="270" />
          <div className="uk-margin-large-top">
            <small className="footer__text u-color-white">
              &copy; 2001 - 2021 ALL RIGHTS RESERVED
            </small>
          </div>
        </div>
        <div className="uk-width-1-3@m uk-flex uk-flex-right">
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
