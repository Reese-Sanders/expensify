import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ExpenseDashboard from '../../components/ExpenseDashboardPage';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';

const store = configureStore();

const MockDashboard = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ExpenseDashboard />
      </BrowserRouter>
    </Provider>
  )
}

test('should render Expense Dashboard correctly', () => {
  const container = render(<MockDashboard />);
  expect(container).toMatchSnapshot();
});