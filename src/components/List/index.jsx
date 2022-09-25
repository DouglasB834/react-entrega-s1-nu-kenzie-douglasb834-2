import { Card } from "../Card";
import { DivBtnList, TagUl } from "./style";
import { useEffect, useState } from "react";
import { EmptyExtract } from "../EmptyExtract";

function List({ transaction, setTransaction }) {

  const hendleDelet = (card) => {
    setTransaction(filter.filter((element) => card !== element));
  };

  const [filter, setFilter] = useState(transaction);

  const filtrar = (trocar) => {
    setFilter(transaction.filter((element) => element.type === trocar));
  };

  const todos = () => {
    setFilter(transaction);
  };

  useEffect(() => {
    setFilter(transaction);
  }, [transaction]);

  return (
    <div>
      <DivBtnList>
        <p>Resumo Finaceiro</p>
        <div>
          <button className="btnTodos" onClick={() => todos()}>
            todos
          </button>
          <button className="btnFilter" onClick={() => filtrar("entrada")}>
            Entradas
          </button>
          <button className="btnFilter" onClick={() => filtrar("saida")}>
            Despesas
          </button>
        </div>
      </DivBtnList>

      <TagUl>
        {filter.length === 0 ? (
          <EmptyExtract />
        ) : (
          filter.map((element, i) => (
            <Card key={i} element={element} hendleDelet={hendleDelet} />
          ))
        )}
      </TagUl>
    </div>
  );
}

export default List;