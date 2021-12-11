import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { Layout } from 'antd';
import { useParams } from 'react-router-dom';

function Detail() {
  const { Header, Sider, Content } = Layout;
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
        <Layout>
          <Sider>
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
          </Sider>
          <Layout>
            <Header>
              <div className="detail__title-rating">
                <h1 className="detail__title-year">
                  {movie.title} ({movie.year})
                </h1>
                <h1 className="detail__rating">✿ {movie.rating}</h1>
              </div>
            </Header>
            <Content>
              <div className="detail__summary">{movie.description}</div>
            </Content>
          </Layout>
        </Layout>
      )}
    </div>
  );
}

export default Detail;
