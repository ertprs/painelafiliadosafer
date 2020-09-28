import { combineReducers } from 'redux';

import RegisterReducer from './reducers/register';
import sidebarShow from './reducers/sidebarShow';
import GoogleMapsReducer from './reducers/googlemaps';
import SimplifiedRegistrationReducer from './reducers/simplifiedRegistration';

const Reducers = combineReducers({
  RegisterReducer,
  sidebarShow,
  GoogleMapsReducer,
  SimplifiedRegistrationReducer
});

export default Reducers;