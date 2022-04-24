import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name:</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;
