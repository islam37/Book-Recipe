import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import API_BASE from "../config";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE}/recipes/${id}`);
        
        if (!response.ok) {
          // More specific error handling
          if (response.status === 404) {
            throw new Error("Recipe not found");
          } else if (response.status === 500) {
            throw new Error("Server error - please try again later");
          } else {
            throw new Error(`Failed to fetch recipe: ${response.status} ${response.statusText}`);
          }
        }
        
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
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
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Error: {error}</div>
          <Link 
            to="/all-recipes" 
            className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl mb-4">Recipe not found</div>
          <Link 
            to="/recipes" 
            className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-24">
      {/* Image with error handling */}
      <div className="w-full h-64 mb-4 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
        {recipe.image && !imageError ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-gray-500 text-lg">No image available</div>
        )}
      </div>

      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-gray-600 mb-2">Cuisine: {recipe.cuisine || recipe.cuisineType || "Not specified"}</p>
      <p className="text-gray-600 mb-2">Preparation Time: {recipe.prepTime} mins</p>
      <p className="text-gray-600 mb-2">Likes: {recipe.likes || 0}</p>

      <h2 className="text-xl font-semibold mt-4">Ingredients:</h2>
      <div className="mb-4 whitespace-pre-line">{recipe.ingredients}</div>

      <h2 className="text-xl font-semibold">Instructions:</h2>
      <div className="whitespace-pre-line">{recipe.instructions}</div>
      
      <div className="mt-6">
        <Link 
          to="/recipes" 
          className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
        >
          Back to All Recipes
        </Link>
      </div>
    </div>
  );
}