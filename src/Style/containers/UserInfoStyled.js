import styled from 'styled-components';

export const StyledUserInfo = styled.div`
  margin: 60px 0 60px 0;
  & .page__header{
    display: flex;
    margin: 0 0 45px 0;
    .page__header-items{
      display: flex;
      flex-direction: column;
      align-items: center;
      // justify-content: space-between;
      width: 139px;
      height: 109px;
      padding: 16px 0 13px 0;
      border-radius: 15px;
      cursor: pointer;
      margin: 0 85px 0 0;
      .header__icon-display{
        width: 41px;
        height: 37px;
        object-fit: cover;
        margin: 0 0 21px 0;
      }
      .header__title{
        font-weight: 500;
        font-size: 14.2907px;
        line-height: 21px;
      }
      .header__icon-notes{
        width: 38px;
        height: 41px;
        object-fit: cover;
        margin: 0 0 19px 0;
      }
    }
  }
  & .user{
    justify-content: space-between;
  }
  & input{
    background: #fcfcfc;
    border-radius: 8px;
    border: 1.61275px solid #EBEBEB;
    outline: none;
    padding: 0 15px 0 22px;
    align-items: center;
  }
  & .user__inners{
    width: 482px;
    margin: 0 63px 0 0;
    max-width: 100%;
    & input{
      height: 51px;
      font-size: 16px;
      line-height: 34px;
      margin: 11px 0 19px 0;
    }
    .user__inner-title{
      font-weight: 500;
      font-size: 28px;
      line-height: 25px;
      color: #000;
    }
    .user__photo{
      display: flex;
      align-items: center;
      margin: 30px 0 45px 0;
      .no__photo{
        width: 75px;
        height: 75px;
        border-radius: 12px;
        background: var(--green);
        margin: 0 18px 0 0;
      }
      .add__photo{
        color: var(--green);
        text-decoration: underline;
        font-weight: 500;
        font-size: 18px;
        line-height: 31px;
        cursor: pointer;
      }
    }
    .user__info{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      & :first-child{
        & input{
          width: 179px;
        }
      }
      & input{
        width: 259px;
      }
      
    }
    .form__group{
      // display: flex;
      .form__label{
        display: block;
        font-size: 19px;
        line-height: 34px;
      }
      .email{
        width: 100%;
      }
    }
  }
  .other__info{
    width: 431px;
    & input{
      height: 46px;
      padding: 0 15px 0 21px;
    }
    .other__info-title{
      font-size: 28px;
      line:height: 33px;
      font-weight: 500;
    }
    .other__info-title-text{
      font-size: 20px;
      line:height: 24px;
      font-weight: 500;
    }
    .user__phone{
      display: flex;
      justify-content: space-between;
      margin: 30px 0 45px 0;
      & .form__group{
        width: 202px;
        & input{
          width: 100%;
        }
      }
    }
    & .form__label{
      font-size: 17px;
      font-weight: 400;
      line-height: 30px;
      color: #000;
      display: block;
      margin: 17px 0 10px 0;
    }
    .form__password-title{
      font-size: 28px;
      line-height: 25px;
      font-weight: 500;
      margin: 0 0 30px 0;
    }
    .form__save-btn{
      margin: 36px 0 0 0;
    }
  }

`