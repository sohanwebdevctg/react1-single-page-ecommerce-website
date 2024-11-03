// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';


const brandData = [
  {id : 1, img : '/public/shop/brand1.png'},
  {id : 2, img : '/public/shop/brand2.png'},
  {id : 3, img : '/public/shop/brand3.png'},
  {id : 4, img : '/public/shop/brand4.png'},
  {id : 5, img : '/public/shop/brand5.png'},
  {id : 6, img : '/public/shop/brand6.png'},
  {id : 7, img : '/public/shop/brand7.png'},
  {id : 8, img : '/public/shop/brand8.png'},
  {id : 9, img : '/public/shop/brand9.png'},
  {id : 10, img : '/public/shop/brand10.png'},
  {id : 11, img : '/public/shop/brand12.png'},
  {id : 12, img : '/public/shop/brand12.png'},
]

const ShopBrand = () => {
  return (
    <>
      <div>
      <div className="bg-[#F5F5F5] py-6">
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

export default ShopBrand;