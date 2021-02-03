import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 100vh;
  background: white;
  position: fixed;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  top: 0;
  left: 0;
  z-index: 200;
  width: 80%;
`;

export const NavUl = styled.ul`
  width: 90%;
  height: 100%;
  list-style: none;
  margin: 10% auto;
  padding: 0;
  text-align: center;
`;

export const NavLi = styled.li`
  margin: 1rem 0;
`;

export const NavLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #0e4f1f;
  font-weight: bold;
  padding: 0.2rem 0;
  &.cta {
    color: white;
    background: #ff1b68;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    &:hover,
    &:active {
      color: #ff1b68;
      background: white;
      border: none;
    }
  }
`;
