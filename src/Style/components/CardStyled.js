import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 206px;
  height: 378px;
  margin: 0 0 54px 0;
  &:hover {
    box-shadow: 0px 0px 17px 2px #f1f1f1;
  }

  .card__img {
    width: 100%;
    height: 126px;
    border-radius: var(--bor-radius);
    background-color: var(--light-grey);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 126px;
      object-fit: cover;
    }
  }

  .card__btn {
  }
`;
