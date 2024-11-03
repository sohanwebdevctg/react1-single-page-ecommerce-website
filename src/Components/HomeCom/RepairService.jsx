

const RepairService = () => {
  return (
    <>
      <div className="my-10 xl:my-12 repairCon">
        {/* content section start */}
        <div className="container mx-auto px-5 py-12">
          {/* item start */}
          <ul className="text-center space-y-2">
            <li className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Repair Services</li>
            <li className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">Up to <span className="text-red-600">70% 0ff</span> - All T-shirts & Accessories</li>
            <li><button className="bg-red-600 text-[10px] sm:text-[11px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-lg px-4 py-2 text-white rounded"> Explore More </button></li>
          </ul>
          {/* item end */}
        </div>
        {/* content section end */}
      </div>
    </>
  );
};

export default RepairService;