import React from 'react';

import logo from '../assets/logo.svg';

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">React.js Sample Project</h1>

    <p className="lead">
      All your personal data in a beautiful, intuitive home
      {' '}
      <span role="img" aria-label="rocket">🚀</span>
    </p>
  </div>
);

export default Hero;
