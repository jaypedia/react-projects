import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './index.css';
import Searchbar from './Searchbar';
import { Pagination } from 'antd';

function Home() {
  const [movies, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let completed = false;
    const getMovies = async () => {
      const response = await axios.get('http://localhost:4000/movies');
      if (!completed) {
        setMovie(response.data);
        setIsLoading(false);
      }
    };
    getMovies();
    return () => (completed = true);
  }, []);

  // 코드의 중복
  // inputValue 대소문자 구별 없이 검색할 수 있게 하려면?
  const handleMovieSearch = inputValue => {
    let completed = false;
    const getMovies = async () => {
      const response = await axios.get('http://localhost:4000/movies');
      const filteredMovies = response.data.filter(v =>
        v.title.includes(inputValue)
      );
      if (!completed) {
        setMovie(filteredMovies);
        setIsLoading(false);
      }
    };
    getMovies();
    return () => (completed = true);
  };

  return (
    <section className="container">
      <Searchbar onSearch={handleMovieSearch} />
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...🎬</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => {
            return <Movie key={movie.id} {...movie} />;
          })}
        </div>
      )}
      <Pagination defaultCurrent={1} total={50} />
    </section>
  );
}

export default Home;
