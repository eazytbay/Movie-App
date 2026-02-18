import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div style={styles.card}>
      <img src={movie.posterURL} alt={movie.title} style={styles.image} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    width: "250px",
    margin: "10px"
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "5px"
  }
};

export default MovieCard;
