import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import AddMovieForm from "../components/AddMovieForm";

const Home = ({
  filteredMovies,
  addMovie,
  setTitleFilter,
  setRatingFilter
}) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 My Movie App</h1>

      <AddMovieForm addMovie={addMovie} />

      <Filter
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Home;