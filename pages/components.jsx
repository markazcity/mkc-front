import Logo from "@/components/Logo";
import Education from "@/components/Compos/Education";
import Health from "@/components/Compos/Health";
import Commerce from "@/components/Compos/Commerce";
import CC from "@/components/Compos/CC";
import Agriculture from "@/components/Compos/Agriculture";

import Residence from "@/components/Compos/Residence";
import Footer from "@/components/Footer/Footer";
import MenuBar from "@/components/NavMenu/Menu"
import Head from 'next/head'
import {  useEffect} from "react"


const Components = () => {


  useEffect(() => {
    var cc = document.getElementById('cc');
    cc.style.minHeight=window.innerHeight + "px";

})

  const menu = 
  [
  {name:"Home", icon:"", to:"/"},
  {name:"Education", icon:"", to:"#education"},
  {name:"Health", icon:"", to:"#health"},
  {name:"Commerce", icon:"", to:"#commerce"},
  ];
  return (
    
    <div>
       <Head>
        <title>Components - Markaz Knowledge City</title>
        <meta name="description" content="Components in Markaz Knowledge City" />
      </Head>
      <section className="absolute"
      id="cc"
style={{
    width:"100vw",
  zIndex:"-1",
    backgroundColor: "#F8FAF8",
}}
>

<video autoPlay muted loop playsInline
style={{ height: "100%", width: "100%", objectFit: "cover",
position:"top"

}}

>
    <source src="/assets/cc.mp4" type="video/mp4">
    </source>
</video>

</section>

       <div>
        <Logo logo="logob" className="z-9" />
        <MenuBar
        icoColor=" text-white"
        
        />
        
        <CC/>
       
      </div>
      <section id="education">
        <Education />
      </section>
      <section className="pt-10" id="health">
        <Health />
      </section>
      <section  className="pt-10" id="commerce">
        <Commerce />
      </section>
      <section  id="residence" className="overflow-hidden">
      <Residence/>
      </section>
      <section>
        <Agriculture/>
      </section>
     
      
      <Footer/>
    </div>
  );
};

export default Components;
