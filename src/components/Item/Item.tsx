import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "src/types/types";
import { addToBasket, removeFromBasket} from "../../redux/actions";
import "./Item.css";

function Item({ content, id }: {
  content: string;
  id: string;
}) {
  const {inBasket} = useSelector((state: IStoreState) => state.catalog.items.columns);
  const dispatch = useDispatch();
<<<<<<< HEAD:src/components/Item/Item.tsx
  let btn;
  const addHandler = (e: any) => {
=======

  const addHandler = (e) => {
>>>>>>> 2e933a46b6ca8bc32c5aac2d9cda19e376d56f3b:src/components/Item/Item.js
    dispatch(addToBasket(e.target.id))
  }
  const removeHandler = (e: any) => {
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
