import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    console.log(this.props.location.state);
    if (location.state === undefined) {
      this.props.history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (this.props.location.state) {
      return (
        <div className="detail">
          <h1 className="detail__title">{location.state.title}</h1>
          <h3 className="detail__year">{location.state.year}</h3>
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          ></img>
          <ul className="detail__genres">
            {location.state.genres.map((genre, index) => {
              return (
                <li className="detail__genre" key={index}>
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className="detail__summary">{location.state.summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
