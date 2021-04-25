import React, { useState, useEffect, Dispatch, FormEvent, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { onInputSearch } from '../../redux/actions';
import useDebounce from '../../customHooks';
import "./SearchPanel.css";
import { Action } from 'redux';

function SearchPanel({onInput}: {
    onInput: (text: string) => void;
}) {

    const [term, setTerm] = useState("");

    const debouncedSearchTerm = useDebounce(term, 300);

    useEffect(() => onInput(debouncedSearchTerm) , [debouncedSearchTerm, onInput]);


    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTerm(e.target.value)
    }

    return (
        <input
            className="search-input"
            type="text"
            placeholder="type to search"
            value={term}
            onChange={inputHandler}
        />
    );
}


const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        onInput: (text: string) => {
            dispatch(onInputSearch(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchPanel)