import img1 from '../../../public/home/img1.jpg';
import img2 from '../../../public/home/img2.jpg';
import img3 from '../../../public/home/img3.jpg';
import img4 from '../../../public/home/img4.jpg';
import img5 from '../../../public/home/img5.jpg';

const Gallery = () => {
  return (
    <>
      <div className="my-10 xl:my-12 px-3">
        {/* content section start */}
        <div className="container bg-[#F5F5F5] h-full w-full mx-auto py-10 md:py-8 lg:py-14 xl:py-10 px-5 sm:px-5 md:px-7 lg:px-10 xl:px-12">
          {/* title section start */}
          <div className="mb-5 text-center">
            <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">Our Gallery</h1>
          </div>
        {/* title section end */}
        {/* item start */}
          {/* top section start */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-3 mg:gap-4 lg:gap-5 xl:gap-6">
              <div className='w-full relative'>
                {/* img start */}
                <img src={img1} className='w-full h-48 md:h-52 lg:h-64 xl:h-72 2xl:h-80'></img>
                {/* img end */}
                {/* details start */}
                <div className='bg-black bg-opacity-60 absolute top-0 right-0 left-0 bottom-0 flex items-center pl-5'>
                  <ul className='space-y-1'>
                    <li className='text-white text-sm sm:text-xs md:text-[13px] lg:text-base xl:text-xl 2xl:text-2xl italic'>crazy deals</li>
                    <li className='text-white text-lg sm:text-sm md:text-base lg:text-xl xl:text-3xl 2xl:text-4xl font-bold'>buy 1 get 1 free</li>
                    <li className='text-gray-100 text-xs sm:text-[11px] md:text-xs lg:text-base xl:text-base 2xl:text-xl'>The best classic dress is on sell</li>
                    <li><button className="uppercase bg-red-600 text-[8px] sm:text-[8px] md:text-[9px] lg:text-[11px] 2xl:text-base px-2 md:px-2 xl:px-4 py-2 text-white"> Learn More </button></li>
                  </ul>
                </div>
                {/* details end */}
              </div>
              <div className='w-full relative'>
                {/* img start */}
                <img src={img2} className='w-full h-48 md:h-52 lg:h-64 xl:h-72 2xl:h-80'></img>
                {/* img end */}
                {/* details start */}
                <div className='bg-black bg-opacity-60 absolute top-0 right-0 left-0 bottom-0 flex items-center pl-5'>
                  <ul className='space-y-1'>
                    <li className='text-white text-sm sm:text-xs md:text-[13px] lg:text-base xl:text-xl 2xl:text-2xl italic'>spring/summer</li>
                    <li className='text-white text-lg sm:text-sm md:text-base lg:text-xl xl:text-3xl 2xl:text-4xl font-bold'>upcomming seasons</li>
                    <li className='text-gray-100 text-xs sm:text-[11px] md:text-xs lg:text-base xl:text-base 2xl:text-xl'>The best classic dress is on sell</li>
                    <li><button className="uppercase bg-red-600 text-[8px] sm:text-[8px] md:text-[9px] lg:text-[11px] 2xl:text-base px-2 md:px-2 xl:px-4 py-2 text-white"> Learn More </button></li>
                  </ul>
                </div>
                {/* details end */}
              </div>
            </div>
          {/* top section end */}
          {/* bottom section start */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-3 mg:gap-4 lg:gap-5 xl:gap-6 mt-5">
            {/* item start */}
              <div className='w-full relative'>
                {/* img start */}
                <img src={img3} className='w-full h-44 md:h-52 lg:h-56 xl:h-60 2xl:h-64'></img>
                {/* img end */}
                {/* details start */}
                <div className='bg-black bg-opacity-60 absolute top-0 right-0 left-0 bottom-0 flex items-end pl-5 pb-5'>
                  <ul className='space-y-1'>
                    <li className='text-gray-200 text-sm sm:text-sm md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl font-bold uppercase'>seasonal sale</li>
                    <li className='text-red-600 text-[11px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-base 2xl:text-base'>Winter Collection-50% OFF</li>
                  </ul>
                </div>
                {/* details end */}
              </div>
              {/* item end */}
            {/* item start */}
              <div className='w-full relative'>
                {/* img start */}
                <img src={img4} className='w-full h-44 md:h-52 lg:h-56 xl:h-60 2xl:h-64'></img>
                {/* img end */}
                {/* details start */}
                <div className='bg-black bg-opacity-60 absolute top-0 right-0 left-0 bottom-0 flex items-end pl-5 pb-5'>
                  <ul className='space-y-1'>
                    <li className='text-gray-200 text-sm sm:text-sm md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl font-bold uppercase'>new collection</li>
                    <li className='text-red-600 text-[11px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-base 2xl:text-base'>Spring/Summer-50% OFF</li>
                  </ul>
                </div>
                {/* details end */}
              </div>
              {/* item end */}
            {/* item start */}
              <div className='w-full relative'>
                {/* img start */}
                <img src={img5} className='w-full h-44 md:h-52 lg:h-56 xl:h-60 2xl:h-64'></img>
                {/* img end */}
                {/* details start */}
                <div className='bg-black bg-opacity-60 absolute top-0 right-0 left-0 bottom-0 flex items-end pl-5 pb-5'>
                  <ul className='space-y-1'>
                    <li className='text-gray-200 text-sm sm:text-sm md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl font-bold uppercase'>t-shirts</li>
                    <li className='text-red-600 text-[11px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-base 2xl:text-base'>New Trends-50% OFF</li>
                  </ul>
                </div>
                {/* details end */}
              </div>
              {/* item end */}
            </div>
          {/* bottom section end */}
        {/* item end */}
        </div>
        {/* content section end */}
      </div>
    </>
  );
};

export default Gallery;