import { Component } from 'react';
import { fetchImages } from 'api/fetchImages';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from 'components/Modal/Modal';
import css from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    modalImage: {},
    query: '',
    page: 1,
    isLoad: false,
    isOpen: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoad: true });

      try {
        const images = await this.getImages();

        if (images.length === 0) {
          alert('No results');
        } else {
          const normalizedImages = this.normalizedData(images);
          this.setState(prev => ({
            images: [...prev.images, ...normalizedImages],
          }));
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoad: false });
      }
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const query = e.currentTarget.elements.search.value.toLowerCase();

    if (query.trim() === '') {
      alert('Enter smth, please');
      return;
    }

    this.setState({ query, images: [], page: 1 });
    e.currentTarget.elements.search.value = '';
  };

  async getImages() {
    try {
      const response = await fetchImages(this.state.query, this.state.page);
      return response.data.hits;
    } catch (error) {
      console.log(error);
    }
  }

  normalizedData(data) {
    return data.map(({ id, webformatURL, largeImageURL, tags }) => ({
      id,
      webformatURL,
      largeImageURL,
      tags,
    }));
  }

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  onOpenModal = () => {
    this.setState({ isOpen: true });
  };

  onCloseModal = () => {
    this.setState({ isOpen: false });
  };

  getLargeImage = e => {
    const filtered = this.state.images.filter(
      item => item.webformatURL === e.target.src
    );
    this.setState({ modalImage: filtered[0] });
  };

  render() {
    const { images, isLoad, isOpen, modalImage } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery
          images={images}
          onOpenModal={this.onOpenModal}
          getLargeImage={this.getLargeImage}
        />

        {isLoad && <Loader />}

        {images.length !== 0 && <Button onLoadMore={this.onLoadMore} />}

        {isOpen && (
          <Modal modalImage={modalImage} onClose={this.onCloseModal} />
        )}
      </div>
    );
  }
}
