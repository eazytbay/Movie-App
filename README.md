📄 README.md
# 🎬 Movie App (React + Vite)

A simple and dynamic Movie Application built with React and Vite.  
This app allows users to view, add, and filter movies based on title and rating.

---

## 🚀 Features

- Display a list of movies
- Add a new movie dynamically
- Filter movies by:
  - Title (case-insensitive search)
  - Minimum rating
- Responsive card-based layout
- Built using modern React Hooks

---

## 🛠️ Built With

- React (Functional Components)
- React Hooks (`useState`)
- Vite (Fast build tool and dev server)
- JavaScript (ES6+)
- CSS (Inline styling)

---

## 📂 Project Structure



src/
├── components/
│ ├── MovieCard.jsx
│ ├── MovieList.jsx
│ ├── Filter.jsx
│ └── AddMovieForm.jsx
├── App.jsx
└── main.jsx


---

## 🧠 Component Overview

### 1️⃣ MovieCard
Displays individual movie information:
- Poster
- Title
- Description
- Rating

### 2️⃣ MovieList
Maps through the movies array and renders MovieCard components.

### 3️⃣ Filter
Allows users to filter movies by:
- Title (text input)
- Rating (minimum value)

### 4️⃣ AddMovieForm
Enables users to:
- Enter movie details
- Submit and dynamically add a new movie to the list

---

## 📊 Movie Data Model

Each movie object follows this structure:

```javascript
{
  id: number,
  title: string,
  description: string,
  posterURL: string,
  rating: number
}

⚙️ Installation & Setup

Clone the repository:

git clone <your-repo-url>


Navigate into the project folder:

cd movie-app


Install dependencies:

npm install


Start the development server:

npm run dev


Open in browser:

http://localhost:5173/

🎯 Learning Objectives

This project demonstrates:

React component architecture

State management using useState

Props drilling

Controlled form inputs

Array methods (map, filter)

Dynamic rendering in React

🔮 Possible Improvements

Add delete functionality

Add edit functionality

Persist movies using localStorage

Improve UI with a CSS framework (Bootstrap / Tailwind)

Add modal for adding movies

Implement star rating UI

👨‍💻 Author

Built as part of a React checkpoint project to practice component design and state management.