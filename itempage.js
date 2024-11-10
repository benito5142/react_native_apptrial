import React from 'react';
import { useParams } from 'react-router-dom';
import './ItemPage.css';

function ItemPage() {
  const { id } = useParams();
  // In a real app, fetch item details by id

  return (
    <div className="item-page">
      <h2>Spicy Salmon</h2>
      <p>Price: Rs. 199</p>
      <p>Description: Delicious spicy salmon with rice.</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ItemPage;
