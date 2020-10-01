import { combineReducers } from 'redux';

import RegisterReducer from './reducers/register';
import sidebarShow from './reducers/sidebarShow';
import GoogleMapsReducer from './reducers/googlemaps';
import MessagesReducer from './reducers/messages';
import SyndicateReducer from './reducers/syndicate';

const Reducers = combineReducers({
  RegisterReducer,
  sidebarShow,
  GoogleMapsReducer,
  MessagesReducer,
  SyndicateReducer
});

export default Reducers;