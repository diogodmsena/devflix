import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5%5%;
`;

export default function TemplateBase({ children }) {
  return(
    <>
      <Header />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
}