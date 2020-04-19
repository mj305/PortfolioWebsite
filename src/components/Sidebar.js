import React, { useState } from 'react';
import { Link } from 'gatsby';

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
        <h1>
          <Link to="/">&lt; MB / &gt;</Link>
        </h1>
      </header>
    </>
  );
}
