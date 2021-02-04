import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { onInputSearch } from '../../redux/actions';
import useDebounce from '../../customHooks/';

function SearchPanel({onInput}) {

    const [term, setTerm] = useState("");

    const debouncedSearchTerm = useDebounce(term, 300);

    useEffect(() => onInput(debouncedSearchTerm) , [debouncedSearchTerm]);


    const inputHandler = (e) => {
      setTerm(e.target.value)
    }

    return (
        <input
            type="text"
            placeholder="type to search"
            value={term}
            onChange={inputHandler}
        />
    );
}


const mapDispatchToProps = dispatch => {
    return {
        onInput: (text) => {
            dispatch(onInputSearch(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchPanel)