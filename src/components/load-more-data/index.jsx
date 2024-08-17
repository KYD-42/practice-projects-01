import { useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  /* just like we did in the image slider component we use an async function to fetch the data from the API */
  /* again -> the try catch block is used to handle the error in case the data is not fetched successfully */
  async function fetchProducts(getUrl) {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products?limit=20&skip=10');
      const data = await response.json();

      if (data) {
        setProducts(data);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div className="container"></div>;
}

/* dummyjson.com/docs/products - where the data is fetched from */
