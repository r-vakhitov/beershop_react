// import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./types";

// const initialState = {
//   items: [],
// };

// export const basketReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_BASKET:
//       if (Array.isArray(action.payload)) {
//         return {
//           ...state,
//           items: [...state.items, ...action.payload],
//         };
//       }
//       return {
//         ...state,
//         items: [...state.items, ...action.payload],
//       };
//     case REMOVE_FROM_BASKET:
//       return {
//         ...state,
//         items: [
//           ...state.items.slice(0, +action.payload),
//           ...state.items.slice(++action.payload),
//         ],
//       };
//     default:
//       return state;
//   }
// };
