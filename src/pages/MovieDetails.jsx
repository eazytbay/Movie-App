import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  // get movie id from URL
  const { id } = useParams();

  // find movie using id
  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  // safety check
  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div style={styles.container}>
      <h1>{movie.title}</h1>

      <img
        src={movie.posterURL}
        alt={movie.title}
        style={styles.image}
      />

      <p style={styles.description}>
        {movie.fullDescription}
      </p>

      <h2>🎬 Trailer</h2>

      <iframe
        width="700"
        height="400"
        src={movie.trailerURL}
        title={movie.title}
        allowFullScreen
        style={styles.video}
      ></iframe>

      <br />

      <Link to="/" style={styles.backBtn}>
        ⬅ Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center"
  },
  image: {
    width: "300px",
    borderRadius: "10px",
    marginBottom: "20px"
  },
  description: {
    maxWidth: "700px",
    margin: "0 auto 20px",
    fontSize: "18px"
  },
  video: {
    borderRadius: "10px"
  },
  backBtn: {
    display: "inline-block",
    marginTop: "20px",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default MovieDetails;