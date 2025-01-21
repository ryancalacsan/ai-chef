export default function IngredientsList(props) {
  const ingredientListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ))

  return (
    <section className="pt-4">
      <h2 className=" pl-4 font-semibold ">Ingredients on hand:</h2>
      <ul className=" pl-8 pb-8 ingredients-list list-disc">{ingredientListItems}</ul>
      <div className="getRecipeContainer flex flex-col p-4 bg-stone-100 rounded text-sky-900 ">
        <div className=" flex flex-col items-center pb-4" ref={props.ref}>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button className="mx-auto w-6/12 font-bold rounded-md px-3 py-2 bg-orange-700 text-white " onClick={props.getRecipe}>Get a recipe</button>
      </div>
    </section>
  )
}
