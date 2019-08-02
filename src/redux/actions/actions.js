import { ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY, OPEN_CHECKOUT  } from "./actionsTypes"

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
}

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id
  }
}

export const subQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id
  }
}

export const openCheckout = () => {
  return {
    type: OPEN_CHECKOUT
  }
}


