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


//delete item
export const deleteItemRequest = item => {
  return {
    type: types.DELETE_ITEM_REQUEST,
    item
  };
};
export const deleteItemSuccess = item => {
  return {
    type: types.DELETE_ITEM_SUCCESS,
    item
  };
};
export const deleteItemError = error => {
  return {
    type: types.DELETE_ITEM_ERROR,
    error
  };
};

 // set value for updating variable
export const setUpdatingObjectRequest = item => {
  return {
    type: types.SET_UPDATING_OBJECT_REQUEST,
    item
  };
};
export const setUpdatingObjectSuccess = item => {
  return {
    type: types.SET_UPDATING_OBJECT_SUCCESS,
    item
  };
};
export const setUpdatingObjectError = () => {
  return {
    type: types.SET_UPDATING_OBJECT_ERROR,
  };
};

// update item
export const updateItemRequest = item => {
  return {
    type: types.UPDATE_ITEM_REQUEST,
    item
  };
};
export const updateItemSuccess = item => {
  return {
    type: types.UPDATE_ITEM_SUCCESS,
    item
  };
};
export const updateItemError = () => {
  return {
    type: types.UPDATE_ITEM_ERROR,
  };
};

// search
export const searchRequest = keyword => {
  return {
    type: types.SEARCH_REQUEST,
    keyword
  };
};
export const searchSuccess = keyword => {
  return {
    type: types.SEARCH_SUCCESS,
    keyword
  };
};
export const searchError = () => {
  return {
    type: types.SEARCH_ERROR,

  };
};

// sort
export const sortRequest = sortBy => {
  return {
    type: types.SORT_REQUEST,
    sortBy
  };
};
export const sortSuccess = sortBy => {
  return {
    type: types.SORT_SUCCESS,
    sortBy
  };
};
export const sortError = () => {
  return {
    type: types.SORT_ERROR,
  };
};
