/* eslint-disable */

import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="screen">0</div>
        <div className="btn">Ac</div>
        <div className="btn">+/-</div>
        <div className="btn">%</div>
        <div className="btn operator">&#xf7;</div>
        <div className="btn">7</div>
        <div className="btn">8</div>
        <div className="btn">9</div>
        <div className="btn operator">x</div>
        <div className="btn">4</div>
        <div className="btn">5</div>
        <div className="btn">6</div>
        <div className="btn operator">-</div>
        <div className="btn">1</div>
        <div className="btn">2</div>
        <div className="btn">3</div>
        <div className="btn operator">+</div>
        <div className="btn span-2">0</div>
        <div className="btn">.</div>
        <div className="btn operator">=</div>
      </div>
    );
  }
}

export default Calculator;
