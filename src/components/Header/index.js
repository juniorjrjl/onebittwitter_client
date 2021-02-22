import React from "react";
import { Navbar, NavItem, Row, Icon } from 'react-materialize';
 
import styled from 'styled-components';
import logo from '../../images/logo.png';

const NavbarBlue = styled(Navbar)`
  background-color: #75d3f4;`
;
 
const Logo = styled.img`
  margin-top: 15px;
  width: 15%;`
;
 
const IconUser = styled(Icon)`
  font-size: 40px !important;`
;

const Header = () => (
  <Row>
    <NavbarBlue brand={<Logo src={logo} alt="OneBitTwitter" />} alignLinks="right">
      <NavItem href='/logout'>
        Logout
      </NavItem>
      <NavItem href='/user/x/edit'>
          <IconUser>account_circle</IconUser>
      </NavItem>
    </NavbarBlue>
  </Row>
);
 
export default Header;