import ContactForm from './ContactForm'

const Footer = ({showFooter}) => {
    return (  <footer className="bg-black">
    <ContactForm/>    
<div>

  
</div>
<div
 className="flex justify-center items-center  p-6 lg:pl-1 lg:pr-0 lg:py-6  text-center text-white "
>

        {/* DESKTOP FOOTER */}
        <div className="hidden lg:flex lg:mx-32 justify-between w-full">
       <span> &copy; markazknowledgecity</span>
      <div className="flex">
<a href="">Privacy Policy</a> <span className="mx-2 text-yellow-500">•</span>
<a href="">Terms of Use</a> <span className="mx-2 text-yellow-500">•</span>
<a href="">Cookie Policy</a>
      </div>
        </div>

   <div className="lg:hidden">
 {/* {!showFooter?<SocialIcons/>:(
     <div></div>
 )}  */}
 <div className="flex my-4">
<a href="">Privacy Policy</a> <span className="mx-2 text-yellow-500">•</span>
<a href="">Terms of Use</a> <span className="mx-2 text-yellow-500">•</span>
<a href="">Cookie Policy</a>
      </div>
   <div className="pt-2">
   &copy; markazknowledgecity
   </div>
   </div>
   </div>


</footer>);
}
 
export default Footer;