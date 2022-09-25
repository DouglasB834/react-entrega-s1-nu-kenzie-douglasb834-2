import NoCard from "../../img/NoCard.png";
import { Tagli } from "./style";

export const EmptyExtract = () => {
  return (
    <>
      <h2 className="titulo">Você ainda não possui nenhum lançamento</h2>
      <Tagli>
        <img src={NoCard} alt="" />
      </Tagli>
      <Tagli>
        <img src={NoCard} alt="" />
      </Tagli>
      <Tagli>
        <img src={NoCard} alt="" />
      </Tagli>
    </>
  );
};
