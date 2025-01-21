# Overview
This web application enables users to input ingredients and generate AI-crafted recipes, leveraging the power of the Hugging Face platform and the MintralAI model. Designed with modern web technologies, it provides a user-friendly and efficient experience for exploring creative culinary ideas.

## Features
- Add ingredients to generate recipes.
- Fetch AI-generated recipes using advanced AI models.
- Responsive design for use on various devices.

## Tech Stack
- **Frontend**: React, Vite, JavaScript, HTML5, CSS3, TailwindCSS
- **Deployment**: Netlify

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo
   ```
3. Create a `.env` file in the root directory and add your Hugging Face API Key:
   ```env
   VITE_HF_API_KEY=your-api-key-here
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
1. Visit `http://localhost:5173` in your web browser (default port for Vite).
2. Add ingredients in the provided input field.
3. Fetch AI-generated recipes and explore the results.

## Deployment
The application is deployed on Netlify. You can access it at ai-chef-dev.netlify.app.

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License
This project is licensed under the GNU General Public License v3.0 license. See the LICENSE file for details.