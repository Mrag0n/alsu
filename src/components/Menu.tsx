import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  background: transparent;
  text-align: center;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.li`
  &:hover {
    opacity: 0.7;
  }
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #04c;
  }
`;

const Menu: React.FC = () => {
  return (
    <Nav>
      <MenuList>
        <MenuItem>
          <MenuLink href="/">Services</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/projects">Portfolio</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/about">About us</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/contacts">Contacts</MenuLink>
        </MenuItem>
      </MenuList>
    </Nav>
  );
};

export default Menu;
