
import React from 'react';
import { Link } from 'react-router-dom';
import './SearchPage.css';

function SearchPage() {
  const items = [
    { id: 1, name: "Spicy Salmon", price: 199 },
    { id: 2, name: "Rice Bowl", price: 149 },
    // Add more items as needed
  ];

  return (
    <div className="search-page">
      <h2>Found Results</h2>
      <div className="items">
        {items.map(item => (
          <Link to={`/item/${item.id}`} className="item" key={item.id}>
            <h3>{item.name}</h3>
            <p>Rs. {item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
