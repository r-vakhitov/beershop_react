import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket} from "../../redux/actions";
import "./Item.css";

function Item({ content, id }) {
  const {inBasket} = useSelector((state) => state.catalog.items.columns);
  const dispatch = useDispatch();

  const addHandler = (e) => {
    dispatch(addToBasket(e.target.id))
  }
  const removeHandler = (e) => {
    dispatch(removeFromBasket(e.target.id))
  }

  const isNotInBasket = !inBasket.itemsIds.includes(id);

  const button = isNotInBasket ? (
    <button
      id={id}
      onClick={addHandler}
      type="button"
      className="item__btn item__btn--basket"/>
  ) : (
    <button
      id={id}
      onClick={removeHandler}
      type="button"
      className="item__btn item__btn--rmv"
    />);
  
  return  (
    <div className="item">
      <span className="item__name">{content}</span>
      {button}
    </div>
  );
}

export default Item;
