import styled from "styled-components";

export const StyledOrder = styled.div`
  margin: 40px 0 61px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & .products{

  }
  .basket__list{
    width: 508px;
    overflow: hidden;
    & .shopping__product{
      width: 508px;
      height: 87px;
      & .product__img img{
        width: 78px;
        height: 58px;
      }
      & .product__title{
        padding: 0 10px 0 25px;
        width: 140px;
        font-size: 16px;
        font-weight: 500;
      }
      & div{
        margin: 0 40px 0 0;
      }
    }
  }
  .ordering__label{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000;
    display: block;
  }
  .ordering__input{
    width: 451px;
    height: 64px;
    display: flex;
    align-items: center;
    padding:  0 25px 0 29px;
    margin: 0 0 17px 0;
    background: #fcfcfc;
    border-radius: 7px;
    border: 1px solid #ebebeb;
    outline: none;
  }
  .ordering__select{
    padding: 5px 10px 5px;
  }
  .add__comment{
    font-weight: 500;
    font-size: 17px;
    color: var(--green);
    cursor: pointer;
    line-height: 24px;
    margin: 0 0 35px 0;
  }
  .method__header{
    display:flex;
    & .method__title{
      font-weight: 500;
      font-size: 15px;
      line-height: 11px;
      color: var(--grey-three);
      padding: 10px 24px;
      cursor: pointer;
    }
    & .active{
      color: var(--white);
      border-radius: 10px;
    }
  }
  .method__body{
    width: 466px;
    max-width: 100%;
    height: 126px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 28.763px rgba(0, 0, 0, 0.06);
    border-radius: 9px;
    padding: 0 30px;
    .method__inners{
      flex: 2;
      .method__items{
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
      }
      & :first-child{
        margin-top: 0px;
      }
      .method__text{
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        color: #000;
      }
    }
    .total{
      flex: 2;
      text-align: right;
      .total__title{
        font-weight: 500;
        font-size: 15px;
        line-height: 23px;
      }
      .total__text{
        font-weight: 500;
        font-size: 19px;
        line-height: 24px;
      }
    }
  }

`