import React from 'react';

const Navigation = ({ setActivePage, activePage }) => {
  const handlePage = (e) => {
    if (e.target.innerText == 'About me') {
      setActivePage({ about: true });
    } else if (e.target.innerText == 'Portfolio') {
      setActivePage({ portfolio: true });
    } else if (e.target.innerText == 'Contact') {
      setActivePage({ contact: true });
    } else if (e.target.innerText == 'Resume') {
      setActivePage({ resume: true });
    }
  };
  return (
    <div>
      <ul>
        <li>
          <a
            className={`navItem ${activePage.about ? 'active' : ''}`}
            href="#About"
            onClick={(e) => handlePage(e)}
          >
            About me
          </a>
        </li>
        <p>/</p>
        <li>
          <a
            className={`navItem ${activePage.portfolio ? 'active' : ''}`}
            href="#Portfolio"
            onClick={(e) => handlePage(e)}
          >
            Portfolio
          </a>
        </li>
        <p>/</p>
        <li>
          <a
            className={`navItem ${activePage.contact ? 'active' : ''}`}
            href="#Contact"
            onClick={(e) => handlePage(e)}
          >
            Contact
          </a>
        </li>
        <p>/</p>
        <li>
          <a
            className={`navItem ${activePage.resume ? 'active' : ''}`}
            href="#Resumes"
            onClick={(e) => handlePage(e)}
          >
            Resume
          </a>
        </li>
      </ul>
      <img
        id="nav-stack"
        src="https://imgpile.com/images/RVqHWF.png"
        alt="Navigation Icon"
      ></img>
    </div>
  );
};

export default Navigation;
