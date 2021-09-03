import React from 'react';
import styled from 'styled-components';

export default function Nav() {
  return (
    <nav>
      <List>
        <li>Search</li>
        <li>How it works</li>
        <li>About</li>
      </List>
    </nav>
  );
}

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;

  &>li:not(:last-child) {
    margin-right: 25px;
  }
`;
