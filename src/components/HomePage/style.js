import styled from "styled-components";

export const HomepageStyle = styled.div`
  display: flex;
  background-color: var(--gray-4);
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .leyout {
    gap: 2rem;
    width: 347px;
    display: flex;
    margin-top: 2rem;
    color: var(--gray-1);
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .leyout > img {
    /* width: auto; */
  }

  .leyout > h2 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--gray-2);
  }
  .leyout > h2 > span {
    color: var(--color-primary);
  }
  .leyout h1 {
    font-weight: 800;
    font-size: var(--title1);
  }

  .leyout > span {
  }

  .leyout .btnInicar {
  }

  .leyout .btnIniciar > button {
    background-color: var(--color-primary);
    color: var(--gray-1);
    margin-top: 1rem;
    padding: 13px 20px;
    width: 241px;
    border-radius: 5px;
    cursor: pointer;
  }
  .leyout .btnIniciar > button:hover {
    background-color: var(--color-primary-2);
  }

  .figure {
    width: 593px;
    display: flex;
    justify-content: center;
  }
  .figure img {
    width: 90%;
  }

  @media screen and (max-width: 740px) {
    flex-wrap: wrap;
  }
`;
