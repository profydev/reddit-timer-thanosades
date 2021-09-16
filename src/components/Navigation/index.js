import React from 'react';
import styled from 'styled-components';
import LogoComponent from './LogoComponent';
import Nav from './Nav';

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
        <LogoComponent />
        <Nav />
      </Header>
    </>
  );
}
