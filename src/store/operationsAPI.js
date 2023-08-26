//  import PropTypes from 'prop-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchingInProgress, fetchingSuccess, fetchingError } from 'store';
const API_KEY = '64e5ff5009e64530d17f6928';
const PATHNAME = 'contacts/';
axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/${PATHNAME}`;
axios.defaults.headers = {};
axios.defaults.params = {};

export const getQuery = createAsyncThunk('contacts/fetch.get', async () => {
  const { data } = await axios.get();
  return data;
});

// export const getQuery = (contactId = '') => {
//   return async dispatch => {
//     try {
//       dispatch(fetchingInProgress());
//       const { data } = await axios.get(`${contactId}`);
//       dispatch(fetchingSuccess(data));
//     } catch (error) {
//       dispatch(
//         fetchingError(
//           `${error.message} <- ${error.response.request.statusText}`
//         )
//       );
//     }
//   };
// };

export const deleteQuery = contactId => {
  return async dispatch => {
    try {
      dispatch(fetchingInProgress());
      const { data } = await axios.delete(`${contactId}`);
      dispatch(fetchingSuccess(data));
    } catch (error) {
      dispatch(fetchingError(error));
    }
  };
};

export const postQuery = contactId => {
  return async dispatch => {
    try {
      dispatch(fetchingInProgress());
      const { data } = await axios.post(`${contactId}`);
      dispatch(fetchingSuccess(data));
    } catch (error) {
      dispatch(fetchingError(error));
    }
  };
};

// getDataQuery.propType = {
//   typeRequest: PropTypes.string.isRequired,
//   query: PropTypes.string,
//   movie_id: PropTypes.number,
//   page: PropTypes.number,
// };
