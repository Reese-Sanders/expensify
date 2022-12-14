import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import { useNavigate } from "react-router-dom";

const AddExpensePage = (props) => {
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm 
        onSubmit={(expense) => {
          props.onSubmit(expense);
          routeChange();
      }}
      />
      
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);