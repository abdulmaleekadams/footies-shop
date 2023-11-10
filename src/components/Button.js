const Button = ({ buttonText, handleClick }) => {
  return (
    <button
      className='btns'
      onClick={handleClick}
      value={buttonText}
    >
      {buttonText}
    </button>
  );
};

export default Button;
