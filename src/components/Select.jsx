import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';

export default function Select(props) {
  const { dataDisplay, dataValue, id, label, name, onClick, onChange, value } = props;
  return (
    <label htmlFor={ id }>
      { label }
      <select
        id={ id }
        name={ name }
        onClick={ onClick }
        value={ value }
        onChange={ onChange }
      >
        { dataDisplay.map((item, index) => (
          <option
            key={ uuid() }
            value={ dataValue[index] }
          >
            { item }
          </option>
        )) }
      </select>
    </label>
  );
}

Select.propTypes = {
  dataDisplay: PropTypes.arrayOf(PropTypes.string),
  dataValue: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

Select.defaultProps = {
  dataDisplay: [],
  dataValue: [],
  onClick: () => {},
  onChange: () => {},
};
