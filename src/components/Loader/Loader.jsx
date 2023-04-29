import { TailSpin } from 'react-loader-spinner';
import Wrapper from 'components/Wrapper/Wrapper';

const Loader = () => {
  return (
    <Wrapper>
      <TailSpin
        height="50"
        width="50"
        color="#3f51b5"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </Wrapper>
  );
};

export default Loader;
