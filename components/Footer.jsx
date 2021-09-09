import SocialIcons from './SocialIcons'
const Footer = ({showFooter}) => {
    return (  <footer className="flex justify-center items-center bg-black p-6 text-center text-white ">
        
   <div>
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