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

  // 코드의 중복 문제
  const renderMovie = async () => {
    const response = await axios.get(
      `http://localhost:4000/movies/${params.id}`
    );
    setMovie(response.data);
  };

  useEffect(() => {
    renderMovie();
  }, []);

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

  const editMovie = async values => {
    try {
      await axios.patch(`http://localhost:4000/movies/${params.id}`, values);
      renderMovie();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = values => {
    const time = Date.now();
    // debugger;
    console.log(values);
    const modifiedMovie = {
      ...values,
      time,
      imageUrl: values.upload?.file.response.url,
    };
    editMovie(modifiedMovie);
    setIsModalVisible(false);
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
            <Col xs={24} md={4}>
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
            <Col xs={24} md={20} style={{ padding: '20px' }}>
              <Row>
                <div className="detail__title-rating">
                  <Col span={21}>
                    <h1 className="detail__title-year">
                      {movie.title} ({movie.year})
                    </h1>
                  </Col>
                  <Col span={3}>
                    <h1 className="detail__rating">✿ {movie.rating}</h1>
                  </Col>
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
