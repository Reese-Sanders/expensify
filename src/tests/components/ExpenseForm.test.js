import { render, screen, fireEvent } from '@testing-library/react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import moment from 'moment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';


test('should render Expense form correctly with data', () => {
  const container = render(<ExpenseForm expense={expenses[0]}/>);
  expect(container).toMatchSnapshot();
});

test('should get description input', () => {
  const container = render(<ExpenseForm />);
  const descriptionElement = container.getByPlaceholderText(/Description/i);
  expect(descriptionElement).toBeInTheDocument();
});

test('should change description input', () => {
  const container = render(<ExpenseForm />);
  const descriptionElement = container.getByPlaceholderText(/Description/i);
  fireEvent.change(descriptionElement, { target: {value: 'A new shopping spree'} });
  expect(descriptionElement.value).toBe('A new shopping spree');
});

test('should get submit button', () => {
  const container = render(<ExpenseForm />);
  const submitButton = container.getByText('Add Expense');
  expect(submitButton).toBeInTheDocument();
});

test('should submit showing an error state element', () => {
  const container = render(<ExpenseForm />);
  const submitButton = container.getByText('Add Expense');
  fireEvent.click(submitButton);
  const errorStateText = 'Description or Amount must be filled';
  const errorElement = container.getByText(errorStateText);
  expect(errorElement).toBeInTheDocument();
});

test('should change note input', () => {
  const container = render(<ExpenseForm />);
  const noteElement = container.getByPlaceholderText('Add a note for your expense (optional)');
  fireEvent.change(noteElement, { target: {value: 'A new shopping spree'} });
  expect(noteElement.value).toBe('A new shopping spree');
});


test('should change amount input', () => {
  const container = render(<ExpenseForm />);
  const amountElement = container.getByPlaceholderText('Amount');
  fireEvent.change(amountElement, { target: {value: '10.00'} });
  expect(amountElement.value).toBe('10.00');
});

test('should not change amount input', () => {
  const container = render(<ExpenseForm />);
  const amountElement = container.getByPlaceholderText('Amount');
  fireEvent.change(amountElement, { target: {value: '10,00'} });
  expect(amountElement.value).toBe('');
});

test('should call onSubit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const container = render(<ExpenseForm 
    expense={expenses[0]} 
    onSubmit={onSubmitSpy} 
    />);
  const submitButton = container.getByText('Add Expense');
  fireEvent.click(submitButton);
  expect(container.queryByText('Description or Amount must be filled')).toBeNull();
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});