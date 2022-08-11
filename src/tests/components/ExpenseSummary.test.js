import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';
import { BrowserRouter } from 'react-router-dom';

const MockExpenseSummary = (props) => {
  return (
    <BrowserRouter>
      <ExpenseSummary expenses={props.expenses}/>
    </BrowserRouter>
  )
};

test('should render ExpenseSumarry with correct total', () => {
  const container = render(<ExpenseSummary expenses={expenses}/>);
  expect(container).toMatchSnapshot();
});

test('should render ExpenseSumarry with no expenses', () => {
  const container = render(<ExpenseSummary expenses={[]}/>);
  expect(container).toMatchSnapshot();
});