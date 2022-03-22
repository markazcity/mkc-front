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
import {  useEffect, useState} from "react"
 
const getData = async () => {
  const DATA_URL = "https://api.markazcity.in/webContents/content.php";

 return fetch(DATA_URL)
  .then(response => response.json());
}

export async function getStaticProps () {
  const content = await getData()
  return {
    props: {
      data:content
    },
    revalidate: 60,
  }
}


const Components = ({data}) => {

  const [dataset, setData] = useState(null);

  const [education, setEducation] = useState(null);
  const [commerce, setCommerce] = useState(null);
  const [health, setHealth] = useState(null);
  const [agriculture, setAgriculture] = useState(null);
  const [residence, setResidence] = useState(null);
  const [cc, setCC] = useState(null);



useEffect(() => {
  if(data!=null && data.status==="success"){
    setData(data.data);
                setEducation(data.data.filter(item=>item.wc_category==="education"));
                setCommerce(data.data.filter(item=>item.wc_category==="commerce"));
                setHealth(data.data.filter(item=>item.wc_category==="health"));
                setAgriculture(data.data.filter(item=>item.wc_category==="agriculture"));
                setResidence(data.data.filter(item=>item.wc_category==="residence"));
                setCC(data.data.filter(item=>item.wc_category==="cc"));
  }
},[])

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
        
        <CC  dataset={cc}/>
       
      </div>

{dataset!=null?(
  <>
  <section id="education">
        <Education dataset={education}/>
      </section>
      <section className="pt-10" id="health">
        <Health  dataset={health}/>
      </section>
      <section  className="pt-10" id="commerce">
        <Commerce  dataset={commerce}/>
      </section>
      <section  id="residence" className="overflow-hidden">
      <Residence  dataset={residence}/>
      </section>
      <section>
        <Agriculture  dataset={agriculture}/>
      </section>
  </>
):(
  <div></div>
)}
      
     
     
      
      <Footer/>
    </div>
  );
};

export default Components;
