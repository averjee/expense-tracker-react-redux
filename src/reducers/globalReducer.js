import { DELETE_ITEM, ADD_ITEM } from "../actions/types";

// const initialState = {
//   transactions: [
//     { id: 1, text: "Buy Me", amount: 100 },
//     { id: 2, text: "Drink", amount: 550 },
//     { id: 3, text: "Shopping", amount: -50 }
//   ]
// };
const localItems = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
const initialState = {
  transactions: localItems
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      const newTrans = state.transactions.filter(item => item.id !== action.payload);

      return {
        ...state,
        transactions: newTrans
      };

    case ADD_ITEM:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };

    default:
      return state;
  }
};
