import Logo from "@/components/Logo";
import Education from "@/components/Compos/Education";
import Health from "@/components/Compos/Health";
import Commerce from "@/components/Compos/Commerce";
import CC from "@/components/Compos/CC";
import Agriculture from "@/components/Compos/Agriculture";

import Residence from "@/components/Compos/Residence";
import Footer from "@/components/Footer/Footer";
import MenuBar from "@/components/NavMenu/Menu"
import HeadTag from '@/head'

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
    var ccoverlay = document.getElementById('ccoverlay');
    window.addEventListener('scroll', () => {
      
         ccoverlay.style.opacity=window.scrollY/1000;
       
      
      
    })
   
    

},[])

 
  return (
    
    <div>
       <HeadTag title="Components - Markaz Knowledge City"/>
       
  


<video autoPlay muted loop playsInline
className="background-video"
style={{ 
objectFit: "cover",
position:"top"

}}

>
    <source src="/assets/cc.mp4" type="video/mp4">
    </source>
</video>


  

       <div>
        <Logo logo="logob" className="absolute top-0 z-9" />
        <MenuBar
        icoColor=" text-white"
        
        />
        
        <div className="absolute top-28"><CC  dataset={cc}/></div>
       
      </div>
<div className="min-h-screen min-w-full bg-black"
id="ccoverlay"
style={{
  opacity: 0
}}
></div>
{dataset!=null?(
  <>
  <section id="education">
        <Education dataset={education}/>
      </section>
      <section id="health">
        <Health  dataset={health}/>
      </section>
      <section   id="commerce">
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
