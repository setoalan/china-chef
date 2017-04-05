import { combineReducers } from 'redux';

import menuReducer from './reducer_menu';

const rootReducer = combineReducers({
  menu: menuReducer
});

export default rootReducer;
