export function fetchCountries(searchValue) {
  const url = `https://restcountries.com/v3.1/name/${searchValue}?fields=name,capital,languages,population,flags`;

  if (searchValue === "") {
    return Promise.resolve([]);
  }

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching countries:", error);
      return [];
    });
}
  



