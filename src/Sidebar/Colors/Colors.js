import Input from '../../components/Input';
import './Colors.css';

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Color</h2>

      <div className='sidebar-items'>
        <label className='sidebar-label-container'>
          <input
            type='radio'
            name='color'
            onChange={handleChange}
            value=''
          />
          <span className='checkmark'></span>
          All
        </label>

        <Input
          value='white'
          title='White'
          handleChange={handleChange}
          name='color'
        />
        <Input
          value='black'
          title='Black'
          handleChange={handleChange}
          name='color'
        />
        <Input
          value='blue'
          title='Blue'
          handleChange={handleChange}
          name='color'
        />
        <Input
          value='green'
          title='Green'
          handleChange={handleChange}
          name='color'
        />
        <Input
          value='red'
          title='Red'
          handleChange={handleChange}
          name='color'
        />
      </div>
    </div>
  );
};

export default Colors;
