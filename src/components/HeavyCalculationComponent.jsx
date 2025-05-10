import React, { useMemo, useState } from "react";

export const HeavyCalculationComponent = () => {
  const [show, setShow] = useState(true);
  const [numList, setNumList] = useState([2, 3, 4, 5, 6, 7, 8, 9]);

  const getCalculo = (numList) => {
    console.log("Calculando...");
    return numList.reduce((a, b) => a * b);
  };

  const addNumber = () => {
    setNumList([...numList, numList[numList.length - 1] + 1]);
  };

  const memorizeValue = useMemo(() => getCalculo(numList), [numList]);

  return (
    <>
      <h2>Calculos:</h2>
      {show && <h4>El calculo es: {memorizeValue}</h4>}
      <button className="btn btn-info" onClick={() => setShow(!show)}>
        {show ? "Ocultar calculo" : "Mostrar calculo"}
      </button>
      <button className="btn btn-danger" onClick={() => addNumber()}>
        Agregar mas numeros
      </button>
    </>
  );
};
