import React, { Fragment } from 'react';
import { Container } from 'react-materialize';
import HeaderContainer from '../../containers/HeaderContainer';
 
const MainLayout = (props) => (
  <Fragment>
    <HeaderContainer />
    <Container>
      { props.children }
    </Container>
  </Fragment>
);
 
export default MainLayout;