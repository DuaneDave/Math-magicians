import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const clickHandler = (e) => {
    const result = calculate({ total, next, operation }, e.target.textContent);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <div className="container">
      <div className="screen">
        {total}
        {operation}
        {next}
      </div>
      <button type="button" className="btn" onClick={clickHandler}>
        AC
      </button>
      <button type="button" className="btn" onClick={clickHandler}>
        +/-
      </button>
      <button type="button" className="btn" onClick={clickHandler}>
        %
      </button>
      <button type="button" className="btn operator" onClick={clickHandler}>
        ÷
      </button>
      <button type="button" className="btn" onClick={clickHandler}>
        7
      </button>
      <button type="button" className="btn" onClick={clickHandler}>
        8
      </button>
      <button type="button" className="btn" onClick={clickHandler}>
        9
      </button>
      <button type="button" className="btn operator" onClick={clickHandler}>
        x
      </button>
      <button type="button" className="btn" onClick={clickHandler}>
        4
      </button>
      <button type="button" className="btn" onClick={clickHandler}>
        5
      </button>
      <button type="button" className="btn" onClick={clickHandler}>
        6
      </button>
      <button type="button" className="btn operator" onClick={clickHandler}>
        -
      </button>
      <button type="button" className="btn" onClick={clickHandler}>
        1
      </button>
      <button type="button" className="btn" onClick={clickHandler}>
        2
      </button>
      <button type="button" className="btn" onClick={clickHandler}>
        3
      </button>
      <button type="button" className="btn operator" onClick={clickHandler}>
        +
      </button>
      <button type="button" className="btn span-2" onClick={clickHandler}>
        0
      </button>
      <button type="button" className="btn" onClick={clickHandler}>
        .
      </button>
      <button type="button" className="btn operator" onClick={clickHandler}>
        =
      </button>
    </div>
  );
};

export default Calculator;
