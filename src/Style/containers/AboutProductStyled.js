import styled from "styled-components";

export const StyledDiv = styled.div`

& .about__product{
  margin: 60px 0 60px;
  display:flex;
  }
  .product__counter{
    width: 117px;
    height: 42px;
    display: flex;
    background: #fcfcfc;
    justify-content: space-between;
    align-items: center;
    & button{
      background: none;
      outline: none;
      border:none;
      font-size: 20px;
      cursor: pointer;
      padding: 0 14px 0 15px;
    }
  }
  & .product__img{
    margin: 0 36px 0 0;
    width: 646px;
    height: 426px;
    background-color: #f9f9f9;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  & .product__items{
    padding: 32px 30px;
    width: 311.75px;
    height: 426.52px;
    box-shadow: 0px 0px 27.1091px rgba(0, 0, 0, 0.06);
    border-radius: 15px;
    .product__title{
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
      margin-bottom: 9px;
    }
    .product__star{
      color: var(--green);
    }
    .no__star{
      color: #ebebeb;
    }
    .product__inners{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 22px;
      .comment__text, .comment__number{
        font-size: 12px;
        color: #c6c6c6;
        font-weight: 400;
        line-height: 19px;
      }
      .product__text{
        font-size: 14px;
        color: #c6c6c6;
        font-weight: 500;
        line-height: 21px;
      }
      .product__cost{
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
      }
      .card__price-title{
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
      }
      .cerd__price{
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
        color: var(--green);
      }
      .to__basket-icon{
      }
      
    }
    
    
    
  }
  & .tab__list{
    display: flex;
    justify-content: space-between;
  }
  & .tab__title{
    
  }
  & .react-tabs__tab {
    font-weight: 500;
    font-size: 28px;
    line-height: 19px;
    color: var(--grey-three);
    border: none;
    padding: 0;
  }
  & .react-tabs__tab-list{
    border-bottom: none;
  }
  & .react-tabs__tab--selected {
    color: var(--green);
  }
  & .product__info-body{
      width: 646px;
  }
  
  .tab__body-title{
    font-weight: 500;
    font-size: 21px;
    line-height: 19px;
    margin: 0 0 22px 0;
  }
  .tab__text{
    font-size: 18px;
    font-weight: 19px;
    color: var(--grey-three);
  }
  .info__others{
    // margin: 30px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // height: 200px;
  }
  .info_others-items{
    display: flex;

  }
  .info__others-text, .info__others-number{
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: var(--grey-three);
  }
  .info__others-text{
    font-weight: 500;
  }
  & .comments{
    // margin: 37px 0 0 0;
    width: 646px;
    .comments__title{
      font-weight: var(--btn-font-weight);
      font-size: 17px;
      line-height: 20px;
      margin: 0 0 17px 0;
    }
    .comments__inners{
      display: flex;
      align-items: center;
    }
    .comment__card{
      width: 276px;
      height: 150px;
      background-color: #f2f2f2;
      border-radius: 11px;
      padding: 11px 16px 14px 17px;

    }
    .comment__card-inners{
      display: flex;
      align-items: flex-start;
    }
    .comment__user-avatar{
      width: 35px;
      height: 35px;
      border-radius: 50%;
      object-fit: cover;
    }
    .comment__user-info{
      margin: 0 8px 0 5px;
    }
    .comment__user-name{
      font-weight: 500;
      font-size: 11.1818px;
      line-height: 13px;
      color: #000;
    }
    .product__star{
      color: var(--green);
      font-size: 8px;
    }
    .comment__user-prof{
      font-size: 9px;
      line-height: 11px;
      text-decoration: underline;
      color: #2D9CDB;
    }
    .comment__text{
      font-size: 9px;
      line-height: 11px;
      color: #000;
    }
    .read__all{
      font-size: 8px;
      line-height: 9px;
      text-decoration: underline;
      color: var(--green);
    }
    .more__comments{
      color: var(--green);
      font-weight: 500;
      font-size: 11px;
    }
    .comment__card + .comment__card{
      margin: 0 20px 0 17px;
    }
    
  }
  .product__info{
    display: flex;
    justify-content: space-between;
    margin: 0 0 60px 0;
  }
  .about__advertise{
    width: 305px;
    height: 250px;
    padding: 27px 22px 38px 30px;
    box-shadow: 0px 0px 27px rgba(0, 0, 0, 0.06);
    border-radius: 18px;
    .about__advertise-title{
      font-size: 15px;
      font-weight: 400;
      color: #000;
    }
    .about__advertise-items{
      display: flex;
      align-items: center;
    }
    .about__advertise-items + .about__advertise-items{
      margin: 25px 0 0 0;

    }
    .pigWithCoin{
      width: 37px;
      height: 43px;
    }
    .about__ad-item{
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      margin-left: 15px;
    }
    .carIcon{
      width: 38px;
      height: 29px;
    }
    .about__ad-inner{
      margin: 9px 0 0 32px;
      font-size: 11px;
    }
    .about__range{
      display: flex;
      align-items: center;
    }
    .range{
      width: 186px;
      height: 3px;
      margin: 0 9px;
      background: var(--green);
      padding: 0;
    }
    .about__range-text{
      font-size: 8px;
    }
  }
  .comments__inners{
    margin: 17px 0 0 0;
  }

  .info__items.react-tabs__tab-panel--selected{
    margin: 40px 0 0 0;
  }
  .info__others.react-tabs__tab-panel--selected{
    margin: 30px 0 0 0;
    height: 200px;
  }
  .comments.react-tabs__tab-panel--selected{
    margin: 37px 0 0 0;
  }
`