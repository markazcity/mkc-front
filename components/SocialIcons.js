import {AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import {IoLogoFacebook} from 'react-icons/io5'

const SocialIcons = () => {
    return (<div className="flex">
<IoLogoFacebook className="text-2xl mr-1"/>
<AiFillTwitterCircle className="text-2xl mr-1"/>
<AiFillInstagram className="text-2xl"/>
    </div>);
}
 
export default SocialIcons;