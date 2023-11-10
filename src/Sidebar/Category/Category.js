import Input from '../../components/Input';
import './Category.css';

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>

      <div className='sidebar-items'>
        <label className='sidebar-label-container'>
          <input
            type='radio'
            name='category'
            onChange={handleChange}
            value=''
          />
          <span className='checkmark'></span>
          All
        </label>

        <Input
          value='sneakers'
          title='Sneakers'
          handleChange={handleChange}
          name='category'
        />
        <Input
          value='sandals'
          title='Sandals'
          handleChange={handleChange}
          name='category'
        />
        <Input
          value='flats'
          title='Flats'
          handleChange={handleChange}
          name='category'
        />
        <Input
          value='heels'
          title='Heels'
          handleChange={handleChange}
          name='category'
        />
      </div>
    </div>
  );
};

export default Category;
