import { DropResult } from "react-beautiful-dnd";

export const FETCH_CATALOG = "FETCH_CATALOG";
export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";
export const ADD_ALL_TO_BASKET = "ADD_ALL_TO_BASKET";
export const REMOVE_ALL_FROM_BASKET = "REMOVE_ALL_FROM_BASKET";
export const DRAG_ITEM = "DRAG_ITEM";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const ON_INPUT = "ON_INPUT";
export const FETCH_CLICK = "FETCH_CLICK";

interface ITemp {
  value: number;
  unit: string;
}

export interface IBeerCard {
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: ITemp;
  boil_volume: ITemp;
  method: {
    mash_temp: {
        temp: ITemp;
        duration: any;
      }[];
    fermentation: {
      temp: ITemp;
    };
    twist: any;
  };
  ingredients: {
    malt: any[];
    hops: any[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface IColumns {
  inStock: {
    id: string;
    itemsIds: any[];
  };
  inBasket: {
    id: string;
    itemsIds: any[];
  };
}

interface IItems {
  columns: IColumns
  byIds: {
    [index: string]: IBeerCard;
  };
}

export interface ItemsState {
  items: IItems;
}

export interface SimpleItemsAction {
  type: string;
}

export interface FetchItemsAction {
  type: typeof FETCH_CATALOG;
  payload: IItems;
}

export interface AllToBasketAction {
  type: string;
  payload: string[];
}

export interface OneToBasketAction {
  type: string;
  payload: string;
}

export interface OnInputAction {
  type: typeof ON_INPUT;
  payload: string;
}

export interface OnDragAction {
  type: typeof DRAG_ITEM;
  result: DropResult;
}

export type ItemsAction = SimpleItemsAction | FetchItemsAction | AllToBasketAction | OneToBasketAction | OnInputAction | OnDragAction;

export interface IAppState {
  loading: boolean;
}

export interface IAppAction {
  type: typeof SHOW_LOADER | typeof HIDE_LOADER;
  payload: boolean;
}

export interface IFetchClickState {
  clicked: boolean;
}

export interface IFetchClickAction {
  type: typeof FETCH_CLICK;
  payload: boolean;
}

export interface IStoreState {
  catalog: ItemsState;
  app: IAppState;
  button: IFetchClickState;
}