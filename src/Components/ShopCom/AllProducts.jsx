import { useEffect, useState } from "react";
import ShopCart from "./ShopCart";


const AllProducts = () => {

  //const data
  const [datas, setDatas] = useState([]);

  //load data
  useEffect(() => {
    fetch('allProducts.json')
    .then((res) => res.json())
    .then((data) => setDatas(data))
  },[])

  return (
    <>
      <div className="my-8 xl:my-10">
        {/* content section start */}
        <div className="container mx-auto px-3 sm:px-4 md:px-5 lg:px-7 xl:px-10">
          {/* title start */}
          <div className="mb-5 text-center">
            <h2 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-medium">All Products</h2>
          </div>
          {/* title end */}
          {/* cart start */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-1 sm:gap-2 md:gap-1 lg:gap-2 xl:gap-3 2xl:gap-4">
          {
          datas.map((data, id) => <ShopCart
          key={id}
          data={data}
          ></ShopCart>)
        }
          </div>
          {/* cart end */}
        </div>
        {/* content section end */}
      </div>
    </>
  );
};

export default AllProducts;