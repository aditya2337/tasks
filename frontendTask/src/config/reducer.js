import { combineReducers } from 'redux';
import galleryReducer from '../routes/Gallery/reducer';

// we used combineReducers() to combine several reducers into one
const reducer = combineReducers({
  gallery: galleryReducer
});

export default reducer;
