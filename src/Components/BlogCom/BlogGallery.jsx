import success from '/public/blog/success.jpg'
import delivery from '/public/blog/delivery.jpg'
import industry from '/public/blog/industry.jpg'
import award from '/public/blog/award.jpg'
import working from '/public/blog/working.jpg'


const BlogGallery = () => {
  return (
    <>
      <div className="my-10 lg:my-12">
      {/* content section start */}
      <div className='container mx-auto px-6 md:px-7 lg:px-9 xl:px-10 2xl:px-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
          {/* item1 section start */}
          <div>
            {/* left item1 section start */}
            <div className='h-44 sm:h-40 md:h-40 lg:h-48 xl:h-52 w-full relative'>
              <img src={success} alt="this is success section" className='h-full w-full'></img>
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-55 flex items-end p-3">
                <ul>
                  <li><h1 className='text-sm sm:text-sm md:text-xs lg:text-base xl:text-lg font-bold text-red-600'>Our Worker Success</h1></li>
                  <li><p className='text-white text-xs sm:text-xs md:text-[10px] lg:text-sm xl:text-sm'>we support our work who can find out her best service to provide our client...</p></li>
                </ul>
              </div>
            </div>
            {/* left item1 section end */}
            {/* left item2 section start */}
            <div className='h-44 sm:h-40 md:h-40 lg:h-48 xl:h-52 w-full relative mt-3'>
              <img src={delivery} alt="this is delivery section" className='h-full w-full'></img>
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-55 flex items-end p-3">
              <ul>
                <li><h1 className='text-sm sm:text-sm md:text-xs lg:text-base xl:text-lg font-bold text-red-600'>Our Delivery Process</h1></li>
                  <li><p className='text-white text-xs sm:text-xs md:text-[10px] lg:text-sm xl:text-sm'>Our export or service process are very good quality. we want to provide best service to our client...</p></li>
                </ul>
              </div>
            </div>
            {/* left item2 section end */}
          </div>
          {/* item1 section end */}
          {/* item2 section start */}
          <div className='sm:hidden md:block'>
            {/* middle item section start */}
            <div className='h-44 md:h-full lg:h-full xl:h-full w-full relative'>
              <img src={award} alt="this is award section" className='h-full w-full'></img>
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-55 flex items-end p-3">
              <ul>
                <li><h1 className='text-sm md:text-xs lg:text-base xl:text-lg font-bold text-red-600'>Our Award</h1></li>
                  <li><p className='text-white text-xs md:text-[10px] lg:text-sm xl:text-sm'>We get best service award next two year in this field. our next target to provide always our best quality...</p></li>
                </ul>
              </div>
            </div>
            {/* middle item section end */}
          </div>
          {/* item2 section end */}
          {/* item3 section start */}
          <div>
            {/* right item1 section start */}
            <div className='h-44 sm:h-40 md:h-40 lg:h-48 xl:h-52 relative w-full'>
              <img src={industry} alt="this is industry section" className='h-full w-full'></img>
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-55 flex items-end p-3">
              <ul>
                <li><h1 className='text-sm sm:text-sm md:text-xs lg:text-base xl:text-lg font-bold text-red-600'>Our Industry</h1></li>
                  <li><p className='text-white text-xs sm:text-xs md:text-[10px] lg:text-sm xl:text-sm'>Our Industry is the best industry in this area. you can not find any problem...</p></li>
                </ul>
              </div>
            </div>
            {/* right item1 section end */}
            {/* right item2 section start */}
            <div className='h-44 sm:h-40 md:h-40 lg:h-48 xl:h-52 w-full relative mt-3'>
              <img src={working} alt="this is success section" className='h-full w-full'></img>
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-55 flex items-end p-3">
              <ul>
                <li><h1 className='text-sm sm:text-sm md:text-xs lg:text-base xl:text-lg font-bold text-red-600'>Our Working Area</h1></li>
                  <li><p className='text-white text-xs sm:text-xs md:text-[10px] lg:text-sm xl:text-sm'>Our working office are peachfull and very...</p></li>
                </ul>
              </div>
            </div>
            {/* right item2 section end */}
          </div>
          {/* item3 section end */}
        </div>
      </div>
      {/* content section end */}
    </div>
    </>
  );
};

export default BlogGallery;