import React, { MouseEvent } from "react";
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
  const addHandler = (e: MouseEvent) => {
    dispatch(addToBasket((e.target as HTMLElement).id))
  }
  const removeHandler = (e: MouseEvent) => {
    dispatch(removeFromBasket((e.target as HTMLElement).id))
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
