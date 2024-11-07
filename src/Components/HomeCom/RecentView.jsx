import { FaStar } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";


const recentlyData = [
  {id: 1, img: '/public/home/recent1.jpg',title: 'Bed Room',description: 'This is bed room', price: 40, rating: 4.7},
  {id: 2, img: '/public/home/recent2.jpg', title: 'Window Room', description: 'this is window room', price: 80, rating: 4.9},
  {id: 3, img: '/public/home/recent3.jpg',     title: 'Hotel Room', description: 'this is hotel room', price: 60,rating: 5.0},
  {id: 4, img: '/public/home/recent4.jpg',title: 'Luxury Room', description: 'this is private room', price: 140, rating: 5.0},
]


const RecentView = () => {

  
  //aos
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <>
      <div className="my-8 xl:my-12 ">
      {/* content section start */}
      <div className='container h-full w-full mx-auto px-6 md:px-7 lg:px-9 xl:px-10 2xl:px-12'>
      {/* title section start */}
      <div className="mb-5">
        <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-medium">Recently View</h1>
      </div>
      {/* title section end */}
      {/* items section start */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
        {/* item section start */}
        {
          recentlyData.map((data, id) => <div key={data.id} className="overflow-hidden rounded-lg shadow-lg shadow-slate-300 mainCon group relative" data-aos="zoom-in" data-aos-duration="1500">
          <img src={data.img} width={300} height={300} alt={`this is view ${data.id}`} className="w-full h-40 sm:h-36 md:h-32 lg:h-40 xl:h-44 2xl:h-48 group-hover:scale-110 duration-500 ease-in"></img>
          {/* details section start */}
          <div className="bg-black bg-opacity-55 py-1 px-2 absolute bottom-0 right-0 left-0">
            <ul>
              <li className="flex justify-between items-center">
                <h2 className="text-sm md:text-xs xl:tex-sm text-red-600 font-bold italic">{data.title}</h2>
                <p className="text-sm md:text-xs xl:text-sm text-slate-200 font-bold">$ {data.price}</p>
              </li>
              <li className="flex justify-between items-center">
                <p className="text-xs md:text-[10px] xl:text-xs text-slate-200">{data.description}</p>
                <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <FaStar className="text-yellow-500 text-xs md:text-[9px] xl:text-xs"></FaStar>
                  <span className="text-xs md:text-[9px] xl:text-xs text-slate-200 ml-1">{data.rating}</span>
                </span>
              </div>
              </li>
              
            </ul>
          </div>
          {/* details section end */}
        </div>)
        }
        {/* item section end */}

      </div>
      {/* items section end */}
      </div>
      {/* content section end */}
    </div>
    </>
  );
};

export default RecentView;