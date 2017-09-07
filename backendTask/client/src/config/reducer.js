import { combineReducers } from 'redux';
import adminReducer from '../routes/Admin/reducer';

// we used combineReducers() to combine several reducers into one
const reducer = combineReducers({
  admin: adminReducer
});

export default reducer;
