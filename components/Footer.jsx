import SocialIcons from './SocialIcons'
const Footer = ({showFooter}) => {
    return (  <footer className="flex justify-center items-center bg-black p-6 text-center text-white ">
        
   <div>
  <SocialIcons/>
   <div className="pt-2">
   &copy; markazknowledecity
   </div>
   </div>
</footer>);
}
 
export default Footer;