import React from "react";
import styled from "styled-components";

export const Content = styled.div`
  // min-height: 200px;
  width: 100%;
`;

export const FooterBox = styled.div`
  width: 100%;
  min-height: 301px;
  background-color: #00ac4e;
  box-sizing: border-box;
  color: #fff;
`;
export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  .icon {
    font-size: 24px;
  }
`;
export const StyledText = styled.p`
  font-weight: ${(props) => props.weight || "400"};
  font-size: ${(props) => props.size || "12px"};
  font-family: ${(props) => props.family || "TT Norms Pro"};
  line-height: ${(props) => props.height || "32px"};
  margin: ${(props) => props.margin || "0"};
  color: #fff;
`;
export const StyledLink = styled(StyledText)`
  text-decoration: underline;
`;
export const AuthIcon = styled.div``;
export const StyledDiv = styled.div`
  padding: 30px;
  width: 500px;
  height: 500px;
  background: aqua;
`;

export const A = styled.a`
text - decoration: none;
color: black

  `;
