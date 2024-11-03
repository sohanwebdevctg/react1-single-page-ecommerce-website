import { useEffect, useState } from "react";
import { FaMinusSquare, FaPlusSquare, FaStar } from "react-icons/fa";
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
    <>
      <div className="px-3 sm:px-4 md:px-4 lg:px-6 my-10 sm:my-10">
        {/* content section start */}
        <div className="container mx-auto h-full w-full py-5 px-2 sm:px-5 md:px-4 lg:px-8 xl:px-12 shadow-lg">
          {/* item section start */}
          <div className="sm:flex sm:justify-between sm:gap-5 ">
            {/* image section start */}
            <div className="w-full sm:w-[50%] p-3 sm:p-2 xl:p-10 bg-white">
              {/* selected image section start */}
              <div className="overflow-hidden">
                <img src={product?.image}
                  alt="this is selected image"
                  className="w-full h-40 sm:w-full sm:h-44 md:w-72 md:h-48 lg:w-80 lg:h-52 xl:w-96 xl:h-60 mx-auto"
                ></img>
                {/* <div className="flex items-center justify-around gap-2 mt-5 overflow-x-auto bg-[#F5F5F5] py-2">
                  {imageData?.map((data, index) => (
                    <img
                      key={index}
                      src={data}
                      width={100}
                      height={100}
                      alt={`this is ${data.id} image`}
                      className="w-16 h-16 sm:w-[70px] sm:h-[80px] md:w-[80px] md:h-[86px] lg:w-20 lg:h-20 xl:w-20 xl:h-24"
                      onClick={() => setSelectImage(data)}
                    ></img>
                  ))}
                </div> */}
              </div>
              {/* selected image section end */}
              {/* select image section start */}
              <div></div>
              {/* select image section end */}
            </div>
            {/* image section end */}
            {/* details section start */}
            <div className="w-full sm:w-[50%] bg-[#F5F5F5] p-3 lg:p-5 xl:p-10 ">
              <ul className="space-y-2 sm:space-y-4 md:space-y-3 lg:space-y-3 xl:space-y-4">
                {/* name and price */}
                <li className="flex items-center justify-between">
                  <span className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-4xl font-bold">
                    {product?.title}
                  </span>
                  <span className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl text-red-700 italic font-bold">
                    $ {product?.price}
                  </span>
                </li>
                {/* details */}
                <li>
                  <p className="text-xs sm:text-[13px] md:text-sm lg:text-[15px] xl:text-base text-gray-500 w-full xl:w-[90%]">
                    {product?.details}
                  </p>
                </li>
                {/* rating */}
                <li className="flex items-center">
                  <FaStar className="text-yellow-500 text-xs md:text-sm lg:text-base xl:text-lg"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-sm lg:text-base xl:text-lg"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-sm lg:text-base xl:text-lg"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-sm lg:text-base xl:text-lg"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-sm lg:text-base xl:text-lg"></FaStar>
                  <span className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg ml-2">
                    {" "}
                    {product?.rating}
                  </span>
                </li>
                {/* color */}
                {/* quantity */}
                <li className="flex items-center gap-5">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    Quantity:
                  </p>
                  <div className="flex justify-center items-center gap-2 ">
                    <FaPlusSquare
                      // onClick={() => quantityIncrement(quantity)}
                      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-green-500"
                    />
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                      30
                    </span>
                    <FaMinusSquare
                      // onClick={() => quantityDecrement(quantity)}
                      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-red-500"
                    />
                  </div>
                </li>
                {/* total price */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Total: $ 10
                </p>
                {/* button  */}
                <li>
                  <button
                    // onClick={addData}
                    className="bg-green-600 text-white btn btn-xs sm:btn-xs md:btn-sm lg:btn-sm xl:btn-md hover:bg-green-600"
                  >
                    Add to Cart
                  </button>
                  <button
                    // onClick={previousPage}
                    className="bg-red-600 text-white btn btn-xs sm:btn-xs md:btn-sm lg:btn-sm xl:btn-md hover:bg-red-600 ml-2"
                  >
                    Back
                  </button>
                </li>
              </ul>
            </div>
            {/* details section end */}
          </div>
          {/* item section end */}
        </div>
        {/* content section end */}
      </div>
    </>
  );
};

export default SingleProduct;