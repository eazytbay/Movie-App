import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div style={styles.card}>
        <img
          src={movie.posterURL}
          alt={movie.title}
          style={styles.image}
          onError={(e) => {
            e.target.src = "/placeholder.jpg";
          }}
        />

        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>⭐ {movie.rating}</p>
      </div>
    </Link>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    width: "250px",
    margin: "10px",
    cursor: "pointer",
    transition: "transform 0.2s"
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "5px"
  }
};

export default MovieCard;