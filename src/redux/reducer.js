import item1 from "../images/apple.png";
import item2 from "../images/bread.png";
import item3 from "../images/milk.png";
import item4 from "../images/soup.png";

import { ADD_TO_CART } from "./actions/actionsTypes";

const initState = {
  items: [
    {
      id: 1,
      title: "Apples",
      img: item1,
      price: 1.0
    },
    {
      id: 2,
      title: "Bread",
      img: item2,
      price: 0.8
    },
    {
      id: 3,
      title: "Milk",
      img: item3,
      price: 1.15
    },
    {
      id: 4,
      title: "Soup",
      img: item4,
      price: 0.65
    }
  ],
  addedItems: [],
  total: 0
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedItem = state.items.find(item => item.id === action.id);
      let existed_item = state.addedItems.find(item => action.id === item.id);
      if (existed_item) {
        addedItem.quantity += 1;
        console.log(addedItem)
        return {
          ...state,
          total: state.total + addedItem.price
        };
      } else {
        addedItem.quantity = 1;
        //calculating total
        console.log(addedItem)
        let newTotal = state.total + addedItem.price;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal
        };
        
      }
    
    default:
      return state;
  }
};

export default reducer;
