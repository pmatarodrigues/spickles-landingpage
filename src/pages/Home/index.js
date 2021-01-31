import React from "react";

import ContactFrom from "../../components/ContactForm";
import ContentBlock from "../../components/ContentBlock";
import MiddleBlock from "../../components/MiddleBlock";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";

import Introduction from "../../content/introduction.json";
import FirstBlock from "../../content/firstBlock.json";
import SecondBlock from "../../content/secondBlock.json";
import ThirdBlock from "../../content/thirdBlock.json";
import FourthBlock from "../../content/fourthBlock.json";
import ContactBlock from "../../content/contactBlock.json";

import { useTranslation } from "react-i18next";

import * as S from "./styles";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={Introduction.title}
        content={Introduction.text}
        button={Introduction.button}
        icon="movie-friends.svg"
      />
      {/* <MiddleBlock
        title={FirstBlock.title}
        content={FirstBlock.text}
        button={FirstBlock.button}
      /> */}
      <ContentBlock
        type="left"
        title={SecondBlock.title}
        content={SecondBlock.text}
        section={SecondBlock.section}
        icon="spickles-phone.svg"
        />
      <ContentBlock
        type="right"
        title={ThirdBlock.title}
        content={ThirdBlock.text}
        icon="for-you.svg"
      />

      <div id="how">
      <h5 style={{ textAlign: 'center' }}>{t("How it works")}</h5>

      <S.BoxSection>
        <S.Box>
          <S.Title>{t("HowTitle1")}</S.Title>
          <S.Description>{t("HowText1")}</S.Description>
          <img style={{ }} src="/img/svg/company.svg" />
        </S.Box>

        <S.Box>
          <S.Title>{t("HowTitle2")}</S.Title>
          <S.Description>{t("HowText2")}</S.Description>
          <img style={{  }} src="/img/svg/session.svg" />
        </S.Box>

        <S.Box>
          <S.Title>{t("HowTitle3")}</S.Title>
          <S.Description>{t("HowText2")}</S.Description>
          <div style={{ display: "flex", justifyContent: 'space-evenly', marginTop: '20px' }}>
            <img style={{ width: '30px', filter: 'invert(28%) sepia(94%) saturate(6936%) hue-rotate(359deg) brightness(101%) contrast(108%)' }} src="/img/svg/close.svg" />
            <img style={{ width: '40px', filter: 'invert(84%) sepia(46%) saturate(3509%) hue-rotate(5deg) brightness(103%) contrast(106%)' }} src="/img/svg/eye.svg" />
            <img style={{ width: '38px', filter: 'invert(39%) sepia(95%) saturate(1165%) hue-rotate(88deg) brightness(99%) contrast(112%)' }} src="/img/svg/check.svg" />
          </div>
        </S.Box>
      </S.BoxSection>
      </div>
{/*
      <ContentBlock
        type="left"
        title={FourthBlock.title}
        content={FourthBlock.text}
        icon="waving.svg"
      /> */}
      {/* <ContactFrom title={ContactBlock.title} content={ContactBlock.text} /> */}
    </Container>
  );
};

export default Home;
