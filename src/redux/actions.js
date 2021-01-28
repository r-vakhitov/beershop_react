import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  FETCH_CATALOG,
  HIDE_LOADER,
  SHOW_LOADER,
  DRAG_ITEM,
} from "./types";

export function fetchCatalog() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(
        "https://api.punkapi.com/v2/beers?per_page=80"
      );
      const json = await response.json();
      const itemsIds = [];
      const byIds = {};
      json.forEach((el) => {
        const { id, ...other } = el;
        itemsIds.push(id);
        byIds[id] = { ...other };
      });
      dispatch({
        type: FETCH_CATALOG,
        payload: {
          columns: {
            "inStock": {
              id: "inStock",
              itemsIds
            },
            "inBasket": {
              id: "inBasket",
              itemsIds: []
            }
          },
          byIds,
        },
      });
      dispatch(hideLoader());
    } catch (e) {
      console.log(e);
    }
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function addToBasket(item) {
  return {
    type: ADD_TO_BASKET,
    payload: item,
  };
}

export function removeFromBasket(idx) {
  return {
    type: REMOVE_FROM_BASKET,
    payload: idx,
  };
}

export function dragItem(result) {
  return {
    type: DRAG_ITEM,
    result,
  };
}
