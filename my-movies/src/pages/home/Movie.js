import React from 'react';
import './Movie.css';

function Movie({
  id,
  title,
  year,
  summary,
  director,
  categories,
  rating,
  poster,
}) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
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
    </div>
  );
}

export default Movie;
