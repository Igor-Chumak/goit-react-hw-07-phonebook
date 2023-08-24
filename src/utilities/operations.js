//  import PropTypes from 'prop-types';
import axios from 'axios';
const API_KEY = '64e5ff5009e64530d17f6928';
const PATHNAME = 'tasks';
axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/${PATHNAME}`;
axios.defaults.headers = {};
axios.defaults.params = {};
export const getAPIQuery = async ({ taskId }) => {
  const requestParams = new URLSearchParams();
  const { data } = await axios.get(`${pathname}/${taskId}?${requestParams}`);
  return data;
};

export const postAPIQuery = async () => {
  const requestParams = new URLSearchParams();
  const { data } = await axios.post(`?${requestParams}`);
  return data;
};

export const putAPIQuery = async () => {
  const requestParams = new URLSearchParams();
  const { data } = await axios.put(`?${requestParams}`);
  return data;
};

export const patchAPIQuery = async () => {
  const requestParams = new URLSearchParams();
  const { data } = await axios.put(`?${requestParams}`);
  return data;
};

export const deleteAPIQuery = async () => {
  const requestParams = new URLSearchParams();
  const { data } = await axios.put(`?${requestParams}`);
  return data;
};

// getDataQuery.propType = {
//   typeRequest: PropTypes.string.isRequired,
//   query: PropTypes.string,
//   movie_id: PropTypes.number,
//   page: PropTypes.number,
// };
