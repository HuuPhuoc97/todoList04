import {combineReducers} from 'redux';
import items from './items';
import isDisplayForm from './isDisplayForm';
import itemUpdating from './itemUpdating';
import search from './search';
import sort from './sort';

const myReducer = combineReducers({
    items,
    isDisplayForm,
    itemUpdating,
    search,
    sort
});
export default myReducer;