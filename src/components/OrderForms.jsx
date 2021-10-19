import React, { useContext } from 'react';
import Input from './Input';
import MyContext from '../context/Context';
import Select from './Select';
import { COLUMNS_FILTER } from '../services/Constants';

export default function OrderForms() {
  const consumer = useContext(MyContext);
  const { orderField, setOrderField, setOrderRule } = consumer;

  const columnOrderProps = {
    dataDisplay: ['Nome', ...Object.values(COLUMNS_FILTER)],
    dataValue: ['name', ...Object.keys(COLUMNS_FILTER)],
    id: 'columnOrder',
    label: 'Ordenar por: ',
    name: 'column',
    onChange: ({ target: { value } }) => setOrderField(value),
    onClick: ({ target: { value } }) => setOrderField(value),
    value: orderField,
  };

  const ascInputProps = {
    id: 'ascOrder',
    label: 'Crescente',
    name: 'seletor',
    onChange: ({ target: { value } }) => setOrderRule(value),
    onClick: ({ target: { value } }) => setOrderRule(value),
    type: 'radio',
    value: 'ASC',
  };

  const descInputProps = {
    id: 'descOrder',
    label: 'Decrescente',
    name: 'seletor',
    onChange: ({ target: { value } }) => setOrderRule(value),
    onClick: ({ target: { value } }) => setOrderRule(value),
    type: 'radio',
    value: 'DESC',
  };

  return (
    <form className="pure-form orderForm">
      <Select { ...columnOrderProps } />
      <Input { ...ascInputProps } />
      <Input { ...descInputProps } />
    </form>
  );
}
