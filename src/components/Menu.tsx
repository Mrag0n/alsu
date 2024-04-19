import React, { useEffect } from 'react';
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
          <Link href="/" passHref>
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/about" passHref>
            About
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/portfolio" passHref>
            Portfolio
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/posts" passHref>
            Posts
          </Link>
        </MenuItem>
      </MenuList>
    </Nav>
  );
};

export default Menu;
