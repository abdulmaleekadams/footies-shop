import Card from '../components/Card';

import './Product.css';

const Products = ({ result }) => {
  return (
    <>
      <section className='card-container'>
        {/* <Card /> */}
        {result}
      </section>
    </>
  );
};

export default Products;
