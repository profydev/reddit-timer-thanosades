import React from 'react';
import HorizontalList from './HorizontalList';

export default function Nav() {
  return (
    <nav>
      <HorizontalList>
        <li><a href="javascript">Search</a></li>
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#about">About</a></li>
      </HorizontalList>
    </nav>
  );
}
