import React from "react";
import "./Recipe.css";

export default function Recipe({ title, calories, weight, img }) {
  const calPerHundredGram = parseInt((calories / weight) * 100);

  return (
    <div className="recipe-card">
      <h1>{title}</h1>
      <p>{calPerHundredGram} kCal per 100g</p>
      <img src={img} alt={title} width="300" />
    </div>
  );
}
