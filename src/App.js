import React from "react";
import { Header } from "./components/Header";
import Balance from "./components/Balance";
import "./App.css";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { Provider } from "react-redux";
import store from './store';

function App() {
  return (
    <div>
      <Header />
      <Provider store={store}>
          <div className="container">
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTransaction />
          </div>
      </Provider>
    </div>
  );
}

export default App;
