import { Outlet } from "react-router-dom";
import Navbar from './../Components/Navbar/Navbar';
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
  return (
    <>
      {/* navbar section start */}
      <Navbar></Navbar>
      {/* navbar section end */}
      {/* content section start */}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {/* content section end */}
      {/* footer section start */}
      <Footer></Footer>
      {/* footer section end */}
    </>
  );
};

export default MainLayout;