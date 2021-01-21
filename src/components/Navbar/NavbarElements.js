import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
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
