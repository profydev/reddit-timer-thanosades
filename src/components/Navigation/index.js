import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Logo from './Logo';

const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
`;

export default function Navigation() {
  return (
    <>
      <Header>
        <Logo />
        <Nav />
      </Header>
    </>
  );
}
