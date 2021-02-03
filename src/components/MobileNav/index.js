import React from "react";
import { Nav, NavUl, NavLi, NavLink } from "./MobileNavElement";

const MobileNav = ({ isOpen }) => {
  return (
    <Nav isOpen={isOpen}>
      <NavUl>
        <NavLi>
          <NavLink to="/packages">Packages</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/customers">Customers</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/start-hosting" className="cta">
            Start Hosting
          </NavLink>
        </NavLi>
      </NavUl>
    </Nav>
  );
};

export default MobileNav;
