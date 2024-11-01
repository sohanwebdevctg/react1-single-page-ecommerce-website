import ContactBanner from "../../Components/ContactCom/ContactBanner";
import ContactForm from "../../Components/ContactCom/ContactForm";
import Location from "../../Components/ContactCom/Location";




const Contact = () => {
  return (
    <div>
      {/* contactBanner start */}
      <ContactBanner></ContactBanner>
      {/* contactBanner end */}
      {/* contactForm start */}
      <ContactForm></ContactForm>
      {/* contactForm end */}
      {/* location start */}
      <Location></Location>
      {/* location end */}
    </div>
  );
};

export default Contact;