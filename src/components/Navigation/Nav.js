import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const HorizontalList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;

  &>li:not(:last-child) {
    padding-right: 25px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function Nav() {
  return (
    <nav>
      <HorizontalList>
        <li><Link to="/search">Search</Link></li>
        <li><HashLink to="#how-it-works">How it works</HashLink></li>
        <li><HashLink href="#about">About</HashLink></li>
      </HorizontalList>
    </nav>
  );
}
