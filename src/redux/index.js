import { combineReducers } from 'redux';

import RegisterReducer from './reducers/register';
import sidebarShow from './reducers/sidebarShow';

const Reducers = combineReducers({
  RegisterReducer,
  sidebarShow
});

export default Reducers;