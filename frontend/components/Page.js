import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import Footer from '../components/Footer';

const theme = {
  red: "#FF0000",
  blue: `#006`,
  black: "#0e0e0e",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "100%",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

const StyledPage = styled.div`
  background: ${theme.black};
  color: white;
  .bg-ajk-primary {
    background-color: #000066 !important;
  }

  footer {
    background: #f3f3f3;
  }

  .social-icons {
    margin-top: 30px;
    ul {
      border: #0e0e0e 5px solid;
      padding: 0;
      list-style: none;
    }
    li {
      margin: 10px 10px 3px;
    }
    svg {
      height: 50px;
    }
    .social-email {
      height: 60px;
      position: relative;
      top: -4px;
    }
    .social-github {
      width: 50px;
    }
  }

  .legal-text {
    color: black;
    font-size: 1rem;
  }
  .single-post,
  .category {
    footer {
      margin-top: 20px;
      background-color: #0e0e0e;
      border-top: 5px solid #f7f7f7;
      .social-icons ul {
        border-color: #f7f7f7;
        svg path {
          fill: #f7f7f7;
        }
      }
      p {
        color: #f7f7f7;
      }
    }
  }
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
  margin: 0 auto;
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
