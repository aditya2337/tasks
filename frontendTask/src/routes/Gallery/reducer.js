import actionTypes from './actions/actionTypes';

const { REQUEST_PICTURES, RECEIVE_PICTURES, SERVER_ERROR } = actionTypes;

const galleryReducer = (
  state = {
    isFetchingGallery: false,
    galleryImages: [],
    hasErrored: false
  },
  action
) => {
  switch (action.type) {
    case REQUEST_PICTURES:
      return Object.assign({}, state, { isFetchingGallery: true });
    case RECEIVE_PICTURES:
      return Object.assign({}, state, {
        isFetchingGallery: false,
        galleryImages: action.galleryImages
      });
    case SERVER_ERROR:
      return Object.assign({}, state, { hasErrored: action.hasErrored });
    default:
      return state;
  }
};

export default galleryReducer;
