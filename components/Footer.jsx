import SocialIcons from './SocialIcons'
const Footer = ({showFooter}) => {
    return (  <footer className="flex justify-center items-center bg-black p-6 lg:pl-1 lg:pr-0 lg:py-6  text-center text-white ">
        
        {/* DESKTOP FOOTER */}
        <div className="hidden lg:flex lg:mx-32 justify-between w-full">
       <span> &copy; markazknowledecity</span>
       <SocialIcons/>
        </div>
   <div className="lg:hidden">
 {!showFooter?<SocialIcons/>:(
     <div></div>
 )} 
   <div className="pt-2">
   &copy; markazknowledecity
   </div>
   </div>
</footer>);
}
 
export default Footer;