Writing
🎬 Movie App — React Router Version

A dynamic Movie Application built with React, Vite, and React Router that allows users to browse movies, view detailed information, watch trailers, and filter movies based on title and rating.

This project demonstrates modern React concepts including component architecture, state management with hooks, and client-side routing.

🚀 Features

✅ Display a list of movies
✅ Add new movies dynamically
✅ Filter movies by title and rating
✅ Clickable movie cards
✅ Dedicated movie details page
✅ Embedded movie trailer playback
✅ Navigation between pages using React Router
✅ Back navigation to home page without reload

🧠 Concepts Practiced

React Functional Components

React Hooks (useState)

Props & State Management

Component Reusability

Conditional Rendering

Array Methods (map, filter)

Single Page Application (SPA) Architecture

Client-Side Routing with React Router

🛠️ Technologies Used

React

Vite

React Router DOM

JavaScript (ES6+)

CSS (Inline Styling)

📂 Project Structure
src/
├── components/
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│   ├── Filter.jsx
│   └── AddMovieForm.jsx
│
├── pages/
│   ├── Home.jsx
│   └── MovieDetails.jsx
│
├── App.jsx
├── main.jsx
└── index.css
🎬 Movie Data Model

Each movie object follows this structure:

{
  id: number,
  title: string,
  description: string,
  fullDescription: string,
  posterURL: string,
  rating: number,
  trailerURL: string
}
🧭 Routing System
Route	Description
/	Home page showing movie list
/movie/:id	Movie description and trailer page

React Router enables seamless navigation without page refresh.

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone <your-repository-url>
2️⃣ Navigate into project
cd movie-app
3️⃣ Install dependencies
npm install
4️⃣ Start development server
npm run dev

Open:

http://localhost:5173
🎥 How It Works

User lands on the Home Page.

Movies are displayed as cards.

User can filter movies by title or rating.

Clicking a movie navigates to its details page.

Trailer is displayed using embedded YouTube video.

User can return to the home page via navigation link.

🔮 Possible Future Improvements

Movie editing functionality

Delete movie feature

LocalStorage persistence

Responsive design improvements

Search debounce optimization

Star rating component

Dark mode UI

👨‍💻 Author - EZEKIEL FOLARIN

Built as part of a React checkpoint project focused on mastering component-based architecture and routing in modern React applications.