const Logo = ({logo}) => {
    const link = "/assets/img/";
    return (<img src={link+logo+".png"} 
    className="w-40 mx-10 my-8 md:mx-16"
    alt="MKC" />);
}
 
export default Logo;