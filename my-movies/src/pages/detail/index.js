import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { Row, Col, Button, Modal } from 'antd';
import { useParams } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import MovieModal from '../../components/Modal';

function Detail({ history }) {
  const params = useParams();
  const [movie, setMovie] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { confirm } = Modal;

  const getMovies = async () => {
    const response = await axios.get(
      `http://localhost:4000/movies/${params.id}`
    );
    setMovie(response.data);
  };
  getMovies();

  useEffect(() => {
    let completed = false;
    const getMovies = async () => {
      const response = await axios.get(
        `http://localhost:4000/movies/${params.id}`
      );
      if (!completed) {
        setMovie(response.data);
        setIsLoading(false);
      }
    };
    getMovies();
    console.log('Edit');
    return () => {
      completed = true;
    };
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/movies/${params.id}`);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this movie?',
      icon: <ExclamationCircleOutlined />,
      cancelText: 'No',
      okText: 'Yes',
      okType: 'danger',
      onOk: handleDelete,
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = async (values, movieId) => {
    setIsModalVisible(false);
    try {
      await axios.patch(`http://localhost:4000/movies/${movieId}`, values);
      getMovies();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="detail">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...🎬</span>
        </div>
      ) : (
        <>
          <Row>
            <Col span={4}>
              <div className="detail__img-director-ganre">
                {movie.imageUrl ? (
                  <img
                    className="detail__img"
                    src={movie.imageUrl}
                    alt={movie.title}
                  ></img>
                ) : (
                  <img
                    className="detail__img"
                    src="https://i.stack.imgur.com/y9DpT.jpg"
                    alt={movie.title}
                  ></img>
                )}
                <div className="detail__director">
                  <h3 className="detail__director-title">Director</h3>
                  <p className="detail__director-name">{movie.director}</p>
                </div>
                <div className="detail__ganre">
                  <h3 className="detail__ganre-title">Ganre</h3>
                  <p className="detail__ganre-type">{movie.ganre}</p>
                </div>
              </div>
            </Col>
            <Col span={20}>
              <Row>
                <div className="detail__title-rating">
                  <h1 className="detail__title-year">
                    {movie.title} ({movie.year})
                  </h1>
                  <h1 className="detail__rating">✿ {movie.rating}</h1>
                </div>
              </Row>
              <Row>
                <div className="detail__summary">{movie.description}</div>
              </Row>
            </Col>
            <Button onClick={showModal}>Edit</Button>
            <Button onClick={showDeleteConfirm} type="dashed">
              Delete
            </Button>
          </Row>
          <MovieModal
            title="Edit movie"
            visible={isModalVisible}
            onCancel={handleCancel}
            onOk={handleEdit}
            movie={movie}
          />
        </>
      )}
    </div>
  );
}

export default Detail;
