import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

// Main Recipes Page Component
export default function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://recipe-book-server-woad-alpha.vercel.app/recipes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch recipes");
        }
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading recipes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-amber-800 border-b-2 border-amber-300 pb-4">
          All Recipes
        </h2>
        
        {recipes.length === 0 ? (
          <div className="text-center text-xl text-gray-600">
            No recipes found. Add some recipes to get started!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Recipe Card Component
function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={recipe.image || "/placeholder-recipe.jpg"}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{recipe.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Cuisine:</span> {recipe.cuisine || "Not specified"}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-medium">Prep Time:</span> {recipe.prepTime} mins
        </p>
        <Link
          to={`/recipes/${recipe._id}`}
          className="inline-block w-full text-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors duration-300"
        >
          See Details
        </Link>
      </div>
    </div>
  );
}

// Recipe Details Component
export function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://recipe-book-server-woad-alpha.vercel.app/recipes/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch recipe details");
        }
        return res.json();
      })
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading recipe details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    );
  }

  // Handle case where recipe might be null
  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Recipe not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Recipe Image */}
        <div className="h-80 overflow-hidden">
          <img
            src={recipe.image || "/placeholder-recipe.jpg"}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-8">
          {/* Recipe Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
          
          {/* Recipe Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-amber-100 p-3 rounded-lg text-center">
              <p className="text-sm text-amber-800 font-semibold">Cuisine</p>
              <p className="text-amber-600">{recipe.cuisine || recipe.cuisineType || "Not specified"}</p>
            </div>
            <div className="bg-amber-100 p-3 rounded-lg text-center">
              <p className="text-sm text-amber-800 font-semibold">Prep Time</p>
              <p className="text-amber-600">{recipe.prepTime} mins</p>
            </div>
            <div className="bg-amber-100 p-3 rounded-lg text-center">
              <p className="text-sm text-amber-800 font-semibold">Likes</p>
              <p className="text-amber-600">{recipe.likes || 0}</p>
            </div>
            <div className="bg-amber-100 p-3 rounded-lg text-center">
              <p className="text-sm text-amber-800 font-semibold">Difficulty</p>
              <p className="text-amber-600">{recipe.difficulty || "N/A"}</p>
            </div>
          </div>
          
          {/* Ingredients Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-amber-300 pb-2">
              Ingredients
            </h2>
            {typeof recipe.ingredients === 'string' ? (
              <p className="whitespace-pre-line">{recipe.ingredients}</p>
            ) : (
              <ul className="list-disc pl-5">
                {recipe.ingredients && recipe.ingredients.map ? (
                  recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-1">{ingredient}</li>
                  ))
                ) : (
                  <p>No ingredients listed</p>
                )}
              </ul>
            )}
          </div>
          
          {/* Instructions Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-amber-300 pb-2">
              Instructions
            </h2>
            {typeof recipe.instructions === 'string' ? (
              <div className="whitespace-pre-line">{recipe.instructions}</div>
            ) : (
              <ol className="list-decimal pl-5">
                {recipe.instructions && recipe.instructions.map ? (
                  recipe.instructions.map((step, index) => (
                    <li key={index} className="mb-3">{step}</li>
                  ))
                ) : (
                  <p>No instructions available</p>
                )}
              </ol>
            )}
          </div>
          
          {/* Back Button */}
          <div className="mt-10 text-center">
            <Link
              to="/recipes"
              className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors duration-300"
            >
              Back to All Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}