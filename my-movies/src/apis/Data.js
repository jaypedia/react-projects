import axios from 'axios';

const getMovies = async () => {
  const response = await axios.get('http://localhost:4000/movies');
  return response.data;
};

export default getMovies;
