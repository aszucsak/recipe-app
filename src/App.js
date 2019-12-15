import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = "84546ea4";
  const APP_KEY = "6f3df38aebded52d7e03a0526696c6b4";
  const queryPath = "https://api.edamam.com/search?";

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch(
          `${queryPath}q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await result.json();
        console.log(data);
        const recipeList = data.hits.map(hit => hit.recipe);
        setRecipes(recipeList);
      } catch (error) {
        console.log("error fetching data: ", error);
      }
    }
    fetchData();
  }, [query]);

  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={handleSearch}
        />
        <input type="submit" value="Search" className="search-submit" />
      </form>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <Recipe
            title={recipe.label}
            calories={recipe.calories}
            key={recipe.uri}
            weight={recipe.totalWeight}
            img={recipe.image}
            ingredients={recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
