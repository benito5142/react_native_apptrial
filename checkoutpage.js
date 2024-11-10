import React from 'react';
import './CheckoutPage.css';

function CheckoutPage() {
  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="payment-method">
        <h3>Payment Method</h3>
        <button>Card</button>
        <button>Bank</button>
        <button>Cash on Delivery</button>
      </div>
      <div className="delivery-details">
        <h3>Delivery Details</h3>
        <button>Proceed to Payment</button>
      </div>
    </div>
  );
}

export default CheckoutPage;
