import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h2>Categories</h2>
      <div className="categories">
        <Link to="/search?category=food" className="category">Foods</Link>
        <Link to="/search?category=drinks" className="category">Drinks</Link>
        <Link to="/search?category=snacks" className="category">Snacks</Link>
      </div>
    </div>
  );
}

export default HomePage;
