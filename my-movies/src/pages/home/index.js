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
  const [total, setTotal] = useState();

  useEffect(() => {
    let completed = false;
    const getMovies = async title => {
      const response = await axios.get('http://localhost:4000/movies', {
        params: { title, ganre, _page, _sort, _limit: PAGE_LIMIT },
      });

      // 아이템 총 개수에 맞게 페이지 수 렌더링하기
      // 중복 해결할 수 있는 방법은?
      const totalMovie = await axios.get('http://localhost:4000/movies');

      if (!completed) {
        setTotal(totalMovie.data.length);
        setMovie(response.data);
        setIsLoading(false);
      }
    };

    getMovies(inputValue);

    return () => (completed = true);
  }, [inputValue, ganre, _page, _sort]);

  function handleReload() {
    setInputValue();
    setGanre();
    setPage(1);
    setSort();
  }

  return (
    <section className="container">
      <Row>
        <Searchbar
          onSearch={setInputValue}
          filterGanre={setGanre}
          sort={setSort}
          reload={handleReload}
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
      <Pagination
        defaultCurrent={1}
        onChange={setPage}
        total={total}
        pageSize={PAGE_LIMIT}
      />
    </section>
  );
}

export default Home;
