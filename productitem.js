import React from "react";

function ProductItem({ name, price, count, onIncrement, onDecrement, onDoubleClick }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        margin: "10px",
        textAlign: "center",
        width: "150px",
      }}
      onDoubleClick={onDoubleClick}
    >
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <div>
        <button onClick={onDecrement}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default ProductItem;
