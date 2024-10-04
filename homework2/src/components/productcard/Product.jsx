import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <div>
        <div className="product-card">
          <h2 className="product-name">Couch</h2>
          <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo architecto ea quod quam optio dolore vel et accusamus, voluptatibus, blanditiis quasi a ducimus provident sint quisquam doloribus numquam. Iure!</p>
          <p className="product-price">Price: 2300$</p>
          <p className="product-quantity">available: 20</p>
      </div>
    </div>
  );
}
