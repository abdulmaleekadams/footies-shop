import { FiHeart } from 'react-icons/fi';
import { AiOutlineUserAdd, AiOutlineShoppingCart } from 'react-icons/ai';

import './Nav.css';

const Nav = ({ handleInputChange }) => {
  return (
    <nav>
      <div className='nav-container'>
        <input
          type='text'
          placeholder='Search for a footwear'
          className='searc-input'
          onChange={handleInputChange}
        />
      </div>

      <div className='profile-container'>
        <a href='#'>
          <FiHeart className='nav-icons' />
        </a>

        <a href='#'>
          <AiOutlineShoppingCart className='nav-icons' />
        </a>

        <a href='#'>
          <AiOutlineUserAdd className='nav-icons' />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
