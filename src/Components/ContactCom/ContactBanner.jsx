

const ContactBanner = () => {
  return (
    <>
      <div className="flex justify-center items-center h-96" id="contactBanner">
      {/* content section start */}
      <ul className="text-center space-y-2 px-4">
        <li><h4 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold text-red-600">Contact Information</h4></li>
        <li><p className="text-sm sm:text-base xl:text-base 2xl:text-xl text-gray-50">please contact us directly if you want to know anything. We provide direct <br className="hidden md:block"></br> service to our customers.</p></li>
        <li><button className="uppercase bg-red-600 text-[10px] sm:text-[11px] md:text-xs 2xl:text-base px-4 py-2 text-white">contact us</button></li>
      </ul>
      {/* content section end */}
      </div>
    </>
  );
};

export default ContactBanner;