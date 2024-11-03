import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleProduct = () => {

  // find-out id
  const {id} = useParams();

  // setData
  const [product, setProduct] = useState([]);

  //loading data
  useEffect(() => {
    fetch('/allProducts.json')
    .then((res) => res.json())
    .then((data) => {
      if(data.length > 0){
        const findProduct = data.find((item) => item.id === parseInt(id));
        setProduct(findProduct)
      }
    })
  },[id]);

  console.log(product)
  

  return (
    <div>
      <h1>this is single page</h1>
    </div>
  );
};

export default SingleProduct;