import Button from '../components/Button';
import './Recommended.css';

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h1 className='recommended-title'>Recommended</h1>
        <div className='recommended-flex'>
          <button className='btns' onClick={handleClick} value=''>
            All Products
          </button>
          <Button buttonText={'Nike'} handleClick={handleClick} />
          <Button buttonText={'Adidas'} handleClick={handleClick} />
          <Button buttonText={'Puma'} handleClick={handleClick} />
          <Button buttonText={'Vans'} handleClick={handleClick} />
        </div>
      </div>
      ;
    </>
  );
};

export default Recommended;
