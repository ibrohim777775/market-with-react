import styled from "styled-components";

export const ShoppingCartStyled = styled.main`
  margin: 40px 0 60px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .shopping__inners{
  }
  
  .shopping__nav-items{
    width: 345px;
    height: 420px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 50px 65px 41px 32px;
    & .shopping__nav-title{
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
      margin: 0 0 39px 0;
    }
    .shopping__nav-inners{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 35px 0;
      .shopping__nav-text, .shopping__nav-price{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
      .promo{
        color: var(--green);
      }
    }
    .shopping__nav-all{
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      margin: 10px 0 6px;
    }
    .shopping__count{
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
      margin: 0 0 30px 0;
    }
  }
  .about__advertise{
    width: 609px;
    height: 344px;
    padding: 37px 22px 38px 41px;
    box-shadow: 0px 0px 27px rgba(0, 0, 0, 0.06);
    border-radius: 18px;
    .about__advertise-title{
      font-size: 20px;
      font-weight: 400;
      color: #000;
      margin-bottom: 25px;
    }
    .about__advertise-items{
      display: flex;
      align-items: center;
    }
    .about__advertise-items + .about__advertise-items{
      margin: 40px 0 0 0;

    }
    .pigWithCoin{
      width: 44px;
      height: 51px;
    }
    .about__ad-item{
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      margin-left: 15px;
    }
    .about__ad-text{
      font-size: 20px;
      line-height: 24px;
    }
    .carIcon{
      width: 45px;
      height: 45px;
    }
    .about__ad-inner{
      margin: 20px 0 0px 32px;
      font-size: 11px;
    }
    .about__range{
      display: flex;
      align-items: center;
    }
    .range{
      width: 453px;
      height: 4px;
      margin: 0 9px;
      background: var(--green);
      padding: 0;
    }
    .about__range-text{
      font-size: 8px;
    }
  }



`;
