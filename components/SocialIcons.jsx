
const SocialIcons = () => {
    const links = [
        ["facebook","link"],
        ["instagram","link"],
        ["twitter","link"],
        ["youtube","link"],
        ["whatsapp","link"],
        ["linkedin","link"],
    ];
    return (<div className="flex lg:mr-10">
{
    links.map(link=>(
        <a href="" key={link[0]}> <img src={"/assets/icons/"+link[0]+".svg"} alt="" width="25px" className="mx-1" /> </a>
    ))
}
    </div>);
}
 
export default SocialIcons;