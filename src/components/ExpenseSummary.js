import React from "react";
import { connect } from "react-redux";
import selectExpenses from '../selectors/expenses';
import expensesTotal from "../selectors/expenses-total";
import numeral from "numeral";


export const ExpenseSummary = (props) => (
  <div>
    <p>
    Viewing {props.expenses.length?props.expenses.length:0} totalling {numeral(expensesTotal(props.expenses)/100).format('$0,0.00')} 
    </p>
  </div>
);

// const mapStateToProps = (state) => ({ 
//   expenses: state.expenses,
//   filters: state.filters
// });

const mapStateToProps = (state) => ({ 
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseSummary);