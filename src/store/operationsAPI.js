//  import PropTypes from 'prop-types';
import axios from 'axios';
import { fetchingInProgress, fetchingSuccess, fetchingError } from 'store';
const API_KEY = '64e5ff5009e64530d17f6928';
const PATHNAME = 'contacts1/';
axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/${PATHNAME}`;
axios.defaults.headers = {};
axios.defaults.params = {};

export const getQuery = (...{ contactId = '' }) => {
  return async dispatch => {
    try {
      dispatch(fetchingInProgress());
      const { data } = await axios.get(`${contactId}`);
      dispatch(fetchingSuccess(data));
    } catch (error) {
      dispatch(fetchingError(error));
    }
  };
};

// export const getQuery = ({ taskId = '' }) => {
//   return async dispatch => {
//     try {
//       dispatch(fetching());
//       const requestParams = new URLSearchParams();
//       const { data } = await axios.get(`/${taskId}?${requestParams}`);
//       dispatch(success(data));
//     } catch (error) {
//       dispatch(rejected(error));
//     }
//   };
// };

export const postQuery = async () => {
  const requestParams = new URLSearchParams();
  const { data } = await axios.post(`?${requestParams}`);
  return data;
};

export const putQuery = async () => {
  const requestParams = new URLSearchParams();
  const { data } = await axios.put(`?${requestParams}`);
  return data;
};

export const patchQuery = async () => {
  const requestParams = new URLSearchParams();
  const { data } = await axios.put(`?${requestParams}`);
  return data;
};

export const deleteQuery = async () => {
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
