import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.escapeClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escapeClose);
  }

  escapeClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  overlayClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { modalImage } = this.props;

    return createPortal(
      <div className={css.overlay} onClick={this.overlayClose}>
        <div className={css.modal}>
          <img src={modalImage.largeImageURL} alt={modalImage.tags} />
        </div>
      </div>,
      document.getElementById('modal')
    );
  }
}

Modal.propTypes = {
  modalImage: PropTypes.exact({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
