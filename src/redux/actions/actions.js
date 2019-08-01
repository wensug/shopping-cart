import { ADD_TO_CART } from "./actionsTypes"

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}


