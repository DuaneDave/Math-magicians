import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';

import Home from '../components/home/Home';
import Quote from '../components/quote/Quote';
import Calculate from '../components/calculator/Calculate';
import Header from '../components/header/Header';

describe('Component test', () => {
  it('Should render the home component', () => {
    const home = renderer.create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
  });

  it('Should render the quote component', () => {
    const quote = renderer.create(<Quote />).toJSON();
    expect(quote).toMatchSnapshot();
  });

  it('Should render the calculate component', () => {
    const calculate = renderer.create(<Calculate />).toJSON();
    expect(calculate).toMatchSnapshot();
  });

  it('Should render the header component', () => {
    <Router>
      const header = renderer.create(
      <Header />
      ).toJSON(); expect(header).toMatchSnapshot();
    </Router>;
  });
});
