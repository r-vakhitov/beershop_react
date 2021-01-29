import { FETCH_CATALOG, DRAG_ITEM, ADD_ALL_TO_BASKET, REMOVE_ALL_FROM_BASKET, ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./types";

const initialState = {
  items: {
    columns: {
      "inStock":{ 
        id: "inStock",
        itemsIds: [],
        },
      "inBasket": { 
        id: "inBasket",
        itemsIds: [],
        },
    },
    byIds: {},
  },
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_CATALOG:
      return {
        ...state,
        items: action.payload,
      };

    case DRAG_ITEM:
      const {destination, source, draggableId} = action.result;

      if (!destination) {
        return state;
      }
      if (
        destination.droppableId === source.droppableId
        && destination.index === source.index
      ) {
        return state;
      }

      const start = state.items.columns[source.droppableId];
      const finish = state.items.columns[destination.droppableId]

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

    case ADD_ALL_TO_BASKET:
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

      
    case REMOVE_ALL_FROM_BASKET: 

        return {
          ...state,
          items: {
            byIds: {
              ...state.items.byIds
              },
            columns: {
              "inStock": {
                id: "inStock",
                itemsIds: [...state.items.columns.inStock.itemsIds, ...action.payload]
              },
              "inBasket": {
                id: "inBasket",
                itemsIds: []
              }
            }
          }
        };

      case ADD_TO_BASKET:
  
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

      case REMOVE_FROM_BASKET:
  
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

    default:
      return state;
  }
};
