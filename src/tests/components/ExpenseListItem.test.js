import React from 'react';
import { render, screen } from '@testing-library/react';
import expenses from '../fixtures/expenses';
import { BrowserRouter } from 'react-router-dom';
import ExpenseListItem from '../../components/ExpenseListItem';

const MockExpenseListItem = (props) => {
  return (
    <BrowserRouter>
      <ExpenseListItem {...props.expense}/>
    </BrowserRouter>
  )
}

test('should render a expenseList Item with expense', () => {
  const container = render(<MockExpenseListItem expense={expenses[0]}/>);
  expect(container).toMatchSnapshot();
});