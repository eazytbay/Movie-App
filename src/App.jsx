import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovieForm from "./components/AddMovieForm";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "/inception.jpg",
      rating: 9
    },
    {
      id: 2,
      title: "Breaking Bad",
      description: "A high school teacher turned meth kingpin",
      posterURL: "/breaking-bad.jpg",
      rating: 10
    }
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 My Movie App</h1>

      <AddMovieForm addMovie={addMovie} />
      <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
