import { connect } from 'react-redux';

import * as actions from './actions';
import Gallery from './Gallery';

const mapStateToProps = (state, ownProps) => ({
  isFetchingGallery: state.gallery.isFetchingGallery,
  galleryImages: state.gallery.galleryImages,
  ...ownProps
});

const mapDispatchToProps = dispatch => ({
  fetchPanaromicImages: () => dispatch(actions.fetchPanaromicImages())
});

const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryContainer;
