import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../redux/actions";
import Loader from "../Loader";
import Item from "../Item";

const CatalogItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.catalog.items);
  const isLoading = useSelector((state) => state.app.loading);

  if (isLoading) {
    return <Loader />;
  }

  if (!items.length) {
    return (
      <button onClick={() => dispatch(fetchCatalog())}>
        Загрузить каталог
      </button>
    );
  }
  return items.map((item) => <Item item={item} key={item.id} />);
};

export default CatalogItems;
