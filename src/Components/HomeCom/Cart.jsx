import { Link } from "react-router-dom";
import { FaHeart, FaStar } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';



const Cart = ({item}) => {

  return (
    <div className="px-1 py-3">
            {/* item start */}
            <div>
            {/* image section start */}
            <div className="bg-white">
              <img src={item.image[0]} className='w-full h-28 sm:h-28 md:h-28 lg:h-36 xl:h-48 2xl:h-52'></img>
            </div>
            {/* image section end */}
            {/* description section start */}
            <Link to={`/single-product/${item.id}`}>
            {/* details section start */}
            <div className=" bg-[#F5F5F5] p-2 rounded-b-2xl shadow-xl">
              <ul className='space-y-1'>
                <li className="flex justify-between items-center">
                  <h2 className="text-[10px] sm:text-[11px] md:text-[11px] lg:text-xs xl:tex-sm 2xl:text-base font-bold italic">{item?.title}</h2>
                  <p className="text-[10px] sm:text-[11px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base font-bold">$ 40</p>
                </li>
                <li><p className="text-[11px] sm:text-[11px] md:text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm text-gray-500">{item?.details.slice(0,60)}...</p></li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center">
                    <FaStar className="text-yellow-500 text-[10px] sm:text-[11px] md:text-[9px] lg:text-[10px] xl:text-xs 2xl:text-sm"></FaStar>
                    <FaStar className="text-yellow-500 text-[10px] sm:text-[11px] md:text-[9px] lg:text-[10px] xl:text-xs 2xl:text-sm"></FaStar>
                    <FaStar className="text-yellow-500 text-[10px] sm:text-[11px] md:text-[9px] lg:text-[10px] xl:text-xs 2xl:text-sm"></FaStar>
                    <FaStar className="text-yellow-500 text-[10px] sm:text-[11px] md:text-[9px] lg:text-[10px] xl:text-xs 2xl:text-sm"></FaStar>
                    <FaStar className="text-yellow-500 text-[10px] sm:text-[11px] md:text-[9px] lg:text-[10px] xl:text-xs 2xl:text-sm"></FaStar>
                    <span className="text-[10px] sm:text-[11px] md:text-[9px] lg:text-[10px] xl:text-xs 2xl:text-sm text-black ml-1">{item.rating}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <AiFillPlusCircle className="text-red-500 text-base sm:text-base md:text-sm lg:text-sm xl:text-xl 2xl:text-2xl"></AiFillPlusCircle>
                    <FaHeart className="text-red-500 text-sm sm:text-sm md:text-xs lg:text-xs xl:text-xl 2xl:text-xl"></FaHeart>
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