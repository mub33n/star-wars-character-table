import { METHOD, Headers, URL } from "./Constants";

export const getPeopleWithHomePlanet = async (page = 1) => {
  try {
    const url = `${URL}/people/?page=${page}`;
    const response = await fetchData(url);
    const { results } = await response;
    const data = await Promise.all(
      results.map(async (result) => {
        const { homeworld } = result;
        const home = await fetchData(homeworld);
        return {
          person: result,
          home,
        };
      })
    );
    return data;
  } catch (err) {
    return err;
  }
};

export const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      method: METHOD.GET,
      headers: Headers,
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
