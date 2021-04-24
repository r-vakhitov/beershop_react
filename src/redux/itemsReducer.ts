import { ItemsState, ItemsAction, FetchItemsAction, AllToBasketAction, OneToBasketAction, OnInputAction } from "src/types/types";
import { FETCH_CATALOG, DRAG_ITEM, ADD_ALL_TO_BASKET, REMOVE_ALL_FROM_BASKET, ADD_TO_BASKET, REMOVE_FROM_BASKET, ON_INPUT } from "../types/types";

const initialState : ItemsState = {
  items: {
    columns: {
      inStock: { 
        id: "inStock",
        itemsIds: [],
        },
      inBasket: { 
        id: "inBasket",
        itemsIds: [],
        },
    },
    byIds: {},
  },
};

export const itemsReducer = (state = initialState, action: ItemsAction) : ItemsState => {
  switch (action.type) {

    case FETCH_CATALOG:
      return fetchCatalogReducer(state, action as FetchItemsAction);

    case DRAG_ITEM:
      return dragItemReducer(state, action);
      
    case ADD_ALL_TO_BASKET:
      return addAllToBasketReducer(state, action as AllToBasketAction);

    case REMOVE_ALL_FROM_BASKET: 
      return removeAllFromBasketReducer(state, action as AllToBasketAction);
        
    case ADD_TO_BASKET:
      return addToBasketReducer(state, action as OneToBasketAction);
      
    case REMOVE_FROM_BASKET:
      return removeFromBasketReducer(state, action as OneToBasketAction);

    case ON_INPUT:
      return onInputReducer(state, action as OnInputAction);

    default:
      return state;
  }
};


// FETCH_CATALOG

const fetchCatalogReducer = (state : ItemsState, action: FetchItemsAction) => {
  return {
    ...state,
    items: action.payload,
  }
}


// DRAG_ITEM

const dragItemReducer = (state : ItemsState, action: ItemsAction) => {
  const {destination, source, draggableId} = (action as any).result;

  if (!destination) {
    return state;
  }
  
  if (
    destination.droppableId === source.droppableId
    && destination.index === source.index
  ) {
    return state;
  }

  const start = (state.items.columns as any)[source.droppableId];
  const finish = (state.items.columns as any)[destination.droppableId]

  if (start === finish) {
    const newItemsIds = [...start.itemsIds];
    newItemsIds.splice(source.index, 1);
    newItemsIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...start,
      itemsIds: newItemsIds
    }

    return {
      ...state,
      items: {
        columns: {
        ...state.items.columns,
        [newColumn.id]: newColumn
        },
        byIds: {
        ...state.items.byIds
        }
      }
    }
  }

  const startItemsId = [...start.itemsIds];
  startItemsId.splice(source.index, 1);
  const startColumn = {
    ...start,
    itemsIds: startItemsId
  }

  const finishItemsId = [...finish.itemsIds];
  finishItemsId.splice(destination.index, 0, draggableId);
  const finishColumn = {
    ...finish,
    itemsIds: finishItemsId
  }

  return {
    ...state,
    items: {
      columns: {
      ...state.items.columns,
      [startColumn.id]: startColumn,
      [finishColumn.id]: finishColumn
    },
    byIds: {
      ...state.items.byIds
      }
    }
  }
}


// ADD_ALL_TO_BASKET

const addAllToBasketReducer = (state : ItemsState, action: AllToBasketAction) => {
  return {
    ...state,
    items: {
      ...state.items,
      columns: {
        "inStock": {
          id: "inStock",
          itemsIds: []
        },
        "inBasket": {
          id: "inBasket",
          itemsIds: [...state.items.columns.inBasket.itemsIds, ...action.payload]
        }
      }
    }
  };
}



// REMOVE_ALL_FROM_BASKET

const removeAllFromBasketReducer = (state : ItemsState, action: AllToBasketAction) => {
  return {
    ...state,
    items: {
      byIds: {
        ...state.items.byIds
        },
      columns: {
        "inStock": {
          id: "inStock",
          itemsIds: [...action.payload, ...state.items.columns.inStock.itemsIds]
        },
        "inBasket": {
          id: "inBasket",
          itemsIds: []
        }
      }
    }
  };
}

// ADD_TO_BASKET

const addToBasketReducer= (state : ItemsState, action: OneToBasketAction) => {
  const addedItemIdx = state.items.columns.inStock.itemsIds.indexOf(action.payload);

  return {
    ...state,
    items: {
      byIds: {
        ...state.items.byIds
        },
      columns: {
        "inStock": {
          id: "inStock",
          itemsIds: [...state.items.columns.inStock.itemsIds.slice(0, addedItemIdx), ...state.items.columns.inStock.itemsIds.slice(addedItemIdx+1)]
        },
        "inBasket": {
          id: "inBasket",
          itemsIds: [...state.items.columns.inBasket.itemsIds, action.payload]
        }
      }
    }
  };
}



// REMOVE_FROM_BASKET

const removeFromBasketReducer= (state : ItemsState, action: OneToBasketAction) => {
  const removedItemIdx = state.items.columns.inBasket.itemsIds.indexOf(action.payload);

  return {
    ...state,
    items: {
      byIds: {
        ...state.items.byIds
        },
      columns: {
        "inStock": {
          id: "inStock",
          itemsIds: [action.payload, ...state.items.columns.inStock.itemsIds]
        },
        "inBasket": {
          id: "inBasket",
          itemsIds: 
            [...state.items.columns.inBasket.itemsIds.slice(0, removedItemIdx), 
            ...state.items.columns.inBasket.itemsIds.slice(removedItemIdx+1)]
        }
      }
    }
  };
}


// ON_INPUT

const onInputReducer= (state : ItemsState, action: OnInputAction) => {
  const searchText = action.payload ? action.payload : ""
  return{
    ...state,
    items: {
      ...state.items,
      columns: {
        ...state.items.columns,
        "inStock": {
          id: "inStock",
          itemsIds: [
            ...Object.keys(state.items.byIds).filter((key: string) => {
              return state.items.byIds[key].name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 &&
                      state.items.columns.inBasket.itemsIds.indexOf(key) === -1
            })
          ]
        }
      },
    },
  }
}

