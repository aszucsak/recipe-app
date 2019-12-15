import React from "react";
import "./Recipe.css";

export default function Recipe({ title, calories, weight, img, ingredients }) {
  const calPerHundredGram = parseInt((calories / weight) * 100);

  return (
    <div className="recipe-card">
      <h1>{title}</h1>
      <ul className="ingredient-list">
        {ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p>{calPerHundredGram} kCal per 100g</p>
      <img src={img} alt={title} width="250" />
    </div>
  );
}
