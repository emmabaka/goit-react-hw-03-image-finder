import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, alt, onOpenModal }) => {
  return (
    <li className={css.galleryItem}>
      <img
        className={css.galleryItemImage}
        src={url}
        alt={alt}
        onClick={onOpenModal}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
