import React from "react";
import {
  Main,
  MainSection,
  MainH1,
  MainDiv,
  MainUl,
  MainLi,
  MainP,
} from "./MainElements";
import PageArticle from "./PageArticle";

const PageMain = ({ modalOpen, setModalOpen, setShowBackdrop }) => {
  return (
    <React.Fragment>
      <Main className="main">
        <MainSection className="main__product-overview">
          <MainH1 className="overview">Get the freedom you deserve.</MainH1>
        </MainSection>
        <MainSection className="main__plan-section">
          <MainH1 className="section-title">Choose Your Plan</MainH1>
          <PageArticle
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setShowBackdrop={setShowBackdrop}
          />
        </MainSection>
        <MainSection className="key-features">
          <MainH1 className="section-title plan-special">
            Many Good Reasons to Stick Around
          </MainH1>
          <MainUl className="key-feature__list">
            <MainLi className="key-feature">
              <MainDiv className="key-feature__image"></MainDiv>
              <MainP className="key-feature__description">
                3,857,000 Trusting Customers
              </MainP>
            </MainLi>
            <MainLi className="key-feature">
              <MainDiv className="key-feature__image"></MainDiv>
              <MainP className="key-feature__description">
                99.999% Uptime Guarantee
              </MainP>
            </MainLi>
            <MainLi className="key-feature">
              <MainDiv className="key-feature__image"></MainDiv>
              <MainP className="key-feature__description">
                Lightning Fast CDN
              </MainP>
            </MainLi>
          </MainUl>
        </MainSection>
      </Main>
    </React.Fragment>
  );
};

export default PageMain;
