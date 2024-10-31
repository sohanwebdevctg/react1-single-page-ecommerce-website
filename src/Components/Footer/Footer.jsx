import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-16">
      {/* content section start */}
      <div className="container mx-auto space-y-8">
        {/* top section start */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-12 px-6 md:px-7 lg:px-9 xl:px-10 2xl:px-12">
          {/* item1 start */}
          <div className="space-y-2">
            {/* title start */}
            <h3 className="text-sm sm:text-base md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-bold">ABOUT US</h3>
            {/* title end */}
            {/* list start */}
            <ul className="space-y-2">
              <li className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Our History</li>
              <li className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">FAQ by Support</li>
              <li className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">News & Update</li>
              <li className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Performance</li>
            </ul>
            {/* list end */}
          </div>
          {/* item1 end */}
          {/* item2 start */}
          <div className="space-y-2">
            {/* title start */}
            <h3 className="text-sm sm:text-base md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-bold">CONTACT US</h3>
            {/* title end */}
            {/* list start */}
            <ul className="space-y-2">
              <li className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Blog Site</li>
              <li className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Support Line</li>
              <li className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Social Media</li>
              <li className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Our Website</li>
            </ul>
            {/* list end */}
          </div>
          {/* item2 end */}
          {/* item3 start */}
          <div className="space-y-2">
            {/* title start */}
            <h3 className="text-sm sm:text-base md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-bold">HELP</h3>
            {/* title end */}
            {/* list start */}
            <ul className="space-y-2">
              <li className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">About Us</li>
              <li className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Careers</li>
              <li className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Newsroom</li>
              <li className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Contact Us</li>
            </ul>
            {/* list end */}
          </div>
          {/* item3 end */}
          {/* item4 start */}
          <div className="space-y-2">
            {/* list start */}
            <ul className="space-y-1 bg-black bg-opacity-40 text-left md:text-right py-2 sm:py-3 md:py-2 lg:py-3 xl:py-3 px-3 sm:px-5 md:px-3 lg:px-4 xl:px-5 rounded-ss-[32px] rounded-ee-[32px] xl:rounded-ss-[40px] xl:rounded-ee-[40px]">
              <li className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base">01639402634</li>
              <li className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base">xyzemail@gmail.com</li>
              <li className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base">140th Avenue, SE</li>
              <li className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base">Calgary, AB T20</li>
            </ul>
            {/* list end */}
            {/* social start */}
            <ul className="flex justify-around items-center">
              <li className="text-sm sm:text-lg md:text-sm lg:text-lg xl:text-2xl 2xl:text-2xl hover:text-red-600 duration-300 ease-in"><FaFacebookSquare></FaFacebookSquare></li>
              <li className="text-sm sm:text-lg md:text-sm lg:text-lg xl:text-2xl 2xl:text-2xl hover:text-red-600 duration-300 ease-in"><FaInstagram></FaInstagram></li>
              <li className="text-sm sm:text-lg md:text-sm lg:text-lg xl:text-2xl 2xl:text-2xl hover:text-red-600 duration-300 ease-in"><FaLinkedin></FaLinkedin></li>
              <li className="text-sm sm:text-lg md:text-sm lg:text-lg xl:text-2xl 2xl:text-2xl hover:text-red-600 duration-300 ease-in"><FaTwitterSquare></FaTwitterSquare></li>
              <li className="text-sm sm:text-lg md:text-sm lg:text-lg xl:text-2xl 2xl:text-2xl hover:text-red-600 duration-300 ease-in"><FaYoutube></FaYoutube></li>
            </ul>
            {/* social end */}
          </div>
          {/* item4 end */}


        </div>
        {/* top section end */}
        {/* middle section start */}
        <div className="px-5">
          <hr></hr>
        </div>
        {/* middle section end */}
        {/* bottom section start */}
        <ul className="flex flex-col sm:flex-row justify-between items-center gap-1 px-6 md:px-7 lg:px-9 xl:px-10 2xl:px-12">
          <li className="text-sm sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Copyright 2024 Xcode, All right reserved.</li>
          <li className="text-sm sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Privacy Policy Terms of Use</li>
        </ul>
        {/* bottom section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default Footer;