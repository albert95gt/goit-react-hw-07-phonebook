import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const debouncedOnChange = useDebouncedCallback(value => {
    dispatch(changeFilter(value));
  }, 500);

  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name:</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        onChange={e => debouncedOnChange(e.target.value)}
      />
    </>
  );
};

export default Filter;
