/**
 * @author Olawale
 * @email olawale.akinodanye@gmail.com
 * @create date 2021-01-29 03:29:38
 * @modify date 2021-02-03 16:40:46
 * @desc [description]
 */
import React from "react";
import {
  Main,
  Customer,
  CustomerName,
  PageLink,
  CustomerImg,
  Testimonial,
  TestimonySubtitle,
  TestimonyText,
  ImgWrapper,
} from "./CustomerElements";
import img1 from "../../assets/customer-1.jpg";
import img2 from "../../assets/customer-2.jpg";

const PageCustomer = () => {
  return (
    <Main>
      {/* Customer 1 */}
      <Customer>
        <ImgWrapper>
          <CustomerImg src={img1} />
        </ImgWrapper>
        <Testimonial>
          <CustomerName>Mike Statham</CustomerName>
          <TestimonySubtitle>
            Founder of <PageLink to="#">tech-analysis.com</PageLink>
          </TestimonySubtitle>
          <TestimonyText>
            uHost helped me realize my project with a highly constrained budget
            in like no time.
          </TestimonyText>
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
        <ImgWrapper>
          <CustomerImg src={img2} />
        </ImgWrapper>
      </Customer>
    </Main>
  );
};

export default PageCustomer;
