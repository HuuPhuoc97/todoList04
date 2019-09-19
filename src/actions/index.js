import * as types from './../constants/ActionTypes';

export const getListItem = () => {
    return {
        type: types.LIST_ITEM
    }
}

export const addItem = (item) => {
    return {
        type: types.ADD_ITEM,
        item
    }
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const deleteItem = (item) => {
    return {
        type: types.DELETE_ITEM,
        item
    }
}

export const getUpdating = (item) => {
    return {
        type: types.GET_UPDATING,
        item
    }
}

export const updateItem = (item) => {
    return {
        type: types.UPDATE_ITEM,
        item
    }
}

export const search = (keyword) => {
    return {
        type: types.SEARCH,
        keyword
    }
}
export const sort = (sortBy) => {
    return {
        type: types.SORT,
        sortBy
    }
}




