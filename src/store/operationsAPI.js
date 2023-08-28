import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { fetchingInProgress, fetchingSuccess, fetchingError } from 'store';
const API_KEY = '64e5ff5009e64530d17f6928';
const PATHNAME = 'contacts/';
axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/`;
axios.defaults.headers = {};
axios.defaults.params = {};

export const getContactsThunk = createAsyncThunk(
  'contacts/fetch.get',
  async (contactId = '', thunkAPI) => {
    try {
      const { data } = await axios.get(`${PATHNAME}${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error.message} <- ${error.code}`);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/fetch.post',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post(PATHNAME, contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error.message} <- ${error.code}`);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/fetch.delete',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`${PATHNAME}${contactId}`);
      return data;
    } catch (error) {
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
