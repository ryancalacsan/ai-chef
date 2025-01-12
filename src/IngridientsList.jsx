export default function IngredientsList(props) {
  const ingredientListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ))

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list">{ingredientListItems}</ul>
      <div className="getRecipeContainer">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={props.toggleRecipeShown}>Get a recipe</button>
      </div>
    </section>
  )
}
