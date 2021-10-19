export default async function getPlanets(page) {
  const API_URL = `https://swapi-trybe.herokuapp.com/api/planets/?page=${page}`;
  try {
    const response = await fetch(API_URL);
    const { results } = await response.json();
    const resultsFilter = results.map((item) => {
      delete item.residents;
      return item;
    });
    return resultsFilter;
  } catch (error) {
    console.log(error);
  }
}
