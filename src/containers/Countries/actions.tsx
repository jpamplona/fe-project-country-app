import { FETCH_COUNTRIES, SET_COUNTRIES } from './actionTypes';
import Country from '../../types/country';

export const fetchCountries = () => ({
  type: FETCH_COUNTRIES,
})

export const setCountries = (data: Country[]) => ({
  type: SET_COUNTRIES,
  payload: {
    data
  }
})