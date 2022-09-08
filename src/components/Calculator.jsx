/* eslint-disable */

import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const clickHandler = (e) => {
    const result = calculate({ total, next, operation }, e.target.textContent);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  }
  return (
    <div className="container">
      <div className="screen" onClick={clickHandler}>
        {total}{operation}{next}
      </div>
      <div className="btn" onClick={clickHandler}>AC</div>
      <div className="btn" onClick={clickHandler}>+/-</div>
      <div className="btn" onClick={clickHandler}>%</div>
      <div className="btn operator" onClick={clickHandler}>÷</div>
      <div className="btn" onClick={clickHandler}>7</div>
      <div className="btn" onClick={clickHandler}>8</div>
      <div className="btn" onClick={clickHandler}>9</div>
      <div className="btn operator" onClick={clickHandler}>x</div>
      <div className="btn" onClick={clickHandler}>4</div>
      <div className="btn" onClick={clickHandler}>5</div>
      <div className="btn" onClick={clickHandler}>6</div>
      <div className="btn operator" onClick={clickHandler}>-</div>
      <div className="btn" onClick={clickHandler}>1</div>
      <div className="btn" onClick={clickHandler}>2</div>
      <div className="btn" onClick={clickHandler}>3</div>
      <div className="btn operator" onClick={clickHandler}>+</div>
      <div className="btn span-2" onClick={clickHandler}>0</div>
      <div className="btn" onClick={clickHandler}>.</div>
      <div className="btn operator" onClick={clickHandler}>=</div>
    </div>
  );
}

export default Calculator;
