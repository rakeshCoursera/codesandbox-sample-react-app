import React, { useState } from "react";
import { makeApiCall, makeRandomApiCall } from "./helpers";
import "./styles.css";

export default function App() {
  const [searchVal, setSearchVal] = useState("");
  const [meals, setMeals] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);

  const handleOnChange = event => {
    setSearchVal(event.target.value);
  };

  const handleSearch = async () => {
    const resp = await makeApiCall(searchVal);
    console.log("resp1: ", resp);
    setMeals(resp.meals);
    setRandomMeal([]);
  };

  const handleRandom = async () => {
    const resp = await makeRandomApiCall();
    console.log("resp: ", resp);
    setRandomMeal(resp.meals);
    setMeals([]);
  };

  return (
    <div>
      <h1>Meal search app</h1>
      <input
        name="text"
        type="text"
        placeholder="Search"
        onChange={event => handleOnChange(event)}
        value={searchVal}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleRandom}>Random</button>
      {randomMeal ? (
        <div>
          {randomMeal.map((meal, index) => (
            <div key={index}>
              <h1>{meal.strMeal}</h1>
              <h2>{meal.strArea}</h2>
              <img src={meal.strMealThumb} alt="meal-thumbnail" />
            </div>
          ))}
        </div>
      ) : (
        <p />
      )}
      {meals ? (
        <div>
          {meals.map((meal, index) => (
            <div key={index}>
              <h1>{meal.strMeal}</h1>
              <h2>{meal.strArea}</h2>
              <img src={meal.strMealThumb} alt="meal-thumbnail" />
            </div>
          ))}
        </div>
      ) : (
        <p>
          That meal is not in out database. <br /> Try searching for anothermeal
        </p>
      )}
    </div>
  );
}
