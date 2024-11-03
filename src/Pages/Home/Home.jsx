import Banner from "../../Components/HomeCom/Banner";
import FeaturedProducts from "../../Components/HomeCom/FeaturedProducts";
import Gallery from "../../Components/HomeCom/Gallery";
import NewProducts from "../../Components/HomeCom/NewProducts";
import OurBrand from "../../Components/HomeCom/OurBrand";
import RecentView from "../../Components/HomeCom/RecentView";
import RepairService from "../../Components/HomeCom/RepairService";
import Support from "../../Components/HomeCom/Support";


const Home = () => {
  return (
    <div>
      {/* banner start */}
      <Banner></Banner>
      {/* banner end */}
      {/* support start */}
      <Support></Support>
      {/* support end */}
      {/* gallery start */}
      <Gallery></Gallery>
      {/* gallery end */}
      {/* newProducts start */}
      <NewProducts></NewProducts>
      {/* newProducts end */}
      {/* repairService start */}
      <RepairService></RepairService>
      {/* repairService end */}
      {/* featuredProducts start */}
      <FeaturedProducts></FeaturedProducts>
      {/* featuredProducts end */}
      {/* ourBrand start */}
      <OurBrand></OurBrand>
      {/* ourBrand end */}
      {/* recentView start */}
      <RecentView></RecentView>
      {/* recentView end */}
    </div>
  );
};

export default Home;