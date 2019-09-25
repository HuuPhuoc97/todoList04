import * as types from "./../constants/ActionTypes";

// use library randomstring to create random strings, then assign random string to id
var generateID = () => {
  var randomstring = require("randomstring");
  var id = randomstring.generate();
  return id;
};

var saveLocal = (array) => {
  localStorage.setItem("items", JSON.stringify(array));
}

var initialState = [];

var items = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ITEM_REQUEST: {
      return [...state];
    }
    case types.LIST_ITEM_SUCCESS: {
      // state = action.items
      return action.items;
    }
    case types.LIST_ITEM_ERROR: {
      return state;
    }

    // add item 
    case types.ADD_ITEM_REQUEST: {

      return [...state];
    }
    case types.ADD_ITEM_SUCCESS: { 
      let newItem = {
        id: generateID(),
        name: action.item.name,
        level: action.item.level
      };
      state.push(newItem);
      saveLocal(state);
      return  [...state];
    }
    case types.ADD_ITEM_ERROR: {
      return [...state];
    }

    // delete item
    case types.DELETE_ITEM: {
      let index = state.indexOf(action.item);
      let newState = [...state];
      newState.splice(index, 1);
      saveLocal(newState);
      return newState;
    }

    //update item
    case types.UPDATE_ITEM: {   
      let newState = [...state];
      let index = newState.findIndex((item) => {
        return item.id === action.item.id;
      })
      newState[index] = action.item;
      saveLocal(newState);
      return newState;
    }

    default:
      return state;
  }
};
export default items;
