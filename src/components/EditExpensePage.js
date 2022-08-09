import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  let location = useLocation();
  let { id } = useParams();
  let expense = props.expenses.find((expense) => expense.id === id);
 
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }


  return (
    <div>
      <ExpenseForm 
        expense={expense}
        onSubmit={(expenseEdit) => {
          props.dispatch(editExpense(expense.id, expenseEdit));
          routeChange();
        }}
      />
      <button
      onClick={() => {
        props.dispatch(removeExpense({id: expense.id}));
        routeChange();
      }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(EditExpensePage);