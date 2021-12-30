import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({
  id,
  title,
  year,
  director,
  ganre,
  rating,
  imageUrl,
  created,
}) {
  return (
    <div className="movie">
      <Link to={{ pathname: `/detail/${id}` }}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} title={title} />
        ) : (
          <img
            src="https://i.stack.imgur.com/y9DpT.jpg"
            alt={title}
            title={title}
          />
        )}
        <div className="movie__data">
          <h3 className="movie__title-year">
            {title} ({year})
          </h3>
          <h4 className="movie__rating">✿ {rating}</h4>
          <h3 className="movie__director">{director}</h3>
          <p className="movie__ganre">{ganre}</p>
          <p className="movie__created">{created}</p>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
