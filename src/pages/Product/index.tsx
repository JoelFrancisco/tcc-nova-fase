import { useEffect, useState } from 'react';
import axios from "axios";

const Product = () => {
  const [data, setData] = useState();
  
  const apiResponse = async () => { 
    const res = await axios.post('http://localhost:8080/product');
    setData(res.data);
  }

  useEffect( () => apiResponse(), []);

  return <></>;
}

export default Product;