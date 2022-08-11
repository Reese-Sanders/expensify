export default (expenses) => {
  if (expenses.length === 0) {
    return 0;
  }  else {
    const total = expenses.reduce((sum, expense) => {
      return sum + expense.amount;
    }, 0);
    return total;
  }
}