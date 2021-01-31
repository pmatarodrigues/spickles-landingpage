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
                <S.Para>{t("ABOUT US 1")}</S.Para>
                <S.Para>{t("ABOUT US 2")}</S.Para>
                <S.Para>{t("ABOUT US 3")}</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Social")}</S.Title>
                <a href="https://www.facebook.com/spicklesapp">
                  {t("Facebook")}
                </a>
                <br></br>
                <a style={{ }} href="https://www.instagram.com/spickles.app">
                  {t("Instagram")}
                </a>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Title>{t("Get Spickles")}</S.Title>
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
                  href="https://facebook.com/spicklesapp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon src="facebook.svg" />
                </a>
                <a
                  href="https://instagram.com/spickles.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon src="instagram.svg" />
                </a>
              </S.FooterContainer>

              <S.Select>
                  <S.Language>{t("Language")}</S.Language>
                  <Select
                    defaultValue="en"
                    onChange={handleChange}
                    value={i18n.language}
                  >
                    <Option value="en">English</Option>
                    <Option value="es">Español</Option>
                    <Option value="pt">Português</Option>
                  </Select>
                </S.Select>
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
