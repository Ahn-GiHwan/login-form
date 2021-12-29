import styled from "styled-components";

export const MenuIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 10px 0 0;
  font-size: 30px;
`;

export const Input = styled.input`
  outline: none;
  border: 0px solid;
  border-bottom: 2px solid gray;
  transition: 0.3s ease-in-out;
  :focus {
    transform: scale(1.1);
  }
`;
