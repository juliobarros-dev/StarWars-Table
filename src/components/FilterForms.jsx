import React, { useState, useContext } from 'react';
import AppliedFiltersList from './AppliedFiltersList';
import DisplayOptions from '../services/AuxiliaryFunctions';
import Input from './Input';
import MyContext from '../context/Context';
import Select from './Select';
import SubmitButton from './SubmitButton';
import { COMPARISON_FILTER_ARRAY } from '../services/Constants';

function FilterForms() {
  const [column, setColuna] = useState('');
  const [comparison, setcomparison] = useState('maior que');
  const [inputValue, setValue] = useState('');
  const consumer = useContext(MyContext);
  const { setName,
    filters: { filterByName: { name: nameValue },
      filterByNumericValues },
    setNumericFilter, setIsFilter } = consumer;

  const handleClick = (event) => {
    event.preventDefault();
    if (!column) return;
    const newObject = {
      column,
      comparison,
      value: inputValue,
    };
    setValue('');
    setNumericFilter([...filterByNumericValues, newObject]);
    setIsFilter(true);
  };

  const deleteFunction = (columnValue) => {
    const newArray = filterByNumericValues
      .filter(({ column: col }) => col !== columnValue);
    setNumericFilter(newArray);
  };

  const nameFilterProps = {
    id: 'nameFilter',
    name: 'name',
    onChange: ({ target: { value } }) => setName(value),
    placeholder: 'Nome do planeta',
    type: 'text',
    value: nameValue,
  };

  const columnFilterProps = {
    dataDisplay: Object.values(DisplayOptions(filterByNumericValues)),
    dataValue: Object.keys(DisplayOptions(filterByNumericValues)),
    id: 'columnFilter',
    label: 'Filtre por: ',
    name: 'column',
    onChange: ({ target: { value } }) => setColuna(value),
    onClick: ({ target: { value } }) => setColuna(value),
    value: column,
  };

  const comparisonFilterProps = {
    dataDisplay: COMPARISON_FILTER_ARRAY,
    dataValue: COMPARISON_FILTER_ARRAY,
    id: 'comparisonFilter',
    label: 'Comparação: ',
    name: 'comparison',
    onChange: ({ target: { value } }) => setcomparison(value),
    onClick: ({ target: { value } }) => setcomparison(value),
    value: comparison,
  };

  const numberInputProps = {
    id: 'numberInput',
    name: 'value',
    onChange: ({ target: { value } }) => setValue(value),
    placeholder: 'Digite apenas números',
    type: 'number',
    value: inputValue,
  };

  const submitButtonProps = {
    className: 'pure-button',
    id: 'confirmFilterButton',
    name: 'filterButton',
    onClick: handleClick,
    text: 'Pesquisar',
  };

  const appliedFiltersListProps = {
    data: filterByNumericValues,
    id: 'appliedFiltersList',
    name: 'appliedFilters',
    onClick: deleteFunction,
  };

  return (
    <div>
      <form className="pure-form">
        <Input { ...nameFilterProps } />
        <Select { ...columnFilterProps } />
        <Select { ...comparisonFilterProps } />
        <Input { ...numberInputProps } />
        <SubmitButton { ...submitButtonProps } />
      </form>
      <AppliedFiltersList { ...appliedFiltersListProps } />
    </div>
  );
}

export default FilterForms;
