import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';

function Detail() {
  const params = useParams();
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="detail">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...🎬</span>
        </div>
      ) : (
        <Row>
          <Col span={4}>
            <div className="detail__img-director-categories">
              <img
                className="detail__img"
                src={movie.imageUrl}
                alt={movie.title}
              ></img>
              <div className="detail__director">
                <h3 className="detail__director-title">Director</h3>
                <p className="detail__director">{movie.director}</p>
              </div>
              <div className="detail__categories">
                <h3 className="detail__categories-title">Categories</h3>
                <p className="detail__categorie-box">
                  {movie.categories.map((c, i) => {
                    return (
                      <li className="detail__category" key={i}>
                        {c}
                      </li>
                    );
                  })}
                </p>
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
        </Row>
      )}
    </div>
  );
}

export default Detail;
