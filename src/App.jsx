import { useState, useEffect, useRef } from "react"
import AiRecipe from "./AiRecipe"
import IngredientsList from "./IngridientsList"
import { getRecipeFromMistral } from "./ai"
import { ClipLoader } from "react-spinners"

function App() {
  const [ingredients, setIngredients] = useState([])

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
  }

  const [recipe, setRecipe] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const recipeSection = useRef(null)

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [recipe])

  async function getRecipe() {
    console.log("clicked")
    setIsLoading(true) // Set loading to true
    setError(null) // Reset any previous errors

    try {
      const recipeMarkdown = await getRecipeFromMistral(ingredients)
      setRecipe(recipeMarkdown) // Update recipe state
    } catch (err) {
      console.error("Error fetching recipe:", err)
      setError(err.message || "An unexpected error occurred") // Update error state
    } finally {
      setIsLoading(false) // Stop loading
    }
  }

  return (
    <main className="w-11/12 mx-auto max-w-xl">
      <form className='flex gap-4   mx-auto' action={addIngredient}>
        <input className="shadow w-full border-slate-200 border-2 rounded-md p-2"
          type="text"
          name="ingredient"
          id="ingredientInput"
          placeholder="e.g. garlic"
          aria-label="add ingredient"
        />
        <button className="bg-sky-900 text-sky-100 rounded-md w-40"  >Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {isLoading && (
        <>
          <p className="text-center pt-8 italic text-lg">Your AI Chef is Cooking up a Recipe...</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
            }}
          >
            <ClipLoader color="#3498db" size={50} />
          </div>
        </>
      )}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {recipe && <AiRecipe recipe={recipe} />}
    </main>
  )
}

export default App
