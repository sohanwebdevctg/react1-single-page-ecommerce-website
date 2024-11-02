// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const bannerData = [
  {id: 1, image : '/public/home/banner1.png'},
  {id: 2, image : '/public/home/banner2.png'},
  {id: 3, image : '/public/home/banner3.png'},
  {id: 4, image : '/public/home/banner4.png'},
  {id: 5, image : '/public/home/banner5.png'},
  {id: 6, image : '/public/home/banner6.png'},
  {id: 7, image : '/public/home/banner7.png'},
  {id: 8, image : '/public/home/banner8.png'},
  {id: 9, image : '/public/home/banner9.png'}
];


const BannerSlider = () => {


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
        bannerData.map((data,index) => <SwiperSlide key={index}>
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