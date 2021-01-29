import styled from "styled-components";
import FreedomBg from "../../assets/freedom.jpg";

export const Main = styled.main`
  padding-top: 36px;
`;

export const MainSection = styled.section`
  &.main__product-overview {
    background: url(${FreedomBg});
    background-size: cover;
    background-origin: border-box;
    background-position: 60% 70%;
    width: 100%;
    height: 528px;
    padding: 10px;
    position: relative;
  }
  &.key-features {
    background: #ff1b68;
    margin-top: 80px;
    padding: 16px;
  }
`;

export const Article = styled.article`
  display: inline-block;
  margin: 8px;
  background: #d5ffdc;
  padding: 16px;
  text-align: center;
  width: 30%;
  vertical-align: middle;
  &.plan--highlighted {
    background-color: #19b84c;
    color: white;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
`;

export const MainH1 = styled.h1`
  &.section-title {
    color: #2ddf5c;
    text-align: center;

    &.plan-special {
      color: white;
    }
  }
  &.plan__annotation {
    background: white;
    color: #19b84c;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
  &.plan__title {
    color: #0e4f1f;
  }
  &.plan--highlighted .plan__title {
    color: white;
  }
  &.overview {
    color: white;
    font-family: "Anton", sans-serif;
    margin: 20px;
    position: absolute;
    bottom: 0;
  }
`;

export const MainH2 = styled.h2`
  &.plan__price {
    color: #858585;
  }
  &.plan--highlighted &.plan__price {
    color: #0e4f1f;
  }
`;

export const MainH3 = styled.h3``;

export const MainUl = styled.ul`
  &.plan__features {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  &.key-feature__list {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
  }
`;

export const MainLi = styled.li`
  &.plan__feature {
    margin: 8px 0;
  }
  &.key-feature {
    display: inline-block;
    width: 30%;
    margin: 5px 10px;
    vertical-align: top;
  }
`;

export const MainDiv = styled.div`
  &.key-feature__image {
    height: 128px;
    width: 128px;
    background: #ffcede;
    border: 2px solid #424242;
    border-radius: 50%;
    margin: auto;
  }
`;

export const MainP = styled.p``;

export const ButtonWrapper = styled.div``;

export const Button = styled.button`
  &.button {
    color: white;
    background: #0e4f1f;
    font: inherit;
    border: 1.5px solid #0e4f1f;
    border-radius: 8px;
    text-transform: uppercase;
    padding: 8px;
    font-weight: bold;
    cursor: pointer;
  }
  &.button:hover,
  &.button:active {
    color: #0e4f1f;
    background: white;
  }
  &.button:focus {
    outline: none;
  }
`;
