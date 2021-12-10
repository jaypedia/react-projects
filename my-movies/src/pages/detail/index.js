import React from 'react';
import './index.css';

function Detail(props) {
  const { state } = props.location;

  return (
    <div className="detail">
      <div className="detail__img-director-categories">
        <img
          className="detail__img"
          src={state.imageUrl}
          alt={state.title}
        ></img>
        <div className="detail__director">
          <h3 className="detail__director-title">Director</h3>
          <p className="detail__director">{state.director}</p>
        </div>
        <div className="detail__categories">
          <h3 className="detail__categories-title">Categories</h3>
          <p className="detail__categorie-box">
            {state.categories.map((c, i) => {
              return (
                <li className="detail__category" key={i}>
                  {c}
                </li>
              );
            })}
          </p>
        </div>
      </div>
      <div className="detail__title-rating">
        <h1 className="detail__title-year">
          {state.title} ({state.year})
        </h1>
        <h1 className="detail__rating">✿ {state.rating}</h1>
      </div>
      <div className="detail__summary">{state.description}</div>
    </div>
  );
}

export default Detail;
