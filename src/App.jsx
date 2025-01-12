import { useState } from "react"
import Header from "./Header"
import AiRecipe from "./AiRecipe"
import IngredientsList from "./IngridientsList"

const apiKey = import.meta.env.VITE_API_KEY

function App() {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ])

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
  }

  const [recipeShown, setRecipeShown] = useState(false)

  function toggleRecipeShown() {
    setRecipeShown((prevRecipeShown) => !prevRecipeShown)
  }

  return (
    <>
      <Header />
      <form action={addIngredient}>
        <input
          type="text"
          name="ingredient"
          id="ingredientInput"
          placeholder="e.g. garlic"
          aria-label="add ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}
      {recipeShown && <AiRecipe />}
    </>
  )
}

export default App
