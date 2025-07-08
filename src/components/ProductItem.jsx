
function ProductItem({ product }) {
  
  return (
    <div className="product-item">
      <img className="product-item-image" src={product.imageUrl} alt={product.name} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ProductItem