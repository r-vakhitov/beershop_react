import { FETCH_CATALOG, HIDE_LOADER, SHOW_LOADER } from "./types";

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
      const namedCatalog = itemsIds.map((id) => {
        return {
          id,
          name: byIds[id].name,
        };
      });
      dispatch({ type: FETCH_CATALOG, payload: namedCatalog });
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
