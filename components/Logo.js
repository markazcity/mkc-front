import {useRouter} from 'next/router'

const Logo = ({logo, className}) => {
    const router = useRouter();
    const link = "/assets/img/";
    return (<img src={link+logo+".svg"}
    className={"w-40 lg:ml-32 py-10 cursor-pointer "+className}
    alt="MKC"  data-aos="fade-right" data-aos-delay="100" 
    onClick={() =>router.push("/")} />);
}
 
export default Logo;