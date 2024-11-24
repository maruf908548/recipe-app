import { useState, useEffect } from "react";
import { FaClock, FaFire } from "react-icons/fa";
const RecipeCards = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch the recipe data
  useEffect(() => {
    fetch("recipe.json") // Ensure this file is served in your public directory
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.recipe_id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={recipe.recipe_image}
            alt={recipe.recipe_name}
            className="w-full  h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {recipe.recipe_name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {recipe.short_description}
            </p>
            <p className="text-gray-700 font-semibold mb-2">
              Ingredients ({recipe.ingredients.length}):
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <div className="flex items-center justify-start gap-2 mb-4">
              {/* Preparing Time with Icon */}
              <div className="flex items-center">
                <FaClock className="text-blue-500 mr-2" />
                <span className="text-gray-600 text-sm">
                  {recipe.preparing_time}
                </span>
              </div>
              {/* Calories with Icon */}
              <div className="flex items-center">
                <FaFire className="text-red-500 mr-2" />
                <span className="text-gray-600 text-sm">{recipe.calories}</span>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Want to Cook
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeCards;
