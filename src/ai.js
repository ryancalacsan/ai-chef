import { HfInference } from "@huggingface/inference"

const apiKey = import.meta.env.VITE_HF_API_KEY

const client = new HfInference(apiKey)

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ")
  try {
    const chatCompletion = await client.chatCompletion({
      model: "mistralai/Mistral-7B-Instruct-v0.3",
      messages: [
        {
          role: "system",
          content:
            " You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page",
        },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make`,
        },
      ],
      temperature: 0.5,
      max_tokens: 2048,
      top_p: 0.7,
    })

    return chatCompletion.choices[0].message.content
  } catch (err) {
    console.error(err.message)
  }
}
