import SocialIcons from "../SocialIcons"
import styles from '../../styles/Home.module.css'
import { useState, useEffect } from "react"

const FirstSection = () => {
    const TEXTS = [
      "A Vision for Contemporary Practices",
      "Planting a Generation of Thoughts",
      "The Plot of Multiplicities",
      "An Idea for Transformation",
      "Innovation and Scientific Experiments",
        ];

        
          const [index, setIndex] = useState(0);
          useEffect(() => {
              var homeVideo = document.getElementById('homeVideo');
              homeVideo.style.minHeight=window.innerHeight + "px";

            const intervalId = setInterval(()=>{
              setIndex(index => index + 1);
            },
              5000 
            );
            return () => clearTimeout(intervalId);
          }, []);
    return (
        <div className="relative"
        id="homeVideo"
        style={{
          
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

<video autoPlay muted loop playsInline
style={{ height: "100%", width: "100%", objectFit: "cover",
}}

>
    <source src="https://api.markazcity.in/siteAssets/home.mp4" type="video/mp4">
    </source>
</video>

</section>


<div className="absolute bg-black bg-opacity-50 w-full h-full"></div>
    
 
 <div>
   

         <div className={"text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white lg:ml-32 ml-10 "+styles.slideTexts}>
         <section className="ml-1">
     {TEXTS.map(item=>(
       <span 
       key={item}
       className=
       {
         (TEXTS[index % TEXTS.length]==item)?
       "bg-butter-600 inline-block rounded-full mr-2":
       "bg-transparent inline-block rounded-full mr-2"
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