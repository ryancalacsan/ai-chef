export default function IngredientsList(props) {
  const ingredientListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient} role="listitem">{ingredient}</li>
  ))

  return (
    <section className="pt-4">
      <h2 className=" pl-4 font-semibold ">Ingredients on hand:</h2>
      <ul className=" pl-8 pb-8 ingredients-list list-disc" aria-live="polite">{ingredientListItems}</ul>
      <p onClick={props.clearIngredientList} className="text-center pb-2 text-red-500 hover:underline cursor-pointer">clear my list</p>
      <div className="getRecipeContainer flex flex-col p-4 bg-stone-100 rounded text-sky-900 ">
        <div className=" flex flex-col items-center pb-4" ref={props.ref}>
          <h3 id="recipe-ready-heading">Ready for a recipe?</h3>
          <p aria-describedby="recipe-ready-heading">Generate a recipe from your list of ingredients.</p>
        </div>
        <button className="mx-auto w-6/12 font-bold rounded-md px-3 py-2 bg-orange-700 text-white" aria-labelledby="recipe-ready-heading" onClick={props.getRecipe}>Get a recipe</button>
      </div>
    </section>
  )
}
