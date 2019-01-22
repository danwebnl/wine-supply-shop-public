import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

import Nav from './Nav';
import Cart from './Cart';
import Search from './Search';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-family: 'Lora', serif;
  position: relative;
  z-index: 2;
  display: inline-block;
  a {
    background-color: ${props => props.theme.red};
    color: ${props => props.theme.white};
    border-radius: 7px;
    text-decoration: none;
    padding: 7px 15px 7px 15px;
    margin-left: 20px;
  }
  @media (max-width: ${props => props.theme.breakpointOne}) {
    margin: 0;
    text-align: center;
    display: block;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/products">
          <a>Wine Supply Shop</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <Search />
    </div>
    <Cart />
  </StyledHeader>
);

export default Header;
