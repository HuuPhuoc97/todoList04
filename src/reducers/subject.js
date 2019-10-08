import * as types from "../constants/ActionTypes";

var initialState = {
  items: [],
  isDisplayForm: false,
  itemUpdating: null,
  keyword: "",
  sortBy: ""
};

var items = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ITEM_REQUEST: {
      return { ...state };
    }
    case types.LIST_ITEM_SUCCESS: {
      return { ...state, items: action.items };
    }
    case types.LIST_ITEM_ERROR: {
      return {};
    }

    // add item
    case types.ADD_ITEM_REQUEST: {
      return { ...state };
    }
    case types.ADD_ITEM_SUCCESS: {
      state.items = [...state.items, action.item];
      return { ...state };
    }
    case types.ADD_ITEM_ERROR: {
      return {};
    }

    // delete item
    case types.DELETE_ITEM_REQUEST: {
      return { ...state };
    }
    case types.DELETE_ITEM_SUCCESS: {
      let items = [...state.items];
      let index = items.indexOf(action.item);

      items.splice(index, 1);
      state = { ...state, items };
      return state;
    }
    case types.DELETE_ITEM_ERROR: {
      return {};
    }

    //update item
    case types.UPDATE_ITEM_REQUEST: {
      return { ...state };
    }
    case types.UPDATE_ITEM_SUCCESS: {
      let newItems = [...state.items];
      let index = newItems.findIndex(item => {
        return item._id === action.item._id;
      });
      newItems[index] = action.item;
      return { ...state, items: newItems };
    }
    case types.UPDATE_ITEM_ERROR: {
      return {};
    }

    // display form
    case types.TOGGLE_FORM: {
      state = { ...state, isDisplayForm: !state.isDisplayForm };
      return state;
    }
    case types.OPEN_FORM: {
      state = { ...state, isDisplayForm: true };
      return state;
    }
    case types.CLOSE_FORM: {
      state = { ...state, isDisplayForm: false };
      return state;
    }

    // Get value for updated item
    case types.SET_UPDATING_OBJECT_REQUEST: {
      return { ...state };
    }
    case types.SET_UPDATING_OBJECT_SUCCESS: {
      state = { ...state, itemUpdating: action.item };
      return state;
    }
    case types.SET_UPDATING_OBJECT_ERROR: {
      return {};
    }

    //search
    case types.SEARCH_REQUEST: {
      state = { ...state };
      return state;
    }
    case types.SEARCH_SUCCESS: {
      state = { ...state, keyword: action.keyword };
      return state;
    }
    case types.SEARCH_ERROR: {
      return {};
    }
    //sort
    case types.SORT_REQUEST: {
      return state;
    }
    case types.SORT_SUCCESS: {
      state = { ...state, sortBy: action.sortBy };
      return state;
    }
    case types.SORT_ERROR: {
      return {};
    }

    default:
      return state;
  }
};
export default items;
