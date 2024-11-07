import { useEffect, useState } from "react";
import ShopCart from "./ShopCart";
import Loading from "../../Pages/Loading/Loading";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const AllProducts = () => {

  //const data
  const [datas, setDatas] = useState([]);
  const [load, setLoad] = useState(false);
  

  //load data
  useEffect(() => {
    setLoad(true)
    fetch('allProducts.json')
    .then((res) => res.json())
    .then((data) => {
      setDatas(data)
      setLoad(false)
    })
  },[]);

  //pagination state
  const itemPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage -1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItems = datas.slice(startIndex, endIndex)


  //handlePrevious
  const handlePrevious = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  //handleNext
  const handleNext = () => {
    if(currentPage < Math.ceil(datas.length / itemPerPage)){
      setCurrentPage(currentPage + 1);
    }
  }

  
  //loading
  if(load){
    return <Loading></Loading>
  }

  return (
    <>
      {/* data start */}
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
          currentItems.map((data, id) => <ShopCart
          key={id}
          data={data}
          ></ShopCart>)
        }
          </div>
          {/* cart end */}
        </div>
        {/* content section end */}
      </div>
      {/* data end */}
      {/* button start */}
      <div className="my-8 flex justify-center items-center gap-3">
        <button onClick={handlePrevious} disabled={currentPage === 1} className="disabled:opacity-50">
          <FaArrowLeft  className="bg-red-500 text-white text-xl xl:text-3xl p-1"/>
        </button>
        <button onClick={handleNext} disabled={currentPage === Math.ceil(datas.length / itemPerPage)} className=" disabled:opacity-50">
          <FaArrowRight className="bg-red-500 text-white text-xl xl:text-3xl p-1"/>
        </button>
      </div>
      {/* button end */}
    </>
  );
};

export default AllProducts;