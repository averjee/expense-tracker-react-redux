import React from "react";
import { connect } from "react-redux";

//transactions prop is retrieved from redux state via mapStateToProps and connect
const IncomeExpense = ({ transactions }) => {
  const amounts = transactions.map(item => item.amount);
  // creating income array with only positive items
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // creating expense array with only negative items
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          £{income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          £{expense}
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  transactions: state.transactions.transactions
});

export default connect(mapStateToProps)(IncomeExpense);
