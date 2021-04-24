import {
  ADD_ALL_TO_BASKET,
  REMOVE_ALL_FROM_BASKET,
  FETCH_CATALOG,
  HIDE_LOADER,
  SHOW_LOADER,
  DRAG_ITEM,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  ON_INPUT,
  FETCH_CLICK,
  IBeerCard
} from "../types/types";

export function fetchCatalog() {
  return async (dispatch: (obj: object) => void) => {
    try {
      dispatch(showLoader());
      const response = await fetch(
        "https://api.punkapi.com/v2/beers?per_page=80"
      );
      const json = await response.json();
      const itemsIds: string[] = [];
      const byIds: IBeerCard | {} = {};
      json.forEach((el: {id: string} & IBeerCard) => {
        const { id, ...other } = el;
        itemsIds.push(id.toString());
        (byIds as any)[id] = { ...other };
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

export function addAllToBasket(item: string[]) {
  return {
    type: ADD_ALL_TO_BASKET,
    payload: item,
  };
}

export function removeAllFromBasket(item: string[]) {
  return {
    type: REMOVE_ALL_FROM_BASKET,
    payload: item,
  };
}

export function dragItem(result: any) {
  return {
    type: DRAG_ITEM,
    result,
  };
}

export function addToBasket(item: string) {
  return {
    type: ADD_TO_BASKET,
    payload: item,
  };
}

export function removeFromBasket(item: string) {
  return {
    type: REMOVE_FROM_BASKET,
    payload: item,
  };
}

export function onInputSearch(text: string) {
  return {
    type: ON_INPUT,
    payload: text.trim()
  }
}

export function onFetchClicked() {
  return {
    type: FETCH_CLICK,
  }
}