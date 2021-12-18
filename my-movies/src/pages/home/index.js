import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './index.css';
import Searchbar from './Searchbar';
import AddBtn from './AddBtn';
import { Row, Pagination } from 'antd';

const PAGE_LIMIT = 4;

function Home() {
  const [movies, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState();
  const [ganre, setGanre] = useState();
  const [_page, setPage] = useState(1);
  const [_sort, setSort] = useState();

  useEffect(() => {
    let completed = false;
    const getMovies = async title => {
      const response = await axios.get('http://localhost:4000/movies', {
        params: { title, ganre, _page, _sort, _limit: PAGE_LIMIT },
      });

      if (!completed) {
        setMovie(response.data);
        setIsLoading(false);
      }
    };

    getMovies(inputValue);

    return () => (completed = true);
  }, [inputValue, ganre, _page, _sort]);

  return (
    <section className="container">
      <Row>
        <Searchbar
          onSearch={setInputValue}
          filterGanre={setGanre}
          sort={setSort}
        />
        <AddBtn />
      </Row>
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
      <Pagination defaultCurrent={1} total={30} onChange={setPage} />
    </section>
  );
}

export default Home;
