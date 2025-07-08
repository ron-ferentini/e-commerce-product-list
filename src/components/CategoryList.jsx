function CategoryList(props) {
  return (
    <div className="category-list">
      <h2>Categories</h2>
      <select onChange={(e) => props.setCategory(e.target.value)}>
        <option value="ALL">All</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
        <option value="Electronics">Electronics</option>
        <option value="Sports & Outdoors">Sports & Outdoors</option>
        <option value="Apparel">Apparel</option>
        <option value="Furniture">Furniture</option>
        <option value="Footwear">Footwear</option>
      </select>
    </div>
  );
}

export default CategoryList;
