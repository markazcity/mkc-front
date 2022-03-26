import ContactForm from './ContactForm'

const Footer = ({showFooter}) => {

var links = [
  {name: 'About', url: '/about'},
  {name: 'Components', url: '/components'},
  {name: 'Career', url: '/career'},
  {name: 'Contact', url: '/contact'},
  {name: 'Blog', url: '/blog'},

];

  const linkClass = "text-gray-400 hover:text-white transition duration-500 ease-in-out";
  const privacyUrl = "/policy/privacy";
  const termsUrl = "/policy/privacy";
  const cookieUrl = "/policy/privacy";
    return (  <footer className="bg-black">
    <div className="flex justify-center">
    {
  links.map((link) => {
    return ( <a 
      className="mx-1 text-xs"
      key={link.name}
      href={link.url}>{link.name}</a>)
  })
}
    </div>
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
<a href={privacyUrl} className={linkClass}>Privacy Policy</a> <span className="mx-2 text-yellow-500">•</span>
<a href={termsUrl} className={linkClass}>Terms of Use</a> <span className="mx-2 text-yellow-500">•</span>
<a href={cookieUrl} className={linkClass}>Cookie Policy</a>
      </div>
        </div>

   <div className="lg:hidden">
 {/* {!showFooter?<SocialIcons/>:(
     <div></div>
 )}  */}
 <div className="flex my-4">
<a href={privacyUrl} className={linkClass}>Privacy Policy</a> <span className="mx-2 text-yellow-500">•</span>
<a href={termsUrl} className={linkClass}>Terms of Use</a> <span className="mx-2 text-yellow-500">•</span>
<a href={cookieUrl} className={linkClass}>Cookie Policy</a>
      </div>
   <div className="pt-2">
   &copy; markazknowledgecity
   </div>
   </div>
   </div>


</footer>);
}
 
export default Footer;