import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

export default class Gallery extends Component {
  componentDidMount() {
    this.props.fetchPanaromicImages();
  }

  renderThumbnails = () =>
    this.props.galleryImages.map((img, index) => (
      <div key={index} className="fl w-50 w-25-m w-20-l pa2">
        <Link
          to={{
            pathname: `/vr/${img.name}`,
            state: { url: img.pano }
          }}
          className="db link dim tc">
          <img
            style={{ height: '10vh' }}
            src={img.pano}
            alt={`pano_${index}`}
            className="w-100 db outline black-10"
          />
          <dl className="mt2 f6 lh-copy">
            <dd className="ml0 truncate w-100 white">{img.name}</dd>
          </dl>
        </Link>
      </div>
    ));

  render() {
    return (
      <div className="flex justify-center items-center h-100">
        <Paper
          className="pa3 w-50"
          rounded={false}
          style={{ backgroundColor: '#757575' }}
          zDepth={3}>
          <article>
            <h2 className="f3 fw4 pa3 mv0 white">Panaromic Gallery</h2>
            <div
              style={{ maxHeight: '75vh', minHeight: '25vh', overflow: 'auto' }}
              className="cf pa2">
              {this.props.isFetchingGallery ? (
                <div className="white flex justify-center">
                  <CircularProgress size={60} thickness={7} />
                </div>
              ) : this.props.galleryImages.length === 0 ? (
                <h3 className="white">No images found</h3>
              ) : (
                this.renderThumbnails()
              )}
            </div>
          </article>
        </Paper>
      </div>
    );
  }
}
