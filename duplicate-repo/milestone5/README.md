# Setting up a React project

## Environment Setup
- I set up a React project using Vite and configured Tailwind CSS for styling.

## Steps followed
1. Created a React project using Vite: npm create vite@latest react-practice -- --template react
2. Navigated to the project directory: cd react-practice
3. Installed the project dependencies: npm install
4. Installed Tailwind CSS and its Vite plugin: npm install tailwindcss @tailwindcss/vite
5. Updated vite.config.js to include the Tailwind CSS plugin.
5. Replaced the default CSS in src/index.css with: @import "tailwindcss";
6. Updated App.jsx using Tailwind CSS utility classes to verify that the styling worked correctly.

## Running the Project
- Start the development server using: npm run dev
- Open the localhost URL displayed in the terminal to view the application.