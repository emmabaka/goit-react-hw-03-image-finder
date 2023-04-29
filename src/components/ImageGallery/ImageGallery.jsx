import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  handleOpen = e => {
    this.props.getLargeImage(e);
    this.props.onOpenModal();
  };

  render() {
    const { images } = this.props;
    return (
      <ul className={css.imageGallery}>
        {images.map(({ webformatURL, tags, id }) => {
          return (
            <ImageGalleryItem
              url={webformatURL}
              alt={tags}
              key={id}
              onOpenModal={this.handleOpen}
            />
          );
        })}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  getLargeImage: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
