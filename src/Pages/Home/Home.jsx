import Banner from "../../Components/HomeCom/Banner";
import Gallery from "../../Components/HomeCom/Gallery";
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
    </div>
  );
};

export default Home;