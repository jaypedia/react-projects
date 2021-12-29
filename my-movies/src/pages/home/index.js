import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './index.css';
import Searchbar from './Searchbar';
import { Pagination, Button, Row, Col, Modal } from 'antd';
import MovieModal from '../../components/Modal';

const PAGE_LIMIT = 4;

function Home() {
  const [movies, setMovie] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState(undefined);
  const [ganre, setGanre] = useState(undefined);
  const [_page, setPage] = useState(1);
  const [_sort, setSort] = useState(undefined);
  const [_order, setOrder] = useState(undefined);
  const [total, setTotal] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSearchModalVisible, setSearchIsModalVisible] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    const response = await axios.get('http://localhost:4000/movies', {
      params: { title: inputValue, ganre, _page, _limit: PAGE_LIMIT },
    });
    if (response.data.length) {
      setMovie(response.data);
    } else {
      setSearchIsModalVisible(true);
    }
    setIsLoading(false);
  };

  // For sorting by year and rating : asending & desending
  useEffect(() => {
    let completed = false;
    const getMovies = async () => {
      const response = await axios.get('http://localhost:4000/movies', {
        params: { _sort, _order, _limit: PAGE_LIMIT },
      });
      if (!completed) {
        setMovie(response.data);
        setIsLoading(false);
      }
    };
    getMovies();
    return () => (completed = true);
  }, [_sort, _order]);

  useEffect(() => {
    getMovies();
  }, [inputValue, ganre, _page]);

  // For pagination
  useEffect(() => {
    let completed = false;
    const getMovies = async () => {
      const totalMovie = await axios.get('http://localhost:4000/movies', {
        params: { title: inputValue, ganre },
      });
      if (!completed) {
        setTotal(totalMovie.data.length);
        setIsLoading(false);
      }
    };
    getMovies();
    return () => (completed = true);
  }, [inputValue, ganre]);

  const handleResetStates = () => {
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

  const addNewMoive = async values => {
    console.log(values);
    try {
      await axios.post('http://localhost:4000/movies', values);
      getMovies();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreate = values => {
    const time = Date.now();
    const newMoive = {
      ...values,
      time,
      imageUrl: values.upload?.file.response.url,
    };
    console.log('Added movie : ', newMoive);
    addNewMoive(newMoive);
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setSearchIsModalVisible(false);
  };

  return (
    <>
      <Row justify="center">
        <Col>
          <Searchbar
            onSearch={setInputValue}
            filterGanre={setGanre}
            sort={setSort}
            order={setOrder}
            resetStates={handleResetStates}
          />
        </Col>

        <Col>
          <Button
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
        </Col>
      </Row>

      {isLoading ? (
        <div className="loader">
          <span>Loading...🎬</span>
        </div>
      ) : (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {movies.map(movie => {
            return (
              <Col xs={24} sm={12} md={8} xl={6}>
                <Movie key={movie.id} {...movie} />
              </Col>
            );
          })}
        </Row>
      )}

      <Row justify="center">
        <Pagination
          defaultCurrent={1}
          onChange={setPage}
          total={total}
          pageSize={PAGE_LIMIT}
        />
      </Row>

      <MovieModal
        visible={isModalVisible}
        onCancel={handleCancel}
        onCreate={handleCreate}
      />

      <Modal
        title="No result"
        visible={isSearchModalVisible}
        onOk={handleOk}
        cancelButtonProps={{ disabled: true }}
      >
        <p>There is no such movie. Please enter another movie.</p>
      </Modal>
    </>
  );
}

export default Home;
