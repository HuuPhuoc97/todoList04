import * as types from "../constants/ActionTypes";

// use library randomstring to create random strings, then assign random string to id
var generateID = () => {
  var randomstring = require("randomstring");
  var id = randomstring.generate();
  return id;
};

var saveLocal = array => {
  localStorage.setItem("items", JSON.stringify(array));
};

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
      let newItem = {
        id: generateID(),
        name: action.item.name,
        level: action.item.level
      };
      // let newState = state.items.push(newItem);
      state.items = [...state.items, newItem];
      saveLocal(state.items);
      return {...state} ;
    }
    case types.ADD_ITEM_ERROR: {
      return {};
    }

    // delete item
    case types.DELETE_ITEM: {
      let newItems = [...state.items];
      let index = newItems.indexOf(action.item);

      newItems.splice(index, 1);
      saveLocal(newItems);
      state = { ...state, items: newItems };
      return state;
    }

    //update item
    case types.UPDATE_ITEM: {
      let newItems = [...state.items];
      let index = newItems.findIndex(item => {
        return item.id === action.item.id;
      });
      newItems[index] = action.item;
      saveLocal(newItems);
      state = { ...state, items: newItems };
      return state;
    }

    // display form
    case types.TOGGLE_FORM: {
      state = {...state, isDisplayForm: !state.isDisplayForm}
      return state;
    }
    case types.OPEN_FORM: {
      state = {...state, isDisplayForm: true}
      return state;
    }
    case types.CLOSE_FORM: {
      state = {...state, isDisplayForm: false}
      return state;
    }

    // Get value for updated item
    case types.GET_UPDATING: {
      state = {...state, itemUpdating: action.item}
      return state;
    }

    //search
    case types.SEARCH: {
      state = {...state, keyword: action.keyword};
      return state;
    }
    //sort
    case types.SORT: {  
      state = {...state, sortBy: action.sortBy};
      return state;
    }

    default:
      return state;
  }
};
export default items;
