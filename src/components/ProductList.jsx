import { useState } from "react";
import CategoryList from "./CategoryList";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  const [category, setCategory] = useState("");

  console.log(`category: ${category}`)

    // Filter products by category if one is selected
  const filteredProducts = () => {
    return category === 'ALL' || category === '' ? products : products.filter((product) => product.category === category);
  };

  return (
    <div className="product-container">
      <div className="category-list">
        <CategoryList setCategory={setCategory} />
      </div>
      <div className="product-list">
        <h1>Product List</h1>
        {filteredProducts().map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
