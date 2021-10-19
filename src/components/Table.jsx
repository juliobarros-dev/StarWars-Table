import React, { useContext } from 'react';
import { uuid } from 'uuidv4';
import Loading from './Loading';
import MyContext from '../context/Context';
import NoFilterFound from './NoFilterFound';
import { sortPlanetListByName } from '../services/SortFunctions';
import { DISPLAY_TABLE_HEADER } from '../services/Constants';

export default function Table() {
  const value = useContext(MyContext);
  const { planetList, orderField,
    orderRule, isFilter, filters: { filterByName: { name: nameValue } } } = value;

  if (!planetList.length > 0 && isFilter) {
    return (
      <NoFilterFound />
    );
  }

  if (!planetList.length > 0 && nameValue.length > 0) {
    return (
      <NoFilterFound />
    );
  }

  if (!planetList.length > 0) {
    return (
      <Loading />
    );
  }

  const checkFilter = () => {
    if (orderField && orderRule) {
      return sortPlanetListByName(planetList, orderField, orderRule);
    }
    return planetList;
  };

  return (
    <main id="table-main">
      <table className="pure-table pure-table-horizontal">
        <thead>
          <tr>
            { Object.values(DISPLAY_TABLE_HEADER).map((item) => (
              <th key={ item }>{ item }</th>)) }
          </tr>
        </thead>
        <tbody>
          { checkFilter().map((planets) => (
            <tr key={ uuid() }>
              { Object.keys(DISPLAY_TABLE_HEADER).map((header) => (
                <td
                  key={ uuid() }
                  data-testid={ header === 'name' ? 'planet-name' : null }
                >
                  { planets[header] }
                </td>)) }
            </tr>
          )) }
        </tbody>
      </table>
    </main>
  );
}
