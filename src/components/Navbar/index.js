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
  LogoImg,
} from "./NavbarElements";
import Logo from "../../assets/uhost-icon.png";

const Navbar = () => {
  return (
    <React.Fragment>
      <Header>
        <HeaderBrand>
          <BrandLink to="/">
            <LogoImg src={Logo} />
          </BrandLink>
        </HeaderBrand>
        <HeaderNav>
          <NavUl>
            <NavLi>
              <NavLinks to="/packages">Packages</NavLinks>
            </NavLi>
            <NavLi>
              <NavLinks to="customers">Customers</NavLinks>
            </NavLi>
            <NavLi>
              <CallToAction to="start-action">Start Hosting</CallToAction>
            </NavLi>
          </NavUl>
        </HeaderNav>
      </Header>
    </React.Fragment>
  );
};

export default Navbar;
