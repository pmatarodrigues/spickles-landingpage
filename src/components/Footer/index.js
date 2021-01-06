import React, { Fragment } from "react";
import { Row, Col, Select } from "antd";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";

import Container from "../../common/Container";
import SvgIcon from "../../common/SvgIcon";

import * as S from "./styles";

const Footer = () => {
  const { Option } = Select;
  const { t } = useTranslation();
  const handleChange = (event) => {
    i18n.changeLanguage(event);
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer id="footer">
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("ABOUT US")}</S.Language>
                <S.Para>Aqui uma frase qualquer</S.Para>
                <S.Para>Aqui outra</S.Para>
                <S.Para>Frase também</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Company")}</S.Title>
                <S.Large left="true" to="/">
                  {t("Facebook")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Instagram")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Title>{t("GET SPICKLES")}</S.Title>
                <S.Large left="true" to="/">
                  {t("Android")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("iOS")}
                </S.Large>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <img width={100} src="/img/logo.png" />
                  {/* <SvgIcon src="logo.svg" /> */}
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <a
                  href="https://instagram.com/spicklesapp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon src="instagram.svg" />
                </a>
                <a
                  href="https://facebook.com/spicklesapp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon src="instagram.svg" />
                </a>
              </S.FooterContainer>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={12} md={12} sm={12} xs={24}>
                <S.CSite>
                  Copyright - Spickles {new Date().getFullYear()}
                </S.CSite>
              </Col>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default Footer;
