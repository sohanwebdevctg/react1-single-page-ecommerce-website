import AboutBanner from "../../Components/AboutCom/AboutBanner";
import Count from "../../Components/AboutCom/Count";
import GrowUp from "../../Components/AboutCom/GrowUp";


const About = () => {
  return (
    <div>
      {/* aboutBanner start */}
      <AboutBanner></AboutBanner>
      {/* aboutBanner end */}
      {/* growUp start */}
      <GrowUp></GrowUp>
      {/* growUp end */}
      {/* count start */}
      <Count></Count>
      {/* count end */}
    </div>
  );
};

export default About;