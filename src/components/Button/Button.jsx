import PropTypes from 'prop-types';
import Wrapper from 'components/Wrapper/Wrapper';
import css from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <Wrapper>
      <button className={css.button} onClick={onLoadMore}>
        Load More
      </button>
    </Wrapper>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
