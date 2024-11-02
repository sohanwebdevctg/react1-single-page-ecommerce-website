import { FaArrowRight, FaInstagram, FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import BannerSlider from "./BannerSlider";


const Banner = () => {
  return (
    <>
      <div className='h-full xl:h-[420px] px-0 sm:px-4 md:px-4'>
      {/* content section start */}
      <div className='container mx-auto bg-[#F5F5F5] h-full w-full py-10 px-3 sm:px-5 md:px-4 lg:px-10 xl:px-12'>
        {/* item section start */}
        <div className='sm:flex sm:justify-between sm:items-center w-full h-full'>
          {/* left item section start */}
          <div className="w-full sm:w-[50%] space-y-3">
            {/* small title start */}
            <h6 className='text-[8px] lg:text-[10px] uppercase tracking-widest'>top trending 2024</h6>
            {/* small title end */}
            {/* title start */}
            <h4 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold">Save <span className='text-red-600'>Money</span> <br></br>Live Better</h4>
            {/* title end */}
            {/* description start */}
            <p className="text-xs sm:text-[10px] md:text-xs lg:text-sm xl:text-base tracking-widest text-gray-500">We have furniture designs in solid wood, <br></br>engineered wood and metal</p>
            {/* description end */}
            <div className="flex items-center gap-3">
              <h4 className='text-red-500 text-base sm:text-sm md:text-sm lg:text-base xl:text-base flex items-center'>Follow Us <FaArrowRight className="ml-2 text-base sm:text-sm md:text-sm lg:text-base xl:text-base"></FaArrowRight></h4>
              <ul className="flex items-center gap-1">
                <li><FaFacebookSquare className="text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl hover:text-red-500 duration-500"></FaFacebookSquare></li>
                <li><FaInstagram className="text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl hover:text-red-500 duration-500"></FaInstagram></li>
                <li><FaLinkedin className="text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl hover:text-red-500 duration-500"></FaLinkedin></li>
                <li><FaTwitterSquare className="text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl hover:text-red-500 duration-500"></FaTwitterSquare></li>
              </ul>
            </div>
          </div>
          {/* left item section end */}
          {/* right item section start */}
          <div className="w-full sm:w-[50%] py-4 sm:py-2">
            <BannerSlider></BannerSlider>
          </div>
          {/* right item section end */}
        </div>
        {/* item section end */}
      </div>
      {/* content section end */}
    </div>
    </>
  );
};

export default Banner;