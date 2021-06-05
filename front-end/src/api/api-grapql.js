import axios from 'axios';

const BASE_URL = 'http://localhost:9000/graphql';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const graphqlApi = body => {
  return instance.post('', body);
};

export default graphqlApi;
