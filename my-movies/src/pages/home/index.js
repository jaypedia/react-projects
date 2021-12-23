import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './index.css';
import Searchbar from './Searchbar';
import { Row, Pagination, Button } from 'antd';
import MovieModal from '../../components/Modal';

const PAGE_LIMIT = 4;

function Home() {
  const [movies, setMovie] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState(undefined);
  const [ganre, setGanre] = useState(undefined);
  const [_page, setPage] = useState(1);
  const [_sort, setSort] = useState(undefined);
  const [total, setTotal] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [post, setPost] = useState(false);

  // 검색, 장르, 정렬
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
    return () => {
      completed = true;
      setPost(false);
    };
  }, [inputValue, ganre, _page, _sort, post]);

  // For pagination
  useEffect(() => {
    let completed = false;
    const getMovies = async title => {
      const totalMovie = await axios.get('http://localhost:4000/movies', {
        params: { title, ganre },
      });
      if (!completed) {
        setTotal(totalMovie.data.length);
        setIsLoading(false);
      }
    };
    getMovies(inputValue);
    return () => (completed = true);
  }, [inputValue, ganre]);

  const handleReload = () => {
    setInputValue(undefined);
    setGanre(undefined);
    setPage(1);
    setSort(undefined);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCreate = async values => {
    try {
      await axios.post('http://localhost:4000/movies', values);
      setPost(true); // movie re-rendering
    } catch (err) {
      console.log(err);
    }
  };

  const onCreate = values => {
    console.log(values);
    handleCreate(values);
    setIsModalVisible(false);
  };

  return (
    <section className="container">
      <Row>
        <Searchbar
          onSearch={setInputValue}
          filterGanre={setGanre}
          sort={setSort}
          reload={handleReload}
        />
        <Button
          className="add-movies"
          size="large"
          style={{
            backgroundColor: '#c5d2ec',
            borderRadius: '20px',
            fontWeight: 'bold',
          }}
          onClick={showModal}
        >
          Add new movie
        </Button>
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
      <MovieModal
        title="Add New Movie"
        visible={isModalVisible}
        onCancel={handleCancel}
        onCreate={onCreate}
      />
    </section>
  );
}

export default Home;
