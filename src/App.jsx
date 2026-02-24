import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

function App() {

  // 🎬 MOVIE STATE
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller",
      fullDescription:
        "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into a CEO's mind.",
      posterURL: "/inception.jpg",
      rating: 9,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "Breaking Bad",
      description: "Teacher turned meth kingpin",
      fullDescription:
        "Walter White, a struggling chemistry teacher, partners with a former student to manufacture and sell methamphetamine.",
      posterURL: "/breaking-bad.jpg",
      rating: 10,
      trailerURL: "https://www.youtube.com/embed/HhesaQXLuRY"
    }
  ]);

  // 🔎 FILTER STATE
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  // ➕ ADD MOVIE
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  // 🎯 FILTER LOGIC
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  // 🚦 ROUTES
  return (
    <Routes>

      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <Home
            filteredMovies={filteredMovies}
            addMovie={addMovie}
            setTitleFilter={setTitleFilter}
            setRatingFilter={setRatingFilter}
          />
        }
      />

      {/* MOVIE DETAILS PAGE */}
      <Route
        path="/movie/:id"
        element={<MovieDetails movies={movies} />}
      />

    </Routes>
  );
}

export default App;