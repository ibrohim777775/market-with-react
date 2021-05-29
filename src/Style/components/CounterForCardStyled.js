import styled from "styled-components";

export const CounterStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fcfcfc;
  border: 1px solid #EBEBEB;
  border-radius: 9px;
  width: ${props => props.width || '116px'};
  height: ${props => props.height || '42px'}42px;
  & .counter__title{
    font-size: 12px;
    color: #000;
  }
  & .counter__btn{
    font-size: 16px;

    border: none;
    outline: none;
    padding: 10px;
    background-color: inherit;
    cursor: pointer;
    &: focus{
      outline: none;
    }
  }
`;