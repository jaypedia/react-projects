import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({
  id,
  title,
  year,
  summary,
  director,
  categories,
  rating,
  imageUrl,
  description,
}) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/detail/${id}`,
          state: {
            title,
            year,
            director,
            categories,
            rating,
            imageUrl,
            description,
          },
        }}
      >
        <img src={imageUrl} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title-year">
            {title} ({year})
          </h3>
          <h4 className="movie__rating">✿ {rating}</h4>
          <h3 className="movie__director">{director}</h3>
          <ul className="movie__categories">
            {categories.map((category, index) => {
              return (
                <li className="categories__category" key={index}>
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
