import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  background-color: black;
  color: white;
  padding: 32px;
  margin-top: 48px;
`;

export const Nav = styled.nav``;

export const FooterUl = styled.ul`
  margin: 0;
  padding: 0;
  text-align: center;
  list-style-type: none;
`;

export const FooterLi = styled.li`
  display: inline-block;
  margin: 0 16px;
`;

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover,
  &:active {
    color: #ccc;
  }
`;
