import { bool, string } from 'prop-types';

const AngleSolid = ({ left, color }) => {
  if (left) {
    return (
      <svg
        role="img"
        aria-label="Seta para o lado esquerdo"
        width="11"
        height="18"
        viewBox="0 0 11 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.905 0L0.524 8.381L0 8.929L0.524 9.477L8.905 17.858L10.005 16.758L2.166 8.929L9.999 1.096L8.905 0Z"
          fill={color}
        />
      </svg>
    );
  }

  return (
    <svg
      role="img"
      aria-label="Seta para o lado direito"
      width="11"
      height="18"
      viewBox="0 0 11 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.1 0L0 1.1L7.833 8.933L0 16.766L1.1 17.866L9.481 9.485L10.005 8.937L9.481 8.389L1.1 0Z"
        fill={color}
      />
    </svg>
  );
};

AngleSolid.defaultProps = {
  left: false,
};

AngleSolid.propTypes = {
  left: bool,
  color: string.isRequired,
};

export default AngleSolid;
