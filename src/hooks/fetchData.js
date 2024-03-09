import { useState, useEffect } from 'react';

const useFetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        console.log("Setting Data into data in shopData.js");
        setData(result);
      } catch (error) {
        console.error("Error in setting data in ShopData.js", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useFetchData;
