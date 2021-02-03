import React from "react";
import {
  Footer,
  Nav,
  FooterUl,
  FooterLi,
  FooterLink,
} from "./FooterElements.js";

const PageFooter = () => {
  return (
    <React.Fragment>
      <Footer>
        <Nav>
          <FooterUl>
            <FooterLi>
              <FooterLink to="#">Support</FooterLink>
            </FooterLi>
            <FooterLi>
              <FooterLink to="#">Terms of Use</FooterLink>
            </FooterLi>
          </FooterUl>
        </Nav>
      </Footer>
    </React.Fragment>
  );
};

export default PageFooter;
