import React, { useState } from "react";
import { TagDiv } from "./style";

const Form = ({ setTransaction, transaction, children }) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("entrada");
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    setTransaction((old) => [...old, { description, type, value }]);

    setDescription("");
    setValue("");
  };

  return (
    <TagDiv className="div__container">
      <form onSubmit={(event) => handleSubmit(event.preventDefault())}>
        <div className="desc">
          <label name="desc">
            Descrição
            <input
              type="text"
              placeholder="Digite aqui sua descrição"
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <label>Ex: Compra de roupas</label>
        </div>

        <div className="div__box_valores">
          <div className="values">
            <p>valor</p>
            <div className="ul__valor">
              <input
                type="number"
                required
                value={value}
                onChange={(event) => setValue(Number(event.target.value))}
              />
              <div>
                <span>R$</span>
              </div>
            </div>
          </div>

          <div className="values">
            <p>tipo de valor</p>

            <select
              required
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="entrada">Entrada</option>
              <option value="saida">despesa</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir valor</button>
      </form>
      {children}
    </TagDiv>
  );
};

export default Form;
