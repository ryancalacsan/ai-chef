import ReactMarkdown from "react-markdown"

export default function AiRecipe(props) {
  return (
    <section className="recipe" aria-live="polite">
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  )
}
