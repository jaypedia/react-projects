import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './Home.css';

function Home() {
  const [movies, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let completed = false;
    const getMovies = async () => {
      const response = await axios.get('http://localhost:4000/movies');
      //  setMovie(response.data);
      if (!completed) {
        setMovie(response.data);
        setIsLoading(false);
      }
    };
    getMovies();
    return () => {
      completed = true;
    };
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...🎬</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                director={movie.director}
                categories={movie.categories}
                rating={movie.rating}
                poster={movie.imageUrl}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Home;
