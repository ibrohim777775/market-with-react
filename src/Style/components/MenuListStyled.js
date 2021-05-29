import styled from "styled-components";

export const StyledDiv = styled.div`
display: flex;
overflow: hidden;
// justify-content: space-between;
// flex-wrap: wrap;
padding: 25px 60px 16px 0;
position: relative;
  & a{
    font-size: 23px;
    line-height: 28px;
    text-transform: uppercase;
    color: #4F4F4F;
    cursor: pointer;
    padding-right: 15px;
    &:hover{
      color: var(--green);
      font-weight: 500;

    }
  }
  & .arrow__right{
    position: absolute;
    right: 0;
    top: 23px;
    cursor: pointer;
    // z-index: 3;
    font-size: 30px;
    color: #00AC4E;
    background: white;
  }
  .items__row{
    displayL flex;
    flew-wrap: wrap;
  }
`