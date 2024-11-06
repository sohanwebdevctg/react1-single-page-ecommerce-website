import ContactBanner from "../../Components/ContactCom/ContactBanner";
import ContactForm from "../../Components/ContactCom/ContactForm";
import Location from "../../Components/ContactCom/Location";
import Title from "../../Components/Title/Title";




const Contact = () => {
  return (
    <div>
      {/* title start */}
      <Title name={'contact'}></Title>
      {/* title end */}
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