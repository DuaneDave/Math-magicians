/* eslint-disable */

import React from 'react';
import './Calculator.css';

import operate from '../logic/operate';
import calculate from '../logic/calculate';

class Calculator extends React.Component {


  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="screen">
          {total}
          {operation}
          {next}
        </div>
        <div className="btn" onClick={this.clickHandler}>
          AC
        </div>
        <div className="btn" onClick={this.clickHandler}>
          +/-
        </div>
        <div className="btn" onClick={this.clickHandler}>
          %
        </div>
        <div className="btn operator" onClick={this.clickHandler}>
          ÷
        </div>
        <div className="btn" onClick={this.clickHandler}>
          7
        </div>
        <div className="btn" onClick={this.clickHandler}>
          8
        </div>
        <div className="btn" onClick={this.clickHandler}>
          9
        </div>
        <div className="btn operator" onClick={this.clickHandler}>
          x
        </div>
        <div className="btn" onClick={this.clickHandler}>
          4
        </div>
        <div className="btn" onClick={this.clickHandler}>
          5
        </div>
        <div className="btn" onClick={this.clickHandler}>
          6
        </div>
        <div className="btn operator" onClick={this.clickHandler}>
          -
        </div>
        <div className="btn" onClick={this.clickHandler}>
          1
        </div>
        <div className="btn" onClick={this.clickHandler}>
          2
        </div>
        <div className="btn" onClick={this.clickHandler}>
          3
        </div>
        <div className="btn operator" onClick={this.clickHandler}>
          +
        </div>
        <div className="btn span-2" onClick={this.clickHandler}>
          0
        </div>
        <div className="btn" onClick={this.clickHandler}>
          .
        </div>
        <div className="btn operator" onClick={this.clickHandler}>
          =
        </div>
      </div>
    );
  }
}

export default Calculator;
