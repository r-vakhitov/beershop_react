import React, { useState, useRef } from 'react';
import { fetchCatalog, onFetchClicked } from "../../redux/actions";
import {useDispatch} from "react-redux";
import './PreloadCatalog.css';


export default function PreloadCatalog() {
  const [allowToClick, setAllow] = useState(false)
  const input1 = useRef<HTMLInputElement>(null);
  const input2  = useRef<HTMLInputElement>(null);
  const inputs = [input1, input2]
  const checkHandler = () => {
    setAllow(inputs.some((input) => input.current !== null && input.current.checked));
  }

  const dispatch = useDispatch();
  const fetchHandler = () => {
    dispatch(fetchCatalog());
    dispatch(onFetchClicked())
  }

  return (
    <div className="preload">
      <div>
        <span className="preload__question">Выберите тип напитка:</span>
        <div className="preload__controls">
          <input className="preload__input" id="pivo" ref={input1} onClick={checkHandler} name="drink" type="radio"/>
          <label htmlFor="pivo">Пиво</label>
          <input className="preload__input" id="beer" ref={input2} onClick={checkHandler} name="drink" type="radio"/>
          <label htmlFor="beer">Beer</label>
        </div>
      </div>
      <button type="button" disabled={!allowToClick} className="preload__btn" onClick={fetchHandler}>
          Загрузить каталог
      </button>
    </div>
  )
}