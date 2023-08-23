//64e5ff5009e64530d17f6928.mockapi.io/:endpoint

https: import PropTypes from 'prop-types';
import axios from 'axios';
// const API_KEY = '30b0102eba46f206e4cdb2df1254a2c5';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGIwMTAyZWJhNDZmMjA2ZTRjZGIyZGYxMjU0YTJjNSIsInN1YiI6IjY0ZDc2N2ZlMDAxYmJkMDBlMzViMmY3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.arjSJ1yKD4ONmBdxPW4Nl-3pHH5kUcNLhLTD2FV7ec0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
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
  const typeRequests = {
    getTrending: {
      url: 'trending/movie/day',
    },
    searchMovies: {
      url: 'search/movie',
      params: {
        query,
        include_adult: 'false',
        page,
      },
    },
    movieDetails: {
      url: `movie/${movie_id}`,
    },
    movieCredits: {
      url: `movie/${movie_id}/credits`,
    },
    movieReviews: {
      url: `movie/${movie_id}/reviews`,
      params: { page },
    },
  };

  let pathname = typeRequests[typeRequest].url;
  const requestParams = new URLSearchParams(typeRequests[typeRequest].params);
  const { data } = await axios.get(`${pathname}?${requestParams}`);
  return data;
};

getDataQuery.propType = {
  typeRequest: PropTypes.string.isRequired,
  query: PropTypes.string,
  movie_id: PropTypes.number,
  page: PropTypes.number,
};
