import { render, screen } from '@testing-library/react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../../components/Header';

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

test('should render Header correctly', () => {
  const container = render(<MockHeader />);
  const headerElement = screen.getByRole("heading");
  expect(headerElement.textContent).toBe("Expensify");
});

test('should render Header correctly', () => {
  const container = render(<MockHeader />);
  const headerElement = screen.getByRole("heading");
  expect(container).toMatchSnapshot();
});

