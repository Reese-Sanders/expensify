import expensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should add multiple expenses", () => {
  expect(expensesTotal(expenses)).toBe(114195);
});
 
test("should return 0 with no expenses", () => {
  expect(expensesTotal([])).toBe(0);
});

test("should return sum of 1 expense with 1 expenses", () => {
  expect(expensesTotal([expenses[1]])).toBe(expenses[1].amount);
});