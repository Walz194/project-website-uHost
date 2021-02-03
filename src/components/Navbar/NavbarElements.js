import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: #2ddf5c;
  padding: 8px 16px;
`;

export const HeaderBrand = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const BrandLink = styled(Link)`
  font-weight: 700;
  font-size: 22px;
  width: 25px;
  height: 25px;
  vertical-align: middle;
  display: inline-block;
  text-decoration: none;
  color: #0e4f1f;
`;

export const HeaderNav = styled.nav`
  display: inline-block;
  width: calc(100% - 74px);
  text-align: right;
  vertical-align: middle;
`;
export const NavUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavLi = styled.li`
  display: inline-block;
  margin: 5px 10px;
`;

export const NavLinks = styled(Link)`
  text-decoration: none;
  color: #0e4f1f;
  font-weight: bold;
  padding: 3px 0;
  &:hover,
  &:active {
    color: white;
    border-bottom: 4px solid white;
  }
`;

export const CallToAction = styled(Link)`
  background: #ff1b68;
  color: white;
  border-radius: 8px;
  padding: 8px 16px;
  text-decoration: none;

  &:hover,
  &:active {
    color: #ff1b68;
    background: white;
    border: none;
  }
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  width: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
  vertical-align: middle;
  &:focus {
    outline: none;
  }
`;

export const Span = styled.span`
  width: 100%;
  height: 0.2rem;
  background: black;
  display: block;
  margin: 0.6rem 0;
`;
