// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';
import { useEffect, useState } from 'react';



const OurBrand = () => {

  //set data
  const [brand, setBrand] = useState([])

  useEffect(() => {
    fetch('brandData.json')
    .then((res) => res.json())
    .then((data) => setBrand(data))
  },[])

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
          brand.map((data,index) => <SwiperSlide key={index}>
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