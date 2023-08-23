//  import PropTypes from 'prop-types';
import axios from 'axios';
// const API_KEY = '30b0102eba46f206e4cdb2df1254a2c5';
axios.defaults.baseURL = 'https://64e5ff5009e64530d17f6928.mockapi.io/';
axios.defaults.headers = {
  accept: 'application/json',
  Authorization: `Bearer ${ACCESS_TOKEN}`,
};
axios.defaults.params = {
  language: 'en-US',
};

export const getDataQuery = async ({
  typeRequest,
  query = '',
  movie_id = null,
  page = 1,
}) => {
  let pathname = typeRequests[typeRequest].url;
  const requestParams = new URLSearchParams(typeRequests[typeRequest].params);
  const { data } = await axios.get(`${pathname}?${requestParams}`);
  return data;
};

// getDataQuery.propType = {
//   typeRequest: PropTypes.string.isRequired,
//   query: PropTypes.string,
//   movie_id: PropTypes.number,
//   page: PropTypes.number,
// };
