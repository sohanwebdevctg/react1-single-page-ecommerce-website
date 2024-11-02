import Banner from "../../Components/HomeCom/Banner";
import Gallery from "../../Components/HomeCom/Gallery";
import OurBrand from "../../Components/HomeCom/OurBrand";
import RecentView from "../../Components/HomeCom/RecentView";
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