import * as types from "./../constants/ActionTypes";
var initialState = '';
var sort = (state = initialState, action) => {
    switch (action.type) {
      case types.SORT: {     
        return action.sortBy;
      }
  
      default:
        return state;
    }
  };
  export default sort;