import SocialIcons from '../SocialIcons'

const ContactForm = () => {
    return (
        <section
        className="lg:px-32 py-16 flex justify-center lg:justify-start"
        >
           <div>
           <h2 className="lg:text-2xl text-center text-gray-600">Get Connected</h2>
            <p className="py-2">
            <SocialIcons/>
            </p>
           </div>
        </section>
    );
}
 
export default ContactForm;