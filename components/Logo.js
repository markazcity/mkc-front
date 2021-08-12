import {useRouter} from 'next/router'

const Logo = ({logo}) => {
    const router = useRouter();
    const link = "/assets/img/";
    return (<img src={link+logo+".png"} 
    className="w-40 mx-10 py-8 md:mx-16 cursor-pointer	"
    alt="MKC"  data-aos="fade-right" data-aos-delay="100" onClick={() =>router.push("/") } />);
}
 
export default Logo;