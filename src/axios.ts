import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com';

export default axios.create({
  baseURL,
  headers: {
    'Conent-Type': 'application/json',
  },
});
