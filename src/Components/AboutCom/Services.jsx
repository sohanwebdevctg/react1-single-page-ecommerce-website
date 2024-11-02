import img1 from '/public/about/img1.png';
import img2 from '/public/about/img2.png';
import img3 from '/public/about/img3.png';
import img4 from '/public/about/img4.png';
import img5 from '/public/about/img5.png';
import img6 from '/public/about/img6.png';

const Services = () => {

  
  return (
    <>
      <div className="my-10 lg:my14">
        {/* content start */}
        <div className="container mx-auto px-6 md:px-7 lg:px-9 xl:px-10 2xl:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4 sm:gap-6 md:gap-3 lg:gap-5 xl:gap-7 2xl:gap-8">
            {/* item start */}
            <div className='border-2 border-gray-100 p-3 md:p-3 lg:p-4 xl:p-5 2xl:p-5 text-center space-y-1'>
              <img src={img1} className='w-full h-28 md:h-24 lg:h-28 xl:h-32 2xl:h-32 '></img>
              <h4 className='bg-red-600 text-white text-xs md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base py-1'>Free Shipping</h4>
            </div>
            {/* item end */}
            {/* item start */}
            <div className='border-2 border-gray-100 p-3 md:p-3 lg:p-4 xl:p-5 2xl:p-5 text-center space-y-1'>
              <img src={img2} className='w-full h-28 md:h-24 lg:h-28 xl:h-32 2xl:h-32 '></img>
              <h4 className='bg-red-600 text-white text-xs md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base py-1'>Online Order</h4>
            </div>
            {/* item end */}
            {/* item start */}
            <div className='border-2 border-gray-100 p-3 md:p-3 lg:p-4 xl:p-5 2xl:p-5 text-center space-y-1'>
              <img src={img3} className='w-full h-28 md:h-24 lg:h-28 xl:h-32 2xl:h-32 '></img>
              <h4 className='bg-red-600 text-white text-xs md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base py-1'>Save Money</h4>
            </div>
            {/* item end */}
            {/* item start */}
            <div className='border-2 border-gray-100 p-3 md:p-3 lg:p-4 xl:p-5 2xl:p-5 text-center space-y-1'>
              <img src={img4} className='w-full h-28 md:h-24 lg:h-28 xl:h-32 2xl:h-32 '></img>
              <h4 className='bg-red-600 text-white text-xs md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base py-1'>Promotions</h4>
            </div>
            {/* item end */}
            {/* item start */}
            <div className='border-2 border-gray-100 p-3 md:p-3 lg:p-4 xl:p-5 2xl:p-5 text-center space-y-1'>
              <img src={img5} className='w-full h-28 md:h-24 lg:h-28 xl:h-32 2xl:h-32 '></img>
              <h4 className='bg-red-600 text-white text-xs md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base py-1'>Happy Sell</h4>
            </div>
            {/* item end */}
            {/* item start */}
            <div className='border-2 border-gray-100 p-3 md:p-3 lg:p-4 xl:p-5 2xl:p-5 text-center space-y-1'>
              <img src={img6} className='w-full h-28 md:h-24 lg:h-28 xl:h-32 2xl:h-32 '></img>
              <h4 className='bg-red-600 text-white text-xs md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base py-1'>24/7 Support</h4>
            </div>
            {/* item end */}
          </div>
        </div>
        {/* content end */}
      </div>
    </>
  );
};

export default Services;