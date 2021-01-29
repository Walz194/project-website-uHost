/**
 * @author Olawale
 * @email olawale.akinodanye@gmail.com
 * @create date 2021-01-29 03:29:38
 * @modify date 2021-01-29 11:42:59
 * @desc [description]
 */
import React from "react";
import {
  Main,
  Customer,
  CustomerImg,
  Testimonial,
  TestimonySubtitle,
  TestimonyText,
} from "./CustomerElements";
import img1 from "../../assets/customer-1.jpg";
import img2 from "../../assets/customer-1.jpg";

const PageCustomer = () => {
  return (
    <Main>
      {/* Customer 1 */}
      <Customer>
        <CustomerImg src={img1} />
        <Testimonial>
          <CustomerName>Mike Statham</CustomerName>
          <TestimonySubtitle></TestimonySubtitle>
          <TestimonyText></TestimonyText>
        </Testimonial>
      </Customer>
      {/* Customer 2 */}
      <Customer>
        <Testimonial>
          <CustomerName>John Mellow</CustomerName>
          <TestimonySubtitle>
            Hosts his private videos on uHost.
          </TestimonySubtitle>
          <TestimonyText>
            I worked as a blogger and always looked for an integrated hosting
            and file storage solution. I found it in uHost!
          </TestimonyText>
        </Testimonial>
        <CustomerImg src={img2} />
      </Customer>
    </Main>
  );
};

export default PageCustomer;
