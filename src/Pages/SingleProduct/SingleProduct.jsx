import { useEffect, useState } from "react";
import { FaMinusSquare, FaPlusSquare, FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

import Swal from 'sweetalert2';

import { getData, getUser, setData } from "../../utilities/localstorage";
import Title from "../../Components/Title/Title";
import Loading from "../Loading/Loading";


const SingleProduct = () => {

  // user data
  const [user, setUser] = useState(() => getUser());

  const [load, setLoad] = useState(false)

  //navigate
  const navigate = useNavigate();


  // find-out id
  const {id} = useParams();

  // setData
  const [product, setProduct] = useState([]);

  //loading data
  useEffect(() => {
    setLoad(true);
    fetch('/allProducts.json')
    .then((res) => res.json())
    .then((data) => {
      if(data.length > 0){
        const findProduct = data.find((item) => item.id === parseInt(id));
        setProduct(findProduct);
        setLoad(false);
      }
    })
  },[id]);

  console.log(product)

  // total quantity
  let [quantity, setQuantity] = useState(1);
  let [total, setTotal] = useState(0);

  // quantityIncrement
  const quantityIncrement = (data, totalData) => {
    setQuantity(quantity = quantity + data);
    setTotal(quantity * totalData)
  }

  // quantityDecrement
  const quantityDecrement = (data, totalData) => {
    if(quantity > 1){
      setQuantity(quantity = quantity - data);
      setTotal(quantity * totalData)
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your data is too small",
      });
    }
  }
  
  //all data
  const [selectImage, setSelectImage] = useState()


  // save Data
  const saveBtn = (data) => {

    // get data
    const saveCart = {
      id: data.id,
      title : data.title,
      image : selectImage ? selectImage : (product?.image && product?.image[0]),
      quantity : quantity,
      price : data.price,
      total : total > data?.price ? total : data?.price
    }

    // user checked if user logged in
    if(user.email && user.email){

      let previousData = getData();

      const itemExists = previousData.find((item) => item.id === saveCart.id);

      if(!itemExists){
        setData(saveCart);
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Your data has been saved",
          showConfirmButton: false,
          timer: 1500
        });

        location.reload();
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your data already Existed",
        });
      }
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login",
      });
      navigate('/login')
    }
  }

  //loading data
  if(load){
    return <Loading></Loading>
  }

  return (
    <>
    {/* title start */}
    <Title name={`${product && product?.title}`}></Title>
      {/* title end */}
      <div className="px-3 sm:px-4 md:px-4 lg:px-6 my-10 sm:my-10">
        {/* content section start */}
        <div className="container mx-auto h-full w-full py-5 px-2 sm:px-5 md:px-4 lg:px-8 xl:px-12 shadow-lg">
          {/* item section start */}
          <div className="sm:flex sm:justify-between sm:gap-5 ">
            {/* image section start */}
            <div className="w-full sm:w-[50%] p-3 sm:p-2 xl:p-10 bg-white">
              {/* selected image section start */}
              <div className="overflow-hidden">
                <img src={selectImage ? selectImage : (product?.image && product?.image[0])}
                  alt="this is selected image"
                  className="w-full h-40 sm:w-full sm:h-44 md:w-72 md:h-48 lg:w-80 lg:h-52 xl:w-96 xl:h-60 mx-auto"
                ></img>
                <div className="flex items-center justify-around gap-2 mt-5 overflow-x-auto bg-[#F5F5F5] py-2">
                  {product?.image?.map((data, index) => (
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
                </div>
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
                      onClick={() => quantityIncrement(product?.quantity, product?.price)}
                      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-green-500"
                    />
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                      {quantity}
                    </span>
                    <FaMinusSquare
                      onClick={() => quantityDecrement(product.quantity, product?.price)}
                      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-red-500"
                    />
                  </div>
                </li>
                {/* total price */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Total: $ {total > product.price ? total : product?.price}
                </p>
                {/* button  */}
                <li>
                  <button
                    onClick={() => saveBtn(product)}
                    className="bg-green-600 text-white btn btn-xs sm:btn-xs md:btn-sm lg:btn-sm xl:btn-md hover:bg-green-600 px-3 py-2"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => navigate('/shop')}
                    className="bg-red-600 text-white btn btn-xs sm:btn-xs md:btn-sm lg:btn-sm xl:btn-md hover:bg-red-600 ml-2 px-3 py-2"
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