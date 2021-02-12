import React from 'react';
import SocialIcons from './SocialIcons/SocialIcons';
import CourierMailchimpLogo from '../images/courier-mailchimp.svg';

const currentYear = new Date().getFullYear();

const footer = () => (
  <footer className="u-background-color-black uk-padding-large">
    <div className="uk-container u-color-white">
      <div className="uk-grid" data-uk-grid>
        <div className="uk-width-2-3@m">
          <a href="https://couriermedia.co/" target="_blank" rel="noopener noreferrer">
            <img src={CourierMailchimpLogo} alt="Courier and Mailchimp Logo" width="270" />
          </a>
          <div className="uk-margin-large-top">
            <small className="footer__text u-color-white">
              &copy; 2001 -
              {' '}
              {currentYear}
              {' '}
              ALL RIGHTS RESERVED
            </small>
          </div>
        </div>
        <div className="uk-width-1-3@m uk-flex uk-flex-right">
          <SocialIcons
            darkMode={false}
            instagram="https://instagram.com/couriermedia"
            twitter="https://twitter.com/couriermedia"
            linkedin="https://linkedin.com/couriermedia"
          />
        </div>
      </div>
    </div>
  </footer>
);

export default footer;
