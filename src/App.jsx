import "./App.css";
import products from "./data/ProductData.js";
import ProductList from "./components/ProductList.jsx";
import CategoryList from "./components/CategoryList.jsx";

function App() {
  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default App;
