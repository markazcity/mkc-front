import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import intro from '../asset/intro.json'

const Splash = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
  setInterval(()=>setLoading(false),4000);
    }, []);


    return (<div
    className="absolute z-50 flex justify-center items-center splash"
    style={{
        width:"100%",
        height:"100%",
    }}
    >
<Lottie animationData={intro} />
    </div>);
}
 
export default Splash;