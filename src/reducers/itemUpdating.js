import * as types from "./../constants/ActionTypes";

var initialState = null;

var itemUpdating = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_UPDATING: {
      return action.item;
    }

    default:
      return state;
  }
};
export default itemUpdating;
