import { DELETE_ITEM, ADD_ITEM } from './types';

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id
});

export const addItem = (transaction) => ({
  type: ADD_ITEM,
  payload: transaction
});
