import React from 'react';
import { Link } from 'gatsby';
import LogoImg from '../../images/freshfund-logo.svg';

const Logo = () => (
  <div>
    <Link to="/">
      <img src={LogoImg} alt="Fresh Fund Logo" />
    </Link>
  </div>
);

export default Logo;
