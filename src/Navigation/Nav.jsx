import { FiHeart } from 'react-icons/fi';
import { AiOutlineUserAdd, AiOutlineShoppingCart } from 'react-icons/ai';

import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className='nav-container'>
        <input
          type='text'
          placeholder='Search for a shoe'
          className='searc-input'
        />
      </div>

      <div className='profile-container'>
        <a href='#'>
          <FiHeart className='nac-icons' />
        </a>

        <a href=''>
          <AiOutlineShoppingCart className='nav-icons' />
        </a>

        <a href=''>
          <AiOutlineUserAdd className='nav-icons' />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
