import axios from "axios";

export const fetchPizzas = (category, sortBy) => (dispatch, state) => {
  dispatch(setLoaded(false));
  const urlCategory = category !== null ? 'category=' + category : '';
  axios.get(`http://localhost:3004/pizzas?${urlCategory}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setLoaded = (value) => ({
  type: "SET_LOADED",
  payload: value,
});

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
