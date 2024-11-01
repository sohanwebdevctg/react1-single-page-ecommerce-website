import { MdAddShoppingCart } from "react-icons/md";
import { SiMyget } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const Support = () => {

  return (
    <>
      <div className="my-10 xl:my-12">
      {/* content section start */}
      <div className='container h-full w-full mx-auto px-6 md:px-7 lg:px-9 xl:px-10 2xl:px-12'>
        {/* item section start */}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-5 md:gap-3 lg:gap-5 xl:gap-10'>
          {/* item1 section start */}
          <ul>
            <li className="md:flex md:items-center gap-3">
              {/* icon section start */}
              <div>
                <MdAddShoppingCart className="text-center md:text-left mx-auto md:mx-o text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600"></MdAddShoppingCart>
              </div>
              {/* icon section end */}
              {/* title & description section start */}
              <div>
                <p className="text-center md:text-left text-xs sm:text-lg md:text-xs lg:text-sm xl:text-md font-bold">Free Shipping</p>
                <p className="text-center md:text-left text-[10px] sm:text-sm md:text-[10px] lg:text-[11px] xl:text-xs text-gray-400">Order Complete 99.99%</p>
              </div>
              {/* title & description section end */}
            </li>
          </ul>
          {/* item1 section end */}
          {/* item2 section start */}
          <ul>
            <li className="md:flex md:items-center gap-3">
              {/* icon section start */}
              <div>
                <SiMyget className="text-center md:text-left mx-auto md:mx-o text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600"></SiMyget>
              </div>
              {/* icon section end */}
              {/* title & description section start */}
              <div>
                <p className="text-center md:text-left text-xs sm:text-lg md:text-xs lg:text-sm xl:text-md font-bold">90 Days Return</p>
                <p className="text-center md:text-left text-[10px] sm:text-sm md:text-[10px] lg:text-[11px] xl:text-xs text-gray-400">For Good Service</p>
              </div>
              {/* title & description section end */}
            </li>
          </ul>
          {/* item2 section end */}
          {/* item3 section start */}
          <ul>
            <li className="md:flex md:items-center gap-3">
              {/* icon section start */}
              <div>
                <FaWallet className="text-center md:text-left mx-auto md:mx-o text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600"></FaWallet>
              </div>
              {/* icon section end */}
              {/* title & description section start */}
              <div>
                <p className="text-center md:text-left text-xs sm:text-lg md:text-xs lg:text-sm xl:text-md font-bold">Secure Payments</p>
                <p className="text-center md:text-left text-[10px] sm:text-sm md:text-[10px] lg:text-[11px] xl:text-xs text-gray-400">100% Secure & Safe</p>
              </div>
              {/* title & description section end */}
            </li>
          </ul>
          {/* item3 section end */}
          {/* item4 section start */}
          <ul>
            <li className="md:flex md:items-center gap-3">
              {/* icon section start */}
              <div>
                <BiSupport className="text-center md:text-left mx-auto md:mx-o text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600"></BiSupport>
              </div>
              {/* icon section end */}
              {/* title & description section start */}
              <div>
                <p className="text-center md:text-left text-xs sm:text-lg md:text-xs lg:text-sm xl:text-md font-bold">24/7 Support Help</p>
                <p className="text-center md:text-left text-[10px] sm:text-sm md:text-[10px] lg:text-[11px] xl:text-xs text-gray-400">Executed Support</p>
              </div>
              {/* title & description section end */}
            </li>
          </ul>
          {/* item4 section end */}

        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
    </>
  );
};

export default Support;