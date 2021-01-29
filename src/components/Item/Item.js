import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../../redux/actions";
import "./Item.css";

function Item({ content, id }) {
  const {inBasket} = useSelector((state) => state.catalog.items.columns);
  const dispatch = useDispatch();
  let btn;
  const addHandler = (e) => {
    dispatch(addToBasket(e.target.id))
  }
  const removeHandler = (e) => {
    dispatch(removeFromBasket(e.target.id))
  }

  const isNotInBasket = inBasket.itemsIds.indexOf(id) === -1;
  if (isNotInBasket) {
    btn = <button id={id} onClick={addHandler} type="button" className="item__btn item__btn--basket"></button>
  } else {
    btn = <button id={id} onClick={removeHandler} type="button" className="item__btn item__btn--rmv"></button>
  }
  
  return  (
            <div className="item">
              <span className="item__name">{content}</span>
              {btn}
            </div>
          );
}

export default Item;
