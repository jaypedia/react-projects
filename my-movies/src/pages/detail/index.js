import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { Row, Col, Button, Modal } from 'antd';
import { useParams } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';

function Detail({ history }) {
  const params = useParams();
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { confirm } = Modal;

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

  function showDeleteConfirm() {
    confirm({
      title: 'Are you sure delete this movie?',
      icon: <ExclamationCircleOutlined />,
      cancelText: 'No',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        axios
          .delete(`http://localhost:4000/movies/${params.id}`)
          .then(() => history.push('/'))
          .catch(err => {
            console.log(err);
          });
      },
    });
  }

  return (
    <div className="detail">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...🎬</span>
        </div>
      ) : (
        <Row>
          <Col span={4}>
            <div className="detail__img-director-ganre">
              <img
                className="detail__img"
                src={movie.imageUrl}
                alt={movie.title}
              ></img>
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
          <Button>Edit</Button>
          <Button onClick={showDeleteConfirm} type="dashed">
            Delete
          </Button>
        </Row>
      )}
    </div>
  );
}

export default Detail;
