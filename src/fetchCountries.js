export function fetchCountries(searchValue) {
  const url = `https://restcountries.com/v3.1/name/${searchValue}?fields=name,capital,languages,population,flags`;

  if (searchValue === "") {
    return;
  }

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data) => {
      if (data.status === 404) {
        throw new Error("Country not found");
      }
      return data;
    })
    .catch((error) => {
      console.error("Error fetching countries:", error);
      return [];
    });
}
  



