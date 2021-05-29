import React, { Component } from "react";
import { BiUser } from "react-icons/bi";
import styled from "styled-components";
import {
  A,
  Content,
  StyledDiv,
  FooterBox,
  StyledFlex,
  StyledText,
  StyledLink,
} from "../Style/containers/Footer";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Content />
        <FooterBox>
          <div className="container">
            <StyledFlex padding={"34px 0"}>
              <StyledFlex direction={"column"}>
                <StyledFlex>
                  <StyledFlex margin={"0 60px 0 0"} direction={"column"}>
                    <StyledText>Бесплатный звонок по РФ</StyledText>
                    <StyledText weight={"500px"} size={"18px"} height={"39px"}>
                      +7 (831) 282-60-00
                    </StyledText>
                  </StyledFlex>

                  <StyledFlex direction={"column"}>
                    <StyledText>Для приема заказов</StyledText>
                    <StyledText weight={"500px"} size={"18px"} height={"39px"}>
                      +7 (904) 066-46-85
                    </StyledText>
                  </StyledFlex>
                </StyledFlex>
                <StyledText
                  size={"15px"}
                  family={"TT Hoves"}
                  margin={"15px 0 10px"}
                >
                  График работы по будням с 9:00 до 18:00
                </StyledText>
                <StyledText
                  size={"18px"}
                  height={"32px"}
                  as="a"
                  href="mailto: info@.ru"
                >
                  Email: info@.ru
                </StyledText>
                <StyledLink
                  as="a"
                  href="#"
                  size={"18px"}
                  weight={"500"}
                  height={"22px"}
                  margin={"10px 0"}
                >
                  Поддержка
                </StyledLink>
                <StyledFlex>
                  <StyledText as="a" href="#">
                    ©2020. Пиросмани
                  </StyledText>
                  <StyledText as="a" href="#" margin={"0 34px 0 32px"}>
                    Условия и соглашения
                  </StyledText>
                  <StyledText as="a" href="#">
                    Политика конфиденциальности
                  </StyledText>
                </StyledFlex>
              </StyledFlex>
              <StyledFlex>
                <StyledFlex direction={"column"}>
                  <StyledText
                    as="a"
                    href="#"
                    size={"15px"}
                    weight={"500"}
                    style={{ letterSpacing: "3px", textTransform: "uppercase" }}
                    margin={"0 0 25px 0"}
                  >
                    Мы в вконтакте {`>`}
                  </StyledText>
                  <StyledText
                    as="a"
                    href="#"
                    size={"15px"}
                    weight={"500"}
                    style={{ letterSpacing: "3px", textTransform: "uppercase" }}
                  >
                    Мы в instagram {`>`}
                  </StyledText>
                </StyledFlex>
                <StyledFlex align={"flex-start"}>
                  <StyledFlex margin={"4px 7px 0 117px"} size={"24px"}>
                    <BiUser className="icon" />
                  </StyledFlex>
                  <StyledText
                    onClick={() => this.props.showAuth()}
                    size={"15px"}
                    weight={"500"}
                    style={{ cursor: "pointer" }}
                  >
                    Войти / Регистрация
                  </StyledText>
                </StyledFlex>
              </StyledFlex>
            </StyledFlex>
          </div>
        </FooterBox>
      </div>
    );
  }
}

export default Footer;
