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

import * as S from "./styles";

const Home = () => {
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
      <h5 style={{ textAlign: 'center' }}>How it works</h5>

      <S.BoxSection>
        <S.Box>
          <S.Title>Company</S.Title>
          <S.Description>Gather some friends or family</S.Description>
          <img style={{ }} src="/img/svg/company.svg" />
        </S.Box>

        <S.Box>
          <S.Title>Join your group</S.Title>
          <S.Description>Create a session and invite all of your friends easily using QR Code or room code</S.Description>
          <img style={{  }} src="/img/svg/session.svg" />
        </S.Box>

        <S.Box>
          <S.Title>Make a decision</S.Title>
          <S.Description>Every person in the room will choose from a selection of movies. Swipe right or left, if you want to watch a movie or not, respectively.</S.Description>
          <div style={{ display: "flex", justifyContent: 'space-evenly', marginTop: '20px' }}>
            <img style={{ width: '30px', filter: 'invert(28%) sepia(94%) saturate(6936%) hue-rotate(359deg) brightness(101%) contrast(108%)' }} src="/img/svg/close.svg" />
            <img style={{ width: '30px', filter: 'invert(84%) sepia(46%) saturate(3509%) hue-rotate(5deg) brightness(103%) contrast(106%)' }} src="/img/svg/eye.svg" />
            <img style={{ width: '30px', filter: 'invert(39%) sepia(95%) saturate(1165%) hue-rotate(88deg) brightness(99%) contrast(112%)' }} src="/img/svg/check.svg" />
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
