import { constants } from "../reducers/cart";

export const addPizzaToCart = (pizzaObj) => ({
    type: constants.ADD_PIZZA_CART,
    payload: pizzaObj,
});