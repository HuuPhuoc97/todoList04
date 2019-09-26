import {
  fork,
  put,
  takeLatest,
  // delay,
  // call,
  // cancelled,
  // take,
  // cancel
} from "redux-saga/effects";
import * as types from "./../constants/ActionTypes";
//   import * as actions from './../actions/index';
//   import _ from "lodash";

// func get list
const data = JSON.parse(localStorage.getItem("items"))?JSON.parse(localStorage.getItem("items")):[];
function* getTodoList() {
  try {
    const items = data ? data : [];
    yield put({
      type: types.LIST_ITEM_SUCCESS,
      items
    });

  } catch (error) {
    yield put({
      type: types.LIST_ITEM_ERROR,
      error
    });
  }
}

function* addItem(action) {
  try {
    yield put({
      type: types.ADD_ITEM_SUCCESS,
      item: action.item
    });
    
    
  } catch (error) {
    yield put({
      type: types.ADD_ITEM_ERROR,
      error
    });
  }
}

function* watchTodoList() {
  yield takeLatest(types.LIST_ITEM_REQUEST, getTodoList);
}
function* watchAddItem() {
  yield takeLatest(types.ADD_ITEM_REQUEST, addItem);
}

export default function* rootSaga() {
  yield fork(watchTodoList);
  yield fork(watchAddItem);
}
