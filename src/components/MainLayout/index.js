import React, { Fragment } from 'react';
import Header from '../Header';
import { Container } from 'react-materialize';
 
const MainLayout = (props) => (
  <Fragment>
    <Header />
    <Container>
      { props.children }
    </Container>
  </Fragment>
);
 
export default MainLayout;