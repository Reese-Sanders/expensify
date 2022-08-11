import { render, screen, fireEvent } from '@testing-library/react';
import AddExpensePage from '../../components/AddExpensePage';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

const MockAddExpensePage = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <AddExpensePage onSubmit={props.onSubmit} />
        </BrowserRouter>
    </Provider>
  )
}

/*test('should render AddExpensePage correctly', () => {
  const onSubmit = jest.fn();
  const container = render(<MockAddExpensePage onSubmit={onSubmit}/>);
  expect(container).toMatchSnapshot();
});*/

test('should handle onSubmit', () => {
  const onSubmit = jest.fn();
  const container = render(<MockAddExpensePage onSubmit={onSubmit}/>);
});