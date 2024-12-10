import React, { useState } from "react";
import ProductItem from "./ProductItem";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Велосипед", price: 1000, count: 1 },
    { id: 2, name: "Самокат", price: 700, count: 1 },
    { id: 3, name: "Ролики", price: 1300, count: 2 },
    { id: 4, name: "Сноуборд", price: 19000, count: 4 },
  ]);


  const addProduct = () => {
    const input = prompt("Введите название и цену товара: Пример: 'Велосипед 1000'");
    if (input) {
      const [name, price] = input.split(" ");
      if (name && price && !isNaN(price)) {
        const newProduct = {
          id: Date.now(),
          name: name,
          price: Number(price),
          count: 1,
        };
        setProducts([...products, newProduct]);
      } else {
        alert("Неверный формат данных!");
      }
    }
  };


  const incrementCount = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.count < 25
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
  };

  const decrementCount = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, count: product.count > 0 ? product.count - 1 : 0 }
          : product
      )
    );
  };


  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <button onClick={addProduct}>Добавить новый товар</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            count={product.count}
            onIncrement={() => incrementCount(product.id)}
            onDecrement={() => decrementCount(product.id)}
            onDoubleClick={() => removeProduct(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
