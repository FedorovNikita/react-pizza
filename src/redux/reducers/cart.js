export const constants = {
  SET_TOTAL_PRICE: "SET_TOTAL_PRICE",
  SET_TOTAL_COUNT: "SET_TOTAL_COUNT",
  ADD_PIZZA_CART: "ADD_PIZZA_CART",
};

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    // case constants.SET_TOTAL_PRICE:
    //   return {
    //     ...state,
    //     totalPrice: action.payload,
    //   };
    // case constants.SET_TOTAL_COUNT:
    //   return {
    //     ...state,
    //     totalCount: action.payload,
    //   }
    case constants.ADD_PIZZA_CART: {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      // const totalCount = Object.values(newItems).reduce((sum, value) => sum += value.length, 0);
      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((sum, value) => sum += value.price, 0);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }
    default:
      return state;
  }
};

export default cart;
