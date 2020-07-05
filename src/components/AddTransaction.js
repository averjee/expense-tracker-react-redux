import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/globalActions";

//transactions prop is retrieved from redux state via mapStateToProps and connect and addItem is action
const AddTransaction = ({ transactions, addItem }) => {
  
  // hooks to manage state from form
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // add transactions to local storage
  localStorage.setItem("items", JSON.stringify(transactions));

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    // adds newTransaction to redux global state via addItem action
    addItem(newTransaction);

    // clears fields
    setText("");
    setAmount("");
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="text" placeholder="Enter amount..." value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  transactions: state.transactions.transactions
});

const mapDispatchToProps = dispatch => ({
  addItem: transaction => dispatch(addItem(transaction))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
