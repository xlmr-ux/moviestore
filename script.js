// Sample movie data
const movies = [
  {
    title: "Movie 1",
    releaseYear: 2020,
    description: "This is the description of Movie 1."
  },
  {
    title: "Movie 2",
    releaseYear: 2019,
    description: "This is the description of Movie 2."
  },
  // Add more movie objects here
];

// Function to display movies
function displayMovies() {
  const moviesList = document.getElementById("movies");

  movies.forEach((movie) => {
    const movieItem = document.createElement("li");
    movieItem.innerHTML = `
      <h3>${movie.title}</h3>
      <p><strong>Release Year:</strong> ${movie.releaseYear}</p>
      <p>${movie.description}</p>
    `;
    moviesList.appendChild(movieItem);
  });
}

// Call the displayMovies function when the page is loaded
document.addEventListener("DOMContentLoaded", displayMovies);
