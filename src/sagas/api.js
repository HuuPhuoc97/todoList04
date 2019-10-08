import axios from "axios";

// const url = "http://5d8db435370f02001405c26a.mockapi.io/api/items";
const url = "http://localhost:4000/items";
function fetchListItem() {
  return axios({
    method: "GET",
    url
  });
}

// add item
function addNewItemAPI(newItem) {
  return axios({
    method: "POST",
    url,
    data: newItem
  });
}

//delete item
function deleteItemAPI(item){
  return axios({
    method: "DELETE",
    url: `${url}/${item._id}`,
    data: null
  })
}

//update item
function updateItemAPI(item){
  return axios({
    method: "PUT",
    url: `${url}/${item._id}`,
    data: item
  })
}

function getItemAPI(_id){
  return axios({
    method: "GET",
    url: `${url}/${_id}`,
  })
}

export const api = {
  fetchListItem,
  addNewItemAPI,
  deleteItemAPI,
  updateItemAPI,
  getItemAPI
};
