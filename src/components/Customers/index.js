import React from "react";
import {
  Main,
  Customer,
  CustomerImg,
  Testimonial,
  CustomerName,
  Testimonial,
  CustomerName,
  TestimonySubtitle,
  TestimonyText,
} from "./CustomerElements";

const PageCustomer = () => {
  return (
    <Main>
      <Customer>
        <CustomerImg />
        <Testimonial>
          <CustomerName>Mike Statham</CustomerName>
          <TestimonySubtitle></TestimonySubtitle>
          <TestimonyText></TestimonyText>
        </Testimonial>
      </Customer>
      <Customer>
        <Testimonial>
          <CustomerName>Mike Statham</CustomerName>
          <TestimonySubtitle></TestimonySubtitle>
          <TestimonyText></TestimonyText>
        </Testimonial>
        <CustomerImg />
      </Customer>
    </Main>
  );
};

export default PageCustomer;
