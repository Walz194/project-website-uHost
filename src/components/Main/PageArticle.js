import React from "react";
import { ArticleOne, ArticleTwo, ArticleThree } from "./data";
import {
  Article,
  MainH1,
  MainH2,
  MainH3,
  MainUl,
  MainLi,
  Button,
  ButtonWrapper,
} from "./MainElements";

const PageArticle = () => {
  return (
    <React.Fragment>
      <Article className="plan">
        <MainH1 className="plan__title">{ArticleOne.planTitle}</MainH1>
        <MainH2 className="plan__price">{ArticleOne.planPrice}</MainH2>
        <MainH3>{ArticleOne.description}</MainH3>
        <MainUl className="plan__features">
          {ArticleOne.planFeatures.map((feature) => (
            <MainLi className="plan__feature">{feature}</MainLi>
          ))}
        </MainUl>
        <ButtonWrapper>
          <Button className="button">{ArticleOne.btnText}</Button>
        </ButtonWrapper>
      </Article>

      <Article className="plan plan--highlighted">
        <MainH1 className="plan__annotation">{ArticleTwo.annotation}</MainH1>
        <MainH1 className="plan__title">{ArticleTwo.planTitle}</MainH1>
        <MainH2 className="plan__price">{ArticleTwo.planPrice}</MainH2>
        <MainH3>{ArticleTwo.description}</MainH3>
        <MainUl className="plan__features">
          {ArticleTwo.planFeatures.map((feature) => (
            <MainLi className="plan__feature">{feature}</MainLi>
          ))}
        </MainUl>
        <ButtonWrapper>
          <Button className="button">{ArticleTwo.btnText}</Button>
        </ButtonWrapper>
      </Article>

      <Article className="plan">
        <MainH1 className="plan__title">{ArticleThree.planTitle}</MainH1>
        <MainH2 className="plan__price">{ArticleThree.planPrice}</MainH2>
        <MainH3>{ArticleThree.description}</MainH3>
        <MainUl className="plan__features">
          {ArticleThree.planFeatures.map((feature) => (
            <MainLi className="plan__feature">{feature}</MainLi>
          ))}
        </MainUl>
        <ButtonWrapper>
          <Button className="button">{ArticleThree.btnText}</Button>
        </ButtonWrapper>
      </Article>
    </React.Fragment>
  );
};

export default PageArticle;
