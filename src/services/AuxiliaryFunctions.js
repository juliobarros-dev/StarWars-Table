import { COLUMNS_FILTER } from './Constants';

export default function DisplayOptions(array = []) {
  if (array.length > 0) {
    const columns = { ...COLUMNS_FILTER };
    const columnsToRemove = array.map((item) => item.column);
    columnsToRemove.forEach((item) => delete columns[item]);
    return columns;
  }
  return COLUMNS_FILTER;
}
