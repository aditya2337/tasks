import { combineReducers } from 'redux';
import adminReducer from '../routes/Admin/reducer';
import loginReducer from '../routes/LoginByGoogle/reducer';

// we used combineReducers() to combine several reducers into one
const reducer = combineReducers({
  admin: adminReducer,
  login: loginReducer
});

export default reducer;
