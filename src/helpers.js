const makeApiCall = async searchInput => {
  const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  const resp = await fetch(searchUrl);
  return resp.json();
};

const makeRandomApiCall = async () => {
  const randomUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
  const resp = await fetch(randomUrl);
  return resp.json();
};

export { makeApiCall, makeRandomApiCall };
