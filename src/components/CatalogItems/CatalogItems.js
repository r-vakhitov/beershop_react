import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog, addToBasket, dragItem } from "../../redux/actions";
import Loader from "../Loader";
import ItemsContainer from "../ItemsContainer";

import "./CatalogItems.css";

const CatalogItems = () => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog.items);
  const { columns, byIds } = catalog;
  const { inStock, inBasket } = columns;
  const isLoading = useSelector((state) => state.app.loading);

  const addHandler = (e) => {
    dispatch(addToBasket(inStock.itemsIds));
  };

  const removeHandler = (e) => {
    console.log(e.target, "Removed!");
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!inStock.itemsIds.length) {
    return (
      <button onClick={() => dispatch(fetchCatalog())}>
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
            return <button onClick={addHandler}>Добавить все</button>;
          }}
        />
        <ItemsContainer
          items={inBasket.itemsIds}
          byIds={byIds}
          id={inBasket.id}
          renderButton={() => {
            return (
              <button onClick={(e) => removeHandler(e)}>Убрать все</button>
            );
          }}
        />
      </DragDropContext>
    </div>
  );
};

export default CatalogItems;
