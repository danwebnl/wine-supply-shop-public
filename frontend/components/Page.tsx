import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from './styles/Theme';
import Header from './Header';
import Meta from './Meta';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lora');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
  html {
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 15px;
    line-height: 2;
    background-color: ${theme.white};
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {
    cursor: pointer
  }
`;

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0px auto;
  padding: 2px;
  background: ${props => props.theme.white};
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
