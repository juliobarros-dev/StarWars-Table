import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';
import { FILTER_TEXT } from '../services/Constants';

export default function AppliedFiltersList(props) {
  const { data, id, name, onClick } = props;
  return (
    <section className="order-section">
      { data.length > 0 ? <p>{ FILTER_TEXT }</p> : null}
      <ul
        className="pure-menu-list"
        id={ id }
        name={ name }
      >
        { data.map((item) => (
          <li
            className="pure-menu-item"
            key={ uuid() }
          >
            <span>{ `${item.column} ${item.comparison} ${item.value}` }</span>
            <button
              className="button-error"
              onClick={ () => onClick(item.column) }
              type="button"
            >
              X
            </button>
          </li>
        )) }
      </ul>
    </section>
  );
}

AppliedFiltersList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

AppliedFiltersList.defaultProps = {
  data: [],
};
