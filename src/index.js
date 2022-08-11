import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses  from './selectors/expenses';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();

//store.dispatch(setTextFilter('gas'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('water'));
// }, 3000)

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));


const jsx = (
  <Provider store={store}><AppRouter /></Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    jsx
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// =================================

