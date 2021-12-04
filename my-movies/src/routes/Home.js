import React, { useState } from 'react';
import axios from 'axios';

const getMovies = async () => {
  const response = await axios.get('http://localhost:4000/movies');
  const movies = response.data;
  return movies; // Promise 객체 반환
};

function Home() {
  // useState에 Promise 객체가 아니라 배열을 넣으려면 어떻게?
  const [movie, setMovie] = useState(getMovies());
  console.log(movie);

  return <div>Home</div>;
}

export default Home;
