//  import PropTypes from 'prop-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { fetchingInProgress, fetchingSuccess, fetchingError } from 'store';
const API_KEY = '64e5ff5009e64530d17f6928';
const PATHNAME = 'contacts/';
axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/`;
// axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/${PATHNAME}`;
axios.defaults.headers = {};
axios.defaults.params = {};

export const getQuery = createAsyncThunk(
  'contacts/fetch.get',
  async (contactId = '', thunkAPI) => {
    try {
      const { data } = await axios.get(`${PATHNAME}${contactId}`);
      // const { data } = await axios.get(`${contactId}`);
      return data;
    } catch (error) {
      // console.log('error API:>> ', error);
      return thunkAPI.rejectWithValue(`${error.message} <- ${error.code}`);
    }
  }
);

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

export const addContact = createAsyncThunk(
  'contacts/fetch.post',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post(PATHNAME, contact);
      console.log('added Contact:>> ', data);
      return data;
    } catch (error) {
      // console.log('error API:>> ', error);
      return thunkAPI.rejectWithValue(`${error.message} <- ${error.code}`);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/fetch.delete',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`${PATHNAME}${contactId}`);
      console.log('deleted Contact:>> ', data);
      return data;
    } catch (error) {
      // console.log('error API:>> ', error);
      return thunkAPI.rejectWithValue(`${error.message} <- ${error.code}`);
    }
  }
);

// getDataQuery.propType = {
//   typeRequest: PropTypes.string.isRequired,
//   query: PropTypes.string,
//   movie_id: PropTypes.number,
//   page: PropTypes.number,
// };
