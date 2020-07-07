import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../actions/globalActions";

// transaction is the prop from TransactionList and deleteItem is the redux global action
const Transaction = ({ transaction, deleteItem }) => {
  const sign = transaction.amount > 0 ? "+" : "-";
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text}{" "}
      <span>
        {sign}£{Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteItem(transaction.id)}>
        x
      </button>
    </li>
  );
}

// null is because you aren't doing anything with transaction so only deleteitem is passed back into state via mapDispatchToProps
export default connect(null, { deleteItem })(Transaction);
