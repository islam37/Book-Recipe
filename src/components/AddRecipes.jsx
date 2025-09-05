import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../components/Context/AuthContext"; // assuming you already have Firebase Auth Context

export default function AddRecipe() {
  const { user } = useContext(AuthContext); // get logged-in user info
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipeData = {
      ...formData,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    try {
      const res = await fetch("http://localhost:3000/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipeData),
      });

      if (res.ok) {
        Swal.fire("Success!", "Recipe added successfully!", "success");
        setFormData({
          image: "",
          title: "",
          ingredients: "",
          instructions: "",
          cuisine: "Italian",
          prepTime: "",
          categories: [],
          likes: 0,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to add recipe", "error");
    }
  };

  return (
    <div className="mt-24 max-w-3xl mx-auto bg-gray-50 shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-2 rounded bg-white text-gray-800 placeholder-gray-500"
          required
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Recipe Title"
          className="w-full border p-2 rounded bg-white text-gray-800 placeholder-gray-500"
          required
        />
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          placeholder="Ingredients (comma separated)"
          className="w-full border p-2 rounded bg-white text-gray-800 placeholder-gray-500"
          required
        />
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          placeholder="Instructions"
          className="w-full border p-2 rounded bg-white text-gray-800 placeholder-gray-500"
          required
        />

        {/* Cuisine Dropdown */}
        <select
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          className="w-full border p-2 rounded bg-white text-gray-800"
        >
          <option>Italian</option>
          <option>Mexican</option>
          <option>Indian</option>
          <option>Chinese</option>
          <option>Others</option>
        </select>

        <input
          type="number"
          name="prepTime"
          value={formData.prepTime}
          onChange={handleChange}
          placeholder="Preparation Time (minutes)"
          className="w-full border p-2 rounded bg-white text-gray-800 placeholder-gray-500"
          required
        />

        {/* Categories */}
        <div>
          <p className="font-semibold mb-2 text-gray-800">Categories:</p>
          {categoriesList.map((cat) => (
            <label key={cat} className="mr-4 text-gray-700">
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

        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}