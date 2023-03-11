/** @format */

export const ADD_ITEM = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};
export const DELETE_ITEM = (product) => {
  return {
    type: "DELETE_ITEM",
    payload: product,
  };
};
