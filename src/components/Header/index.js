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

const Header = (props) => (
	<Row>
		<NavbarBlue href="/timeline" brand={<Logo src={logo} alt="OneBitTwitter"/>} alignLinks="right">
			<NavItem onClick={() => props.logOut()} >
				Logout
			</NavItem>
			<NavItem href={`/user/${props.id}/edit`}>
				<IconUser>account_circle</IconUser>
			</NavItem>
		</NavbarBlue>
	</Row>
);

export default Header;