import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Menu from '@components/Menu';

const StyledHeader = styled.header`
  grid-column-gap: 273px;
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
  border-radius: 360px;
  justify-content: center;
  width: 95%;
  height: 80px;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  align-items: center;
  display: flex;
  position: fixed;
  top: 0;
`;

const Header: React.FC = () => (
  <StyledHeader>
    <Image width={40} height={40} src="/images/logo.svg" alt="logo" />
    <Menu />
  </StyledHeader>
);

export default Header;
