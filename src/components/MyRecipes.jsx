import React, { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../components/Context/AuthContext";

export default function MyRecipes() {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    ingredients: "",
    instructions: "",
    cuisine: "Italian",
    prepTime: "",
    categories: [],
    likes: 0,
  });

  const categoriesList = ["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"];

  // Fetch only the recipes added by the current user
  const fetchRecipes = async () => {
    try {
      const res = await fetch("https://recipe-book-server-woad-alpha.vercel.app/recipes");
      const data = await res.json();
      const userRecipes = data.filter((r) => r.userEmail === user?.email);
      setRecipes(userRecipes);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) fetchRecipes();
  }, [user]);

  // Delete recipe - FIXED VERSION
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this recipe?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    });

    if (confirm.isConfirmed) {
      try {
        const response = await fetch(`https://recipe-book-server-woad-alpha.vercel.app/recipes/${id}`, { 
          method: "DELETE" 
        });
        
        if (response.ok) {
          // Remove the recipe from state immediately for better UX
          setRecipes((prev) => prev.filter((r) => r._id !== id));
          Swal.fire("Deleted!", "Recipe has been deleted.", "success");
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to delete recipe");
        }
      } catch (err) {
        console.error("Delete error:", err);
        Swal.fire("Error", err.message || "Failed to delete recipe", "error");
        // Refresh the list in case of error
        fetchRecipes();
      }
    }
  };

  // Open modal for editing
  const handleEdit = (recipe) => {
    setEditingRecipe(recipe._id);
    setFormData({ 
      ...recipe,
      categories: Array.isArray(recipe.categories) ? recipe.categories : []
    });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        categories: checked
          ? [...prev.categories, value]
          : prev.categories.filter((c) => c !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Submit updated recipe
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://recipe-book-server-woad-alpha.vercel.app/recipes/${editingRecipe}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        // Refresh the list after successful update
        fetchRecipes();
        setEditingRecipe(null);
        Swal.fire("Success", "Recipe updated successfully", "success");
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update recipe");
      }
    } catch (err) {
      console.error("Update error:", err);
      Swal.fire("Error", err.message || "Failed to update recipe", "error");
    }
  };

  return (
    <div className="p-6 mt-24">
      <h2 className="text-3xl font-bold mb-6 text-center">My Recipes</h2>
      
      {recipes.length === 0 ? (
        <div className="text-center text-gray-600 py-10">
          You haven't added any recipes yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="bg-white shadow rounded-lg overflow-hidden p-4 flex flex-col"
            >
              <img
                src={recipe.image || "/placeholder-recipe.jpg"}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded mb-3"
                onError={(e) => {
                  e.target.src = "/placeholder-recipe.jpg";
                }}
              />
              <h3 className="font-semibold text-lg">{recipe.title}</h3>
              <p className="text-gray-600 text-sm mb-1">
                Cuisine: {recipe.cuisine}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                Prep Time: {recipe.prepTime} mins
              </p>
              <p className="text-gray-600 text-sm mb-1">
                Categories: {recipe.categories?.join(", ") || "None"}
              </p>
              <p className="text-gray-600 text-sm mb-2">Likes: {recipe.likes || 0}</p>
              <div className="mt-auto flex gap-2">
                <button
                  onClick={() => handleEdit(recipe)}
                  className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(recipe._id)}
                  className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {editingRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg max-h-screen overflow-y-auto">
            <button
              onClick={() => setEditingRecipe(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            
            <h3 className="text-2xl font-bold mb-4">Update Recipe</h3>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                placeholder="Ingredients (comma separated)"
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                placeholder="Instructions"
                className="w-full border p-2 rounded"
                required
              />
              <select
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>
                <option value="Others">Others</option>
              </select>
              <input
                type="number"
                name="prepTime"
                value={formData.prepTime}
                onChange={handleChange}
                placeholder="Preparation Time (minutes)"
                className="w-full border p-2 rounded"
                required
              />

              <div>
                <p className="font-semibold mb-1">Categories:</p>
                <div className="flex flex-wrap gap-2">
                  {categoriesList.map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input
                        type="checkbox"
                        value={cat}
                        checked={formData.categories.includes(cat)}
                        onChange={handleChange}
                        className="mr-1"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setEditingRecipe(null)}
                  className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}