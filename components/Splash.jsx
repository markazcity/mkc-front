import { useEffect, useState } from "react";


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
<img src="/icon.png" alt="" style={{
    height:"200px",
}}
className="splash-image opacity-0"
data-aos="fade-up"
data-aos-duration="2000"
/>
    </div>);
}
 
export default Splash;