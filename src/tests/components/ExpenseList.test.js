import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
import { BrowserRouter } from 'react-router-dom';

const MockExpenseList = (props) => {
  return (
    <BrowserRouter>
      <ExpenseList expenses={props.expenses}/>
    </BrowserRouter>
  )
}

test('should render ExpenseList with expenses', () => {
  const container = render(<MockExpenseList expenses={expenses}/>);
  expect(container).toMatchSnapshot();
});

test('should render ExpenseList with no expenses', () => {
  const container = render(<MockExpenseList expenses={[]}/>);
  expect(container).toMatchSnapshot();
});