import styled from "styled-components";

export const StyledButton = styled.button`
  padding: ${(props) => props.pad || "0"};
  width: ${(props) => props.width || "140px"};
  height: ${(props) => props.height || "38px"};
  font-size: ${(props) => props.fontSize || "18px"};
  background-color: var(--green);
  color: var(--white);
  font-weight: var(--btn-font-weight);
  font-family: var(--font-norms);
  border: none;
  outline: none;
  border-radius: var(--bor-radius);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--green);
  &:checked {
    outline: none;
    border: none;
  }
`;
