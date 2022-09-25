import styled from "styled-components";

export const Tagli = styled.li`
  margin-bottom: 2rem;
  border-radius: 5px;
  margin: auto;

  > h2 {
    text-align: start;
  }

  img {
    height: 100px;
    width: 100%;
  }

  @media (max-width: 720px) {
    margin: auto;

    img {
      width: 100%;
    }
  }

  @media (max-width: 375px) {
    width: 16rem;
  }
`;
