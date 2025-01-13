import { useState, useEffect, useRef } from "react"
import AiRecipe from "./AiRecipe"
import IngredientsList from "./IngridientsList"
import { getRecipeFromMistral } from "./ai"

function App() {
  const [ingredients, setIngredients] = useState([])

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
  }

  const [recipe, setRecipe] = useState("")
  const recipeSection = useRef(null)

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [recipe])

  async function getRecipe() {
    console.log("clicked")
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
  }

  return (
    <main>
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
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {recipe && <AiRecipe recipe={recipe} />}
    </main>
  )
}

export default App
