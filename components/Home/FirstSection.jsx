import SocialIcons from "../SocialIcons"
import styles from '../../styles/Home.module.css'
import { useState, useEffect, useRef } from "react"
import Tilt from 'react-parallax-tilt';

const FirstSection = () => {
    const TEXTS = [
        "Think",
        "Dialogue",
        "Craft",
        "Innovation",
        "Transform",
        "Network",
        "Tradition"
        ];
        
          const [index, setIndex] = useState(0);
          const navRef = useRef();
          const slideImages = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg"]
          useEffect(() => {
            const intervalId = setInterval(()=>{
              setIndex(index => index + 1);
            },
              4000 
            );
            return () => clearTimeout(intervalId);
          }, []);
    return (
        <div className="relative"
        style={{
           height:"100vh",
            maxHeight:"100vh",
            width:"100%",
            overflow:"hidden"
              }}
        >
        <main 
      className="absolute -z-1 bg-black w-full h-full"
      >

<section className="absolute"
style={{
    width:"100%",
    height:"100%",
  zIndex:"-10"
}}
>
<div className={styles.slide}
style={{
  height:"100%",
  width:"100%",
}}
>
<div style={{backgroundImage:"url(/assets/img/slides/slide1.jpg)"}}></div>
<div style={{backgroundImage:"url(/assets/img/slides/slide2.jpg)"}}></div>
<div style={{backgroundImage:"url(/assets/img/slides/slide3.jpg)"}}></div>
<div style={{backgroundImage:"url(/assets/img/slides/slide4.jpg)"}}></div>
</div>
</section>


<div className="overlay"></div>
    

 <div className="text-center">
         <span className={"text-6xl lg:text-8xl font-extrabold text-white mx-10 "+styles.slideTexts}>
           <span className={styles.homeTextFade}>
             { TEXTS[index % TEXTS.length].toUpperCase() }
           </span>
        
         </span>

     
      </div>
      {/* <div className="absolute z-50 flex w-full justify-between bottom-4  text-white lg:px-11 px-6">
<div className=""></div>
<SocialIcons/>
      </div> */}
      </main>
      </div>
    );
}
 
export default FirstSection;