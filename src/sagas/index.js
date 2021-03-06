import { fork, put, takeLatest } from "redux-saga/effects";
import * as types from "./../constants/ActionTypes";
import { api } from "./api";

function* getTodoList() {
  try {
    const response = yield api.fetchListItem();
    const data = response.data;
    const items = data ? data : [];
    yield put({
      type: types.LIST_ITEM_SUCCESS,
      items // items: items
    });
  } catch (error) {
    yield put({
      type: types.LIST_ITEM_ERROR,
      error
    });
  }
}

// add item
function* addItem(action) {
  try {
    let { item } = action;
    let newItem = { name: item.name, level: item.level };
    const response = yield api.addNewItemAPI(newItem);
    yield put({
      type: types.ADD_ITEM_SUCCESS,
      item: response.data
    });
  } catch (error) {
    yield put({
      type: types.ADD_ITEM_ERROR,
      error
    });
  }
}

// delete item
function* deleteItem(action) {
  try {
    yield api.deleteItemAPI(action.item);
    yield put({
      type: types.DELETE_ITEM_SUCCESS,
      item: action.item
    });
  } catch (error) {
    yield put({
      type: types.DELETE_ITEM_ERROR,
      error
    });
  }
}

// update item
function* updateItem(action) {
  try {
    yield api.updateItemAPI(action.item);
    yield put({
      type: types.UPDATE_ITEM_SUCCESS,
      item: action.item
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_ITEM_ERROR,
      error
    });
  }
}

// set value for updating object
function* setUpdatingObject(action) {
  if (action) {
    yield put({
      type: types.SET_UPDATING_OBJECT_SUCCESS,
      item: action.item
    });
  } else {
    yield put({
      type: types.SET_UPDATING_OBJECT_ERROR,
      error: ""
    });
  }
}

//search
function* search(action) {
  if (action) {
    yield put({
      type: types.SEARCH_SUCCESS,
      keyword: action.keyword
    });
  } else {
    yield put({
      type: types.SEARCH_ERROR,
      error: ""
    });
  }
}

// sort
function* sort(action) {
  if (action) {
    yield put({
      type: types.SORT_SUCCESS,
      sortBy: action.sortBy
    });
  } else {
    yield put({
      type: types.SORT_ERROR,
      error: ""
    });
  }
}

function* watchTodoList() {
  yield takeLatest(types.LIST_ITEM_REQUEST, getTodoList);
}
function* watchAddItem() {
  yield takeLatest(types.ADD_ITEM_REQUEST, addItem);
}
function* watchDeleteItem() {
  yield takeLatest(types.DELETE_ITEM_REQUEST, deleteItem);
}
function* watchSetUpdateObject() {
  yield takeLatest(types.SET_UPDATING_OBJECT_REQUEST, setUpdatingObject);
}
function* watchUpdateObject() {
  yield takeLatest(types.UPDATE_ITEM_REQUEST, updateItem);
}
function* watchSearch() {
  yield takeLatest(types.SEARCH_REQUEST, search);
}
function* watchSort() {
  yield takeLatest(types.SORT_REQUEST, sort);
}

export default function* rootSaga() {
  yield fork(watchTodoList);
  yield fork(watchAddItem);
  yield fork(watchDeleteItem);
  yield fork(watchSetUpdateObject);
  yield fork(watchUpdateObject);
  yield fork(watchSearch);
  yield fork(watchSort);
}
