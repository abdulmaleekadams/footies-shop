import { useState } from 'react';
import './App.css';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';

import './index.css';

// Database
import productsData from './db/data';
import Card from './components/Card';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Input Filter
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = productsData.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // -------------Radio Filter--------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // -------------Button Filter ----------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering Input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = productsData.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          title === selected ||
          company === selected ||
          (parseInt(newPrice) >= parseInt(selected.split('-')[0]) &&
            parseInt(newPrice) <= parseInt(selected.split('-')[1])) ||
          (selected === 'above 150' && parseInt(newPrice) > 150)
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          imgUrl={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(productsData, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
