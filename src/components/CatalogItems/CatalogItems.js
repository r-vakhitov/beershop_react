import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { useDispatch, useSelector } from "react-redux";
import { addAllToBasket, dragItem, removeAllFromBasket} from "../../redux/actions";
import Loader from "../Loader";
import ItemsContainer from "../ItemsContainer";
import SearchPanel from "../SearchPanel";

import "./CatalogItems.css";
import PreloadCatalog from "../PreloadCatalog";

const CatalogItems = () => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog.items);
  const { columns, byIds } = catalog;
  const { inStock, inBasket } = columns;
  const isLoading = useSelector((state) => state.app.loading);
  const isEmpty = (arr) => !arr.length;
  const isClicked = useSelector((state) => state.button.clicked)

 

  const addAllHandler = () => {
    if (!!inStock.itemsIds.length) {
      dispatch(addAllToBasket(inStock.itemsIds));
    }
  };

  const removeAllHandler = () => {
    if (!!inBasket.itemsIds.length) {
      dispatch(removeAllFromBasket(inBasket.itemsIds));
    }
  };


  if (isLoading) { 
    return <Loader />;
  }

  if (!isClicked) {
    return (
      <PreloadCatalog />
    );
  }

  const onDragEnd = (result) => {
    dispatch(dragItem(result));
  }

  return (
    <React.Fragment>
      <SearchPanel />
      <div className="catalog__list">
        <DragDropContext onDragEnd={onDragEnd}>
          <ItemsContainer
            items={inStock.itemsIds}
            byIds={byIds}
            id={inStock.id}
            renderButton={() => (
              <button type="button" disabled={isEmpty(inStock.itemsIds)} className="catalog__control" onClick={addAllHandler}>Добавить все</button>
            )}
          />
          <ItemsContainer
            items={inBasket.itemsIds}
            byIds={byIds}
            id={inBasket.id}
            renderButton={() => (
                <button type="button" disabled={isEmpty(inBasket.itemsIds)} className="catalog__control" onClick={removeAllHandler}>Убрать все</button>
            )}
          />
        </DragDropContext>
      </div>
    </React.Fragment>
  );
};

export default CatalogItems;
