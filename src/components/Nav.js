import React from 'react';
import { Link } from 'gatsby';

import MariaBecklesWebDevelopmentResume from '../assets/images/MariaBecklesWebDevelopmentResume.pdf'

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/Generic"
            >
              About Me
            </Link>
          </li>

          <li>
            <a href={MariaBecklesWebDevelopmentResume} target="blank">
              Resume
            </a>
          </li>
        </ul>
        <a
          className="close"
          onClick={e => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#menu"
        >
          {''}
        </a>
      </div>
    </nav>
  );
}
