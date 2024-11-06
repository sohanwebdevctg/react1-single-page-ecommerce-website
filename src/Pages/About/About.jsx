import AboutBanner from "../../Components/AboutCom/AboutBanner";
import Count from "../../Components/AboutCom/Count";
import GrowUp from "../../Components/AboutCom/GrowUp";
import Services from "../../Components/AboutCom/Services";
import Title from "../../Components/Title/Title";


const About = () => {
  return (
    <div>
      {/* title start */}
      <Title name={'about'}></Title>
      {/* title end */}
      {/* aboutBanner start */}
      <AboutBanner></AboutBanner>
      {/* aboutBanner end */}
      {/* growUp start */}
      <GrowUp></GrowUp>
      {/* growUp end */}
      {/* service start */}
      <Services></Services>
      {/* service end */}
      {/* count start */}
      <Count></Count>
      {/* count end */}
    </div>
  );
};

export default About;