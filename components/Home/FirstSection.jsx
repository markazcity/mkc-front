import SocialIcons from "../SocialIcons"
import styles from '../../styles/Home.module.css'
import { useState, useEffect, useRef } from "react"
import Tilt from 'react-parallax-tilt';

const FirstSection = () => {
    const TEXTS = [
      "A Vision for Contemporary Practices",
      "Planting a Generation of Thoughts",
      "The Plot of Multiplicities ",
      "An Idea for Transformation ",
      "Innovation and Scientific Experiments",
        ];

        
          const [index, setIndex] = useState(0);
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

<video autoPlay muted loop
style={{ height: "100%", width: "100%", objectFit: "cover" }}
>
    <source src="/assets/bgvid.mp4" type="video/mp4">
    </source>
</video>

</section>


<div className="overlay"></div>
    

 <div>
   

         <div className={"text-5xl lg:text-7xl text-white lg:ml-32 ml-10 "+styles.slideTexts}>
         <section className="ml-1">
     {TEXTS.map(item=>(
       <span 
       key={item}
       className=
       {
         (TEXTS[index % TEXTS.length]==item)?
       "bg-transparent inline-block rounded-full mr-2":
       "bg-butter-600 inline-block rounded-full mr-2"
       }
       style={{height:"15px", width:"15px", border:"1px solid #CDCC00" }}>
       </span>
     ))}
   </section>

           <div className={styles.homeTextFade}
           style={{ marginRight:"50vw",
          wordWrap:"break-word"
          }}
           >
             { TEXTS[index % TEXTS.length].toUpperCase() }
           </div>
        
         </div>

     
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