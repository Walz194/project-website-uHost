import React from "react";
import {
  Header,
  HeaderBrand,
  BrandLink,
  HeaderNav,
  NavUl,
  NavLi,
  NavLinks,
  CallToAction,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <React.Fragment>
      <Header>
        <HeaderBrand>
          <BrandLink>uHost</BrandLink>
        </HeaderBrand>
        <HeaderNav>
          <NavUl>
            <NavLi>
              <NavLinks>Packages</NavLinks>
            </NavLi>
            <NavLi>
              <NavLinks>Customers</NavLinks>
            </NavLi>
            <NavLi>
              <CallToAction>Start Hosting</CallToAction>
            </NavLi>
          </NavUl>
        </HeaderNav>
      </Header>
    </React.Fragment>
  );
};

export default Navbar;
