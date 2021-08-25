import { useEffect, useState } from "react";


const Splash = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
  setInterval(()=>setLoading(false),4000);
    }, []);


    return (<div
    className="absolute z-50 flex justify-center items-center splash"
    style={{
        minWidth:"100%",
        minHeight:"100vh",
        maxWidth:"100%",
        maxHeight:"100vh",
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