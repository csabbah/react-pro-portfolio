import React from 'react';

const Header = ({ setActivePage }) => {
  return (
    <h1 onClick={() => setActivePage({ about: true })} id="header-logo">
      Carlos Sabbah
    </h1>
  );
};

export default Header;
