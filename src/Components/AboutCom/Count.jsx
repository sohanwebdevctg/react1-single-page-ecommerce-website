import CountUp from 'react-countup';


const Count = () => {

  // servicesData
  const servicesData = [
    {id: 1, title : "Industry Expert", description : "Our Expert worked 99.99%", percent : 4000},
    {id : 2, title : "Success Ratio", description : "Our Working rate 99.98%", percent : 100},
    {id : 3, title : "Companies", description : "Our export companies 88.00%", percent : 56},
    {id : 4, title : "Expert", description : "Expert worker 97.00%", percent : 2700},
    {id : 5, title : "Successful", description : "Our Success 100%", percent : 100 },
  ];


  return (
    <>
      <div className="mt-10 lg:mt-12 py-10 bg-black bg-opacity-35">
      {/* content section start */}
      <div className='container h-full w-full mx-auto px-6 md:px-7 lg:px-10 xl:px-12'>
        {/* items section start */}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
          {/* item section start */}
          {
            servicesData.map((data,id) => <ul key={data.id}>
            <li>
              {/* icon section start */}
              <div>
                <h3 className="text-center mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-red-600 font-bold">
                  {/* counterUp start */}
                  <CountUp start={0} end={data.percent} duration={9.75} />
                  {/* counterUp end */}
                </h3>
              </div>
              {/* icon section end */}
              {/* title & description section start */}
              <div>
                <p className="text-center text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-bold">{data.title}</p>
                <p className="text-center text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white">{data.description}</p>
              </div>
              {/* title & description section end */}
            </li>
          </ul>)
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

export default Count;