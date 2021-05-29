import styled from "styled-components";

export const StyledDiv = styled.div`
  .shopping__items {
    margin: 13px 0 0 0;

  }
  & .shopping__product{
    border-top: 1px solid #ebebeb;
    border-collapse: collapse;
    width: 609px;
    height: 124px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    .product__img{
      & img{
        width: 111xpx;
        height: 82px;
        object-fit: cover;
      }
    }
    .product__title{
      font-size: 18px;
      line-height: 21px;
      font-weight: 400;
      padding: 0 10px 0 38px;
      overflow: hidden;
      width: 193px;
    }
    .product__counter{
      width: 125px;
      height: 47px;
      margin: 0 63px 0 0;
    }
    .product__price{
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
    }
  }
  .product__remove-from{
    cursor: pointer;
  }


`

export const Btn = styled.button`
  background-color: inherit;
  border: none;
  color: var(--green);
  font-size: 24px;
  margin: 0 15px 0 0;
  outline: none;
`