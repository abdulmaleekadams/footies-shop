import Input from '../../components/Input';
import './Price.css';

const Price = ({handleChange}) => {
  return (
    <div>
      <h2 className='sidebar-title price-title'>Price</h2>

      <div className='sidebar-items'>
        <label className='sidebar-label-container'>
          <input
            type='radio'
            name='price'
            onChange={handleChange}
            value=''
          />
          <span className='checkmark'></span>
          All
        </label>

        <Input
          value={'0-50'}
          title='$0 - $50'
          handleChange={handleChange}
          name='price'
        />
        <Input
          value={'50-100'}
          title='$50 - $100'
          handleChange={handleChange}
          name='price'
        />
        <Input
          value={'100-150'}
          title='$100 - $150'
          handleChange={handleChange}
          name='price'
        />
        <Input
          value={'above 150'}
          title='Over $150'
          handleChange={handleChange}
          name='price'
        />
      </div>
    </div>
  );
};

export default Price;
