import { combineReducers } from 'redux';
import adminReducer from '../routes/Admin/reducer';
import loginReducer from '../routes/LoginByGoogle/reducer';
import interviewReducer from '../routes/Interview/reducer';

// we used combineReducers() to combine several reducers into one
const reducer = combineReducers({
  admin: adminReducer,
  login: loginReducer,
  interview: interviewReducer
});

export default reducer;
