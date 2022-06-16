import SocialIcons from "../SocialIcons";

const ContactForm = () => {
  return (
    <section className="pb-10 flex lg:justify-start lg:item-left sm:item-center  sm:justify-center socialIcons  ">
      <div className="text-center socialIconsDiv">
        <h2 className="lg:text-2xl text-left flex flex-cols item-center ">
          Get Connected
        </h2>
        <p className="py-2">
          <SocialIcons />
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
