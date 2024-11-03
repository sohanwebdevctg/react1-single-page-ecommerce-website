import { useEffect, useState } from "react";
import Cart from "./Cart";


const NewProducts = () => {

  //const data
  const [datas, setDatas] = useState([]);

  //load data
  useEffect(() => {
    fetch('allProducts.json')
    .then((res) => res.json())
    .then((data) => {
      if(data.length > 0){
        const product = data.filter((item) => item.productCategory === "new");
        setDatas(product)
      }
    })
  },[])


  return (
    <>
      <div className="my-8 xl:my-10">
        {/* content section start */}
        <div className="container mx-auto xl:px-10">
          {/* title start */}
          <div className="mb-5 text-center">
            <h2 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">Our Gallery</h2>
          </div>
          {/* title end */}
          {/* cart start */}
          <div className="grid grid-cols-5">
            {
              datas.slice(0,10).map((item, id) => <Cart
              key={id}
              item={item}
              ></Cart>)
            }
          </div>
          {/* cart end */}
        </div>
        {/* content section end */}
      </div>
    </>
  );
};

export default NewProducts;