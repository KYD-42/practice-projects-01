import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setdisableButton] = useState(false);
  /* just like we did in the image slider component we use an async function to fetch the data from the API */
  /* again -> the try catch block is used to handle the error in case the data is not fetched successfully */
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log("Products fetched successfully", result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]); // TBD - altered this line;

  useEffect(() => {
    if (products && products.length === 100) {
      setdisableButton(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading data! Please wait!</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? (
          <p>You have reached the end of the product list!</p>
        ) : null}
      </div>
    </div>
  );
}


/* Dummy json file bugs - ID conflict rpinted in console log */
/* WIP */