# 🍳 AI Chef  

AI Chef is a web application that allows users to generate AI-crafted recipes by inputting ingredients. Powered by the **Hugging Face platform** and the **Mistral AI model**, AI Chef helps users explore creative culinary ideas with ease. Designed with modern web technologies, the app offers a seamless and intuitive user experience.  

## 🚀 Features  
👉 **AI-Generated Recipes** – Enter ingredients and receive unique recipe suggestions.  
👉 **Smart AI Integration** – Uses advanced AI models to craft creative dishes.  
👉 **Responsive Design** – Works smoothly across various devices.  
👉 **Fast & Lightweight** – Built with Vite for quick performance.  

## 🛠 Tech Stack  
- **Frontend**: React, Vite, JavaScript, HTML5, CSS3, TailwindCSS  
- **AI Model**: Hugging Face **Mistral AI**  
- **Deployment**: Netlify  

## 🏰 Architecture Overview  
AI Chef follows a simple **client-server architecture**, leveraging the Hugging Face API for AI-generated recipes. Below is a high-level overview of how it works:  

1. **User Inputs Ingredients**  
   - Users enter a list of ingredients into the input field.  

2. **API Request to Hugging Face (Mistral AI Model)**  
   - The frontend sends a request containing the ingredients to the **Hugging Face API**.  
   - API Key authentication is used via `.env` configuration.  

3. **AI-Generated Recipe Response**  
   - The AI processes the ingredients and returns a structured recipe with:  
     - Recipe title  
     - List of ingredients  
     - Step-by-step instructions  

4. **Rendering the Recipe on the UI**  
   - The frontend receives the AI response and dynamically displays the recipe.  

### 🔄 Data Flow Diagram  
```plaintext
User Inputs Ingredients → Sends Request to Hugging Face API (Mistral AI) →  
Receives AI-Generated Recipe → Displays Recipe on UI
```

## 💾 Installation & Setup  
Follow these steps to set up AI Chef locally:  

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```  
2. **Navigate into the project directory:**  
   ```bash
   cd your-repo
   ```  
3. **Create an environment file (`.env`)** and add your Hugging Face API Key:  
   ```plaintext
   VITE_HF_API_KEY=your-api-key-here
   ```  
4. **Install dependencies:**  
   ```bash
   npm install
   ```  
5. **Start the development server:**  
   ```bash
   npm run dev
   ```  

🚀 The app should now be running on `http://localhost:5173`.  

## 🎯 Usage  
1. Open AI Chef in your browser.  
2. Enter a list of ingredients in the input field.  
3. Click to generate AI-crafted recipes.  
4. Explore and experiment with new dish ideas!  

## 🌍 Deployment  
AI Chef is deployed on **Netlify** and can be accessed here:  
👉 [ai-chef-dev.netlify.app](https://ai-chef-dev.netlify.app)  

## 🛠 Future Features  
🛠️ **Upcoming improvements:**  
- 🔒 **User Authentication** (Firebase/Auth0) to save user preferences.  
- 📌 **Save Favorite Recipes** to revisit later.  
- 🍽️ **Ingredient-Based Filtering** for tailored results.  
- 🌍 **AI Model Customization** to suggest cuisines.  
- 📲 **Social Sharing** (Twitter, Facebook) for easy recipe sharing.  

## 🤝 Contributing  
We welcome contributions! To contribute:  

1. **Fork** this repository.  
2. **Create a new branch** for your feature/fix:  
   ```bash
   git checkout -b feature-name
   ```  
3. **Commit your changes** with a clear message:  
   ```bash
   git commit -m "Add feature-name"
   ```  
4. **Push to your branch**:  
   ```bash
   git push origin feature-name
   ```  
5. **Open a pull request** – we'll review and merge!  

## 📝 License  
This project is licensed under the **GNU General Public License v3.0**. See the [LICENSE](./LICENSE) file for details.  
