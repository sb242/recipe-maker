import "./Recipe.css";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

import React from "react";

export default function Recipe() {
  const params = useParams();
  const url = `http://localhost:3000/recipes/${params.id}`;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && <h1>{recipe.title}</h1>}
    </div>
  );
}
