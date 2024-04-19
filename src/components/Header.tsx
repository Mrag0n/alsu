import React from 'react';
import styled from 'styled-components';
import Menu from '@components/Menu';

const StyledHeader = styled.header`
  background-color: #333;
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const Header: React.FC = () => (
  <StyledHeader>
    <Title>Design Agency</Title>
    <Menu />
  </StyledHeader>
);

export default Header;
