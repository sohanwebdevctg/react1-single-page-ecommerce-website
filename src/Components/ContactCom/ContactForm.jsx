import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare, FaYoutube, FaFax } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";


const ContactForm = () => {
  return (
    <>
      <div className="px-5 sm:px-4 md:px-4 my-16">
      {/* content section start */}
      <div className='container mx-auto bg-[#F5F5F5] h-full w-full p-6 xl:p-10'>
        <div className="sm:flex sm:justify-around">
          {/* left start */}
          <div className="flex-1 flex flex-col justify-between space-y-5">
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl">Let's talk <br></br>on something <span className="text-red-600">great</span> <br></br>together</h3>
            <ul className="space-y-3 sm:space-y-5 xl:space-y-7">
              <li className="flex gap-1 sm:gap-2 xl:gap-3 items-center">
                <BsFillTelephoneFill className="bg-black text-[22px] md:text-[24px] lg:text-[27px] xl:text-3xl rounded-full p-1 xl:p-2 text-red-600 bg-opacity-75"></BsFillTelephoneFill>
                <span className="text-sm md:text-[15px] lg:text-base xl:text-base">+234 8993 98043</span>
              </li>
              <li className="flex gap-1 sm:gap-2 xl:gap-3 items-center">
                <CgMail className="bg-black text-[22px] md:text-[24px] lg:text-[27px] xl:text-3xl rounded-full p-1 xl:p-2 text-red-600 bg-opacity-75"></CgMail>
                <span className="text-sm md:text-[15px] lg:text-base xl:text-base">andreal@gmail.com</span></li>
              <li className="flex gap-1 sm:gap-2 xl:gap-3 items-center">
                <FaFax className="bg-black text-[22px] md:text-[24px] lg:text-[27px] xl:text-3xl rounded-full p-1 xl:p-2 text-red-600 bg-opacity-75"></FaFax>
                <span className="text-sm md:text-[15px] lg:text-base  xl:text-base">855-555-5544</span>
                </li>
              <li className="flex gap-1 sm:gap-2 xl:gap-3 items-center">
                <FaLocationDot className="bg-black text-[22px] md:text-[24px] lg:text-[27px] xl:text-3xl rounded-full p-1 xl:p-2 text-red-600 bg-opacity-75"></FaLocationDot>
                <span className="text-sm md:text-[15px] lg:text-base xl:text-base">123 Ctg, Bangladesh</span>
              </li>
            </ul>
            {/* icon section start */}
            <ul className="flex gap-5 items-center">
                <li><FaFacebookSquare className="text-xl sm:text-lg md:text-[22px] lg:text-2xl xl:text-2xl hover:text-red-600 duration-500"></FaFacebookSquare></li>
                <li><FaInstagram className="text-xl sm:text-lg md:text-[22px] lg:text-2xl xl:text-2xl hover:text-red-600 duration-500"></FaInstagram></li>
                <li><FaLinkedin className="text-xl sm:text-lg md:text-[22px] lg:text-2xl xl:text-2xl hover:text-red-600 duration-500"></FaLinkedin></li>
                <li><FaTwitterSquare className="text-xl sm:text-lg md:text-[22px] lg:text-2xl xl:text-2xl hover:text-red-600 duration-500"></FaTwitterSquare></li>
                <li><FaYoutube className="text-2xl sm:text-xl md:text-[22px] lg:text-2xl xl:text-3xl hover:text-red-600 duration-500"></FaYoutube></li>
            </ul>
            {/* icon section end */}
          </div>
          {/* left end */}
          {/* right start */}
          <div className="flex-1 mt-10 sm:mt-0">
            <form className="bg-white shadow-lg p-4 xl:p-8 space-y-3 sm:space-y-3 xl:space-y-5 rounded-md">
              <div>
                <h1 className="text-lg sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl font-bold">Send Message</h1>
                <p className="text-xs sm:text-[13px] md:text-sm lg:text-base xl:text-sm w-full lg:w-[90%] mt-3 text-gray-500">Can you share us your name, your email address, your phone number, your address, and what type topic you want to talk us please feel free contact us.</p>
              </div>
              <div className="sm:flex sm:items-center sm:justify-between gap-2 sm:gap-2 lg:gap-3 xl:gap-5 mt-5">
                <input className="w-full h-full p-2 xl:p-3 border-[1px] border-gray-300 rounded-md text-xs sm:text-xs md:text-sm lg:text-base" type="text" placeholder="Enter your name"></input>
                <input className="w-full h-full p-2 xl:p-3 border-[1px] border-gray-300 rounded-md text-xs sm:text-xs md:text-sm lg:text-base mt-3 sm:mt-0" type="email" placeholder="Enter your email"></input>
              </div>
              <div className="sm:flex sm:items-center sm:justify-between gap-2 sm:gap-2 lg:gap-3 xl:gap-5">
                <input className="w-full h-full p-2 xl:p-3 border-[1px] border-gray-300 rounded-md text-xs sm:text-xs md:text-sm lg:text-base" type="text" placeholder="Enter your address"></input>
                <input className="w-full h-full p-2 xl:p-3 border-[1px] border-gray-300 rounded-md text-xs sm:text-xs md:text-sm lg:text-base mt-3 sm:mt-0" type="text" placeholder="Enter your number"></input>
              </div>
              <div className="">
                <textarea className="w-full h-24 xl:h-32 p-3 border-[1px] border-gray-300 rounded-md text-xs sm:text-xs md:text-sm lg:text-base" type="text" placeholder="Enter your details"></textarea>
              </div>
              <div className="">
                <button type="submit" className="bg-red-600 text-white p-2 text-[10px] sm:text-[11px] md:text-[11px] lg:text-sm xl:text-sm rounded-sm font-bold">Send Message</button>
              </div>
            </form>
          </div>
          {/* right end */}
        </div>
      </div>
      {/* content section end */}
    </div>
    </>
  );
};

export default ContactForm;