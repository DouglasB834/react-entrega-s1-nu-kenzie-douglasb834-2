import styled from "styled-components";

export const TagUl = styled.ul`
  width: 35rem;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  overflow-y: auto;
  height: 500px;
  margin: auto;

  @media (max-width: 720px) {
    width: 22rem;
  }
  @media (max-width: 375px) {
    width: 16rem;
  }
`;

export const DivBtnList = styled.div`
  background-color: var(--gray-1);
  width: 100%;
  margin-top: 3rem;
  height: 50px;
  display: flex;
  justify-items: center;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;
  border-radius: 5px;

  button:focus {
    background-color: var(--color-primary);
    color: var(--gray-1);
  }

  > p {
    font-weight: 700;
  }

  div .btnTodos {
    background-color: var(--color-primary);
    padding: 0.7rem 0.9rem;
    border-radius: 7px;
    cursor: pointer;
    color: var(--gray-1);
  }

  div .btnFilter {
    cursor: pointer;
    padding: 0.9rem;
    margin-left: 10px;
    border-radius: 5px;
    font-weight: 500;
  }

  div .btnFilter:hover {
    background-color: var(--gray-3);
    color: var(--gray-1);
  }

  @media (max-width: 412px) {
    width: 97%;

    div {
      display: flex;
    }

    button {
      height: 35px;
      font-size: 60%;
    }
  }

  @media (max-width: 375px) {
    button {
      height: 30px;
      font-size: 50%;
    }
  }
`;
