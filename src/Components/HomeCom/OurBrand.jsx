// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';

const brandData = [
  {id : 1, img : '/public/home/brand1.png'},
  {id : 2, img : '/public/home/brand2.png'},
  {id : 3, img : '/public/home/brand3.png'},
  {id : 4, img : '/public/home/brand4.png'},
  {id : 5, img : '/public/home/brand5.png'},
  {id : 6, img : '/public/home/brand6.png'},
  {id : 7, img : '/public/home/brand7.png'},
  {id : 8, img : '/public/home/brand8.png'},
  {id : 9, img : '/public/home/brand9.png'},
  {id : 10, img : '/public/home/brand10.png'},
  {id : 11, img : '/public/home/brand12.png'},
  {id : 12, img : '/public/home/brand12.png'},
]

const OurBrand = () => {
  return (
    <>
      <div className='my-6 xl:my-10'>
      <div className="bg-[#F5F5F5] container mx-auto py-6 px-6 md:px-7 lg:px-9 xl:px-10 2xl:px-12">
      {/* content section start */}
      <Swiper
        spaceBetween={20}
        freeMode={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{
          loop: true,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper px-2"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 4,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 6,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {/* brand section start */}
        {
          brandData.map((data,index) => <SwiperSlide key={index}>
          <div className='overflow-hidden'>
            <img src={data.img} alt={`this is ${data.id} brand logo`} className="w-96 h-12"/>
          </div>
        </SwiperSlide>)
        }
        {/* brand section end */}
      </Swiper>

      {/* content section end */}
    </div>
    </div>
    </>
  );
};

export default OurBrand;