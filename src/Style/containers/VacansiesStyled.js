import styled from "styled-components";

export const StyledVacansies = styled.div`
  margin: 45px 0 60px 0;
  & .page__title{
    font-szie: 28px;
    font-weight: 500;
    margin: 0 0 45px 0;
  }
  .vacansies{
    margin: 0 0 30px 0;
  }
  .vacansies__title{
    font-size: 24px;
    font-weight: 400;
    margin: 0 0 25px 0;
  }
  .vacansies__text{
    color: var(--grey);
  }
  .vacansies__body{
    color: var(--grey-three);
  }
  .other__links{
    display: flex;
    & a{
      margin: 0 0 0 57px;
    }
  }
`