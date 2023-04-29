import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <button className={css.searchFormButton} type="submit">
          <FiSearch size={24} />
        </button>

        <input
          className={css.searchFormInput}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
