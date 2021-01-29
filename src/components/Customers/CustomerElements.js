import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  width: 80%;
  margin: auto;
`;
export const Customer = styled.div`
  &:first-of-type {
    margin-top: 96px;
  }
  margin: 48px 0;
`;
export const ImgWrapper = styled.div`
  width: 65%;
  display: inline-block;
  vertical-align: middle;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.7);
`;
export const CustomerImg = styled.img`
  width: 100%;
  display: block;
`;
export const Testimonial = styled.div`
  display: inline-block;
  width: 30%;
  padding: 14px;
  vertical-align: middle;
  font-size: 20px;
`;
export const CustomerName = styled.h1`
  color: #ff5454;
  margin: 3px;
`;
export const TestimonySubtitle = styled.h2`
  color: #ccc;
  font-size: 18px;
  margin: 0;
`;
export const TestimonyText = styled.p``;
export const PageLink = styled(Link)`
  text-decoration: none;
  font: inherit;
  color: inherit;
`;
