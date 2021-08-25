
const SocialIcons = () => {
    const links = [
        ["facebook","https://www.facebook.com/markaz.city"],
        ["instagram","https://www.instagram.com/markaz.city/"],
        ["twitter","https://twitter.com/markaz_city"],
        ["youtube","http://youtube.com/MarkazCity"],
        ["whatsapp","http://wa.me/+916235600600"],
        ["linkedin","https://www.linkedin.com/company/markazcity"],
    ];
    return (<div className="flex lg:mr-10">
{
    links.map(link=>(
        <a href={link} key={link[0]}> <img src={"/assets/icons/"+link[0]+".svg"} alt="" width="25px" className="mx-1" /> </a>
    ))
}
    </div>);
}
 
export default SocialIcons;