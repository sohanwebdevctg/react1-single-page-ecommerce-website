import couple from '/public/blog/couple.jpg'
import bestCollection from '/public/blog/bestCollection.jpg'
import men from '/public/blog/men.jpg'
import wemen from '/public/blog/wemen.jpg'

import { FaLinkedin, FaLocationPin, FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const BlogPost = () => {

  
  //aos
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <>
      <div className="my-10 lg:my-12">
      {/* content section start */}
      <div className='container mx-auto px-6 md:px-7 lg:px-9 xl:px-10 2xl:px-12'>
        <div className="md:flex md:justify-between gap-4">
          {/* left section start */}
          <div className="w-full md:w-[65%] grid grid-cols-1 gap-5">
            {/* item1 section start */}
            <div data-aos="zoom-in" data-aos-duration="1200">
              <img src={couple} alt="this is our best room" className="w-full h-44 sm:h-48 md:h-48 lg:h-56 xl:h-80"></img>
              <div className="p-5 bg-[#F5F5F5]">
                <h1 className="text-sm sm:text-sm md:text-xs lg:text-base xl:text-lg font-bold">Best for couple</h1>
                <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-sm xl:text-sm mt-1">Consider multifunctional furniture pieces that maximize space efficiency and cater to different needs and activities. Lighting should be adjustable to create different moods, from intimate to functional. Textures and fabrics can add warmth and depth, with plush rugs or soft throws enhancing coziness....</p>
              </div>
            </div>
            {/* item1 section end */}
            {/* item2 section start */}
            <div data-aos="zoom-in" data-aos-duration="1200">
              <img src={bestCollection} alt="this is our best room" className="w-full h-44 sm:h-48 md:h-48 lg:h-56 xl:h-80"></img>
              <div className="p-5 bg-[#F5F5F5]">
                <h1 className="text-sm sm:text-sm md:text-xs lg:text-base xl:text-lg font-bold">Best Collection</h1>
                <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-sm xl:text-sm mt-1">A family-centric room design features cozy, earth-toned decor with plush seating, a sturdy coffee table, and versatile entertainment options.Thoughtful lighting and personal accents create a welcoming atmosphere for bonding and relaxation, combining comfort with functionality for shared moments.....</p>
              </div>
            </div>
            {/* item2 section end */}
          </div>
          {/* left section end */}
          {/* right section start */}
          <div className="w-full md:w-[35%] mt-3 md:mt-0">
          {/* item1 section start */}
          <div className="grid grid-cols-1 gap-2">
            {/* item1 section start */}
            <div className="space-y-2" data-aos="zoom-in" data-aos-duration="1000">
              <button className="w-full bg-[#F5F5F5] py-2 text-sm sm:text-sm md:text-xs lg:text-sm xl:text-base font-bold">
                Today Blogs
              </button>
              <img src={men} alt="today best product" className="w-full h-44 sm:h-44 md:h-40 lg:h-44 xl:h-52"></img>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-sm xl:text-sm">This is our best product today.You can buy this product in online or offline easily....</p>
            </div>
            {/* item1 section end */}
            {/* item2 section start */}
            <div className="space-y-2" data-aos="zoom-in" data-aos-duration="1000">
              <button className="w-full bg-[#F5F5F5] py-2 text-sm sm:text-sm md:text-xs lg:text-sm xl:text-base font-bold">
                Tomorrow Blogs
              </button>
              <img src={wemen} alt="today best product" className="w-full h-44 sm:h-44 md:h-40 lg:h-44 xl:h-52"></img>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-sm xl:text-sm">This is our best product tomorrow.You can buy this product in online or offline easily....</p>
            </div>
            {/* item2 section end */}
            {/* item3 section start */}
            <div className="space-y-2">
              <button className="w-full bg-[#F5F5F5] py-2 text-sm sm:text-sm md:text-xs lg:text-sm xl:text-base font-bold">
                Our Social Media
              </button>
              <ul className="space-y-2 sm:space-y-3 md:space-y-2 lg:space-y-2 xl:space-y-5">
                <li className="flex items-center gap-2 cursor-pointer">
                  <FaSquareFacebook className="text-lg sm:text-lg md:text-base lg:text-xl xl:text-3xl"></FaSquareFacebook>
                  <span className="text-sm sm:text-sm md:text-xs lg:text-base xl:text-xl">Facebook</span>
                </li>
                <li className="flex items-center gap-2 cursor-pointer">
                  <FaSquareXTwitter className="text-lg sm:text-lg md:text-base lg:text-xl xl:text-3xl"></FaSquareXTwitter>
                  <span className="text-sm sm:text-sm md:text-xs lg:text-base xl:text-xl">Twitter</span>
                </li>
                <li className="flex items-center gap-2 cursor-pointer">
                  <FaSquareInstagram className="text-lg sm:text-lg md:text-base lg:text-xl xl:text-3xl"></FaSquareInstagram>
                  <span className="text-sm sm:text-sm md:text-xs lg:text-base xl:text-xl">Instagram</span>
                </li>
                <li className="flex items-center gap-2 cursor-pointer">
                  <FaLinkedin className="text-lg sm:text-lg md:text-base lg:text-lg xl:text-3xl"></FaLinkedin>
                  <span className="text-sm sm:text-sm md:text-xs lg:text-base xl:text-xl">Linkedin</span>
                </li>
                <li className="flex items-center gap-2 cursor-pointer">
                  <FaLocationPin className="text-lg sm:text-lg md:text-base lg:text-lg xl:text-3xl"></FaLocationPin>
                  <span className="text-sm sm:text-sm md:text-xs lg:text-base xl:text-xl">Location</span>
                </li>
              </ul>
            </div>
            {/* item3 section end */}
          </div>
          {/* item1 section end */}
          </div>
          {/* right section end */}
        </div>
      </div>
      {/* content section end */}
    </div>
    </>
  );
};

export default BlogPost;