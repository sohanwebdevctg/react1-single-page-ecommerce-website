import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const ShopCart = ({data}) => {
  return (
    <Link to={`/single-product/${data.id}`}>
          <div className="overflow-hidden productCon">
          <img src={data.image[0]} alt="this is shop product" className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-52"></img>
          <ul className=" mt-2 p-2 bg-black bg-opacity-50 rounded-tl-xl rounded-tr-xl rounded-bl-xl subProduct">
            <li className="sm:flex sm:justify-between sm:items-center">
              <p className="text-xs sm:text-xs md:text-sm lg:text-bas xl:text-base font-bold text-red-600">{data.title}</p>
              <p className="flex items-center gap-1 mt-1 sm:mt-0">
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
                <FaStar className="text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-xs text-yellow-400"></FaStar>
              </p>
            </li>
            <li><span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">Price: ${data.price}</span></li>
          </ul>
        </div>
    </Link>

  );
};

export default ShopCart;