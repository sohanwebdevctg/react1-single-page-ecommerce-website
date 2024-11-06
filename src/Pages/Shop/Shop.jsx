import AllProducts from "../../Components/ShopCom/AllProducts";
import ShopBanner from "../../Components/ShopCom/ShopBanner";
import ShopBrand from "../../Components/ShopCom/ShopBrand";
import Title from "../../Components/Title/Title";


const Shop = () => {
  return (
    <div>
      {/* title start */}
      <Title name={'shop'}></Title>
      {/* title end */}
      {/* shopBanner start */}
      <ShopBanner></ShopBanner>
      {/* shopBanner end */}
      {/* shopBrands start */}
      <ShopBrand></ShopBrand>
      {/* shopBrands end */}
      {/* allProducts start */}
      <AllProducts></AllProducts>
      {/* allProducts end */}
    </div>
  );
};

export default Shop;