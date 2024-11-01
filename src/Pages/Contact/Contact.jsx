import ContactBanner from "../../Components/ContactCom/ContactBanner";
import Location from "../../Components/ContactCom/Location";




const Contact = () => {
  return (
    <div>
      {/* contactBanner start */}
      <ContactBanner></ContactBanner>
      {/* contactBanner end */}
      {/* location start */}
      <Location></Location>
      {/* location end */}
    </div>
  );
};

export default Contact;