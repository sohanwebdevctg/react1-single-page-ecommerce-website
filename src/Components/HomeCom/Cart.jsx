import { Link } from "react-router-dom";
import { FaHeart, FaStar } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';



const Cart = ({item}) => {

  console.log(item)

  return (
    <div className="px-1 py-3">
            {/* item start */}
            <div>
            {/* image section start */}
            <div className="bg-white">
              <img src={item.image} className='w-full h-48'></img>
            </div>
            {/* image section end */}
            {/* description section start */}
            <Link to="/">
            {/* details section start */}
            <div className=" bg-[#F5F5F5] p-2 rounded-b-2xl shadow-xl">
              <ul className='space-y-1'>
                <li className="flex justify-between items-center">
                  <h2 className="text-sm md:text-xs xl:tex-sm font-bold italic">{item?.title}</h2>
                  <p className="text-sm md:text-xs xl:text-sm font-bold">$ 40</p>
                </li>
                <li><p className="text-xs md:text-[10px] xl:text-xs text-gray-500">{item?.details.slice(0,100)}...</p></li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center">
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                    <span className="text-xs md:text-[9px] xl:text-xs text-black ml-1">{item.rating}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <AiFillPlusCircle className="text-red-500 text-xl md:text-sm xl:text-xl"></AiFillPlusCircle>
                    <FaHeart className="text-red-500 text-lg md:text-sm xl:text-xl"></FaHeart>
                  </span>
                </li>
              </ul>
            </div>
            {/* details section end */}
            </Link>
            {/* description section end */}
            </div>
            {/* item end */}
        </div>
  );
};

export default Cart;