import { combineReducers } from 'redux';

import RegisterReducer from './reducers/register';
import sidebarShow from './reducers/sidebarShow';
import GoogleMapsReducer from './reducers/googlemaps';

const Reducers = combineReducers({
  RegisterReducer,
  sidebarShow,
  GoogleMapsReducer
});

export default Reducers;