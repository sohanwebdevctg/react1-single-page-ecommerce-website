// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';




const BannerSlider = () => {

  // loading data
  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch('bannerInfo.json')
    .then((res) => res.json())
    .then((data) => setDatas(data))
  },[]);


  return (
    <div className='sliderCon bg-black w-56 h-56 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-80 xl:h-80 rounded-full mx-auto overflow-hidden'>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="bannerSwiper"
    >
      {/* item section start */}
      {
        datas.map((data,index) => <SwiperSlide key={index}>
        <div className='overflow-hidden'>
          <img src={data.image} alt={`this is banner slider ${data.id}`} width={200} height={200} className='w-56 h-56 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-[280px] xl:h-[300px] mx-auto text-center p-5'></img>
        </div>
      </SwiperSlide>)
      }
      
      {/* item section end */}
      
    </Swiper>
  </div>
  );
};

export default BannerSlider;