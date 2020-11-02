import { FETCH_COUNTRIES, SET_COUNTRIES } from './actionTypes';

const initialState = [];

const CountryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_COUNTRIES:
      return state;

    case SET_COUNTRIES:
      return payload.data;

    default:
      return state;
  }
}

export default CountryReducer;