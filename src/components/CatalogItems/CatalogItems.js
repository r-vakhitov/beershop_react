import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog, addToBasket, dragItem, removeFromBasket } from "../../redux/actions";
import Loader from "../Loader";
import ItemsContainer from "../ItemsContainer";

import "./CatalogItems.css";

const CatalogItems = () => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog.items);
  const { columns, byIds } = catalog;
  const { inStock, inBasket } = columns;
  const isLoading = useSelector((state) => state.app.loading);
  const isEmpty = (arr) => !arr.length;

  const addHandler = (e) => {
    if (!!inStock.itemsIds.length) {
      dispatch(addToBasket(inStock.itemsIds));
    }
  };

  const removeHandler = (e) => {
    if (!!inBasket.itemsIds.length) {
      dispatch(removeFromBasket(inBasket.itemsIds));
    }
  };


  if (isLoading) { 
    return <Loader />;
  }

  if (!inStock.itemsIds.length && !inBasket.itemsIds.length) {
    return (
      <button type="button" className="catalog__load-btn" onClick={() => dispatch(fetchCatalog())}>
        Загрузить каталог
      </button>
    );
  }

  const onDragEnd = (result) => {
    dispatch(dragItem(result));
  }

  return (
    <div className="catalog__list">
      <DragDropContext onDragEnd={onDragEnd}>
        <ItemsContainer
          items={inStock.itemsIds}
          byIds={byIds}
          id={inStock.id}
          renderButton={() => {
            return <button type="button" disabled={isEmpty(inStock.itemsIds)} className="catalog__control" onClick={addHandler}>Добавить все</button>;
          }}
        />
        <ItemsContainer
          items={inBasket.itemsIds}
          byIds={byIds}
          id={inBasket.id}
          renderButton={() => {
            return (
              <button type="button" disabled={isEmpty(inBasket.itemsIds)} className="catalog__control" onClick={removeHandler}>Убрать все</button>
            );
          }}
        />
      </DragDropContext>
    </div>
  );
};

export default CatalogItems;
