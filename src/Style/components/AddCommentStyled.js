import styled from "styled-components";

export const StyledAddComment = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0,0,0, 0.35);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .add__comment{
    position: relative;
    width: 418px;
    height: 321px;
    background-color: #fff;
    border-radius: 11px;
    padding: 31px 12px 18px 45px;
    // position:relative;
    .add__title{
      font-size: 20px;
      line-height: 28px;
    }
    .close__form{
      
    }
    .user__rate{
      display: flex;
      align-items: center;
      margin: 16px 0;
    }
    .user__rate-text{
      font-size: 10px;
      line-height: 12px;
      font-weight: 400;
      margin: 0 9px 0 0;
    }
    .user__rate-star{
      color: #d2d2d2;
      cursor: pointer;
      font-size: 12px;
      & :hover{
        // color: var(--green);
      }
    }
    .form__group-name{
      display: flex;
      align-items: center;
      margin: 0 0 19px 0;
      & :first-child{
        margin: 0 25px 0 0;
      }
      .form__input-name{
        width: 177px;
        height: 33px;
        padding: 10px 15px 11px 16px;
        font-size: 12px;
        background-color: #fcfcfc;
        border: 0.572603px solid #EBEBEB;
        &:focus{
          outline: none;
        }
      }
      
    }
    .form__label{
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
    }
    .form__group-comment{
      display: flex;
      align-items: flex-start;
      position: realtive;
      & :first-child{
        margin: 0 21px 0 0;
      }
      .comment__length{
        position: absolute;
        // right: 0;
        margin-top: -15px;
        margin-left: 67%;
        font-size: 12px;
        color: #c6c6c6;
      }
    }
    .user__comment-text{
      width: 244px;
      height: 98px;
      border: 0.572603px solid #EBEBEB;
      resize: none;
      padding: 5px;
      font-size: 12px;
      &:focus{
        outline: none;
      }
    }
    .form__btn{
      margin: 18px 0 0 67px;
    }
  }
`
export const BtnClose = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background: inherit;
  cursor: pointer;
  padding: 10px 10px 7px 10px;
  font-size: 29px;
  color: var(--green);
`