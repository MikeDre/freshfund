import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
