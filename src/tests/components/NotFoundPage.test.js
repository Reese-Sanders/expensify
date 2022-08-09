import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../components/NotFoundPage';

const MockNotFound = () => {
  return (
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  )
}

test('should render NotFoundPage correctly', () => {
  const container = render(<MockNotFound />);
  expect(container).toMatchSnapshot();
});