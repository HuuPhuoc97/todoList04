import * as types from "./../constants/ActionTypes";

// list item
export const getListItemRequest = () => {
  return {
    type: types.LIST_ITEM_REQUEST
  };
};
export const getListItemSuccess = (items) => {
  return {
    type: types.LIST_ITEM_SUCCESS,
    items
  };
};
export const getListItemError = () => {
  return {
    type: types.LIST_ITEM_ERROR
  };
};

// add item
export const addItemRequest = item => {
  return {
    type: types.ADD_ITEM_REQUEST,
    item
  };
};
export const addItemSuccess = item => {
  return {
    type: types.ADD_ITEM_SUCCESS,
    item
  };
};
export const addItemError = error => {
  return {
    type: types.ADD_ITEM_ERROR,
    error
  };
};

export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  };
};
export const openForm = () => {
  return {
    type: types.OPEN_FORM
  };
};
export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  };
};

export const deleteItem = item => {
  return {
    type: types.DELETE_ITEM,
    item
  };
};

export const getUpdating = item => {
  return {
    type: types.GET_UPDATING,
    item
  };
};

export const updateItem = item => {
  return {
    type: types.UPDATE_ITEM,
    item
  };
};

export const search = keyword => {
  return {
    type: types.SEARCH,
    keyword
  };
};
export const sort = sortBy => {
  return {
    type: types.SORT,
    sortBy
  };
};
