import React from "react";
import Transaction from "./Transaction";
import { connect } from "react-redux";

// transactions prop is retrieved from redux state via mapStateToProps and connect
const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  transactions: state.transactions.transactions
});

export default connect(mapStateToProps)(TransactionList);
