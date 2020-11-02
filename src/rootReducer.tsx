import { combineReducers } from 'redux';

import CountryReducer from './containers/Countries/reducer';

// let's assume that this application will become bigger and bigger, so we need to merge all incoming reducers into one reducer (called root reducer)
const RootReducer = combineReducers({
  countries: CountryReducer
})

export default RootReducer;