import React from "react";
import { connect } from "react-redux";

//transactions prop is retrieved from redux state via mapStateToProps and connect
export const Balance = ({ transactions }) => {
  const amounts = transactions.map(item => item.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  let absTotal = String(Math.abs(total));
  
  if (total < 0) {
    absTotal = "-£" + absTotal;
  } else {
    absTotal = "£" + absTotal;
  }  
  

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 style={{ fontSize: "40px" }} className={total > 0 ? "money plus" : "money minus"} id="balance">
        {absTotal}
      </h1>
    </div>
  );
}

const mapStateToProps = state => ({
  transactions: state.transactions.transactions
});

export default connect(mapStateToProps)(Balance);
