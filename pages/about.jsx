import Logo from "@/components/Logo";
import OurPast from "@/components/About/OurPast";
import OurPhilosophy from "@/components/About/OurPhilosophy";
import OurLeaderShip from "@/components/About/OurLeadership";
import Who from "@/components/About/Who";
import Footer from "@/components/Footer/Footer";
import MenuBar from "@/components/NavMenu/Menu"
import Head from 'next/head'
import {ROOT_URL} from '@/inc/Const'
import { useEffect, useState } from "react";


const getData = async () => {
  const DATA_URL = ROOT_URL+"webContents/content.php";

 return fetch(DATA_URL)
  .then(response => response.json());
}

export async function getStaticProps () {
  const content = await getData()
  return {
    props: {
      data:content
    },
    revalidate: 300,
  }
}




const About = ({data}) => {

  const [who, setWho] = useState(true);
  const [philosophy, setPhilosophy] = useState(true);
  const [journey, setJourney] = useState(true);
  const [leadership, setLeadership] = useState(true);


  useEffect(() => {
    if(data!=null){
      setWho(data.data.filter(item=>item.wc_category==="who"));
      setPhilosophy(data.data.filter(item=>item.wc_category==="philosophy"));
      setJourney(data.data.filter(item=>item.wc_category==="journey"));
      setLeadership(data.data.filter(item=>item.wc_category==="leadership"));
    }
    },[data])

  return (
    
    <div>
       <Head>
        <title>About - Markaz Knowledge City</title>
        <meta name="description" content="About Markaz Knowledge City" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ backgroundColor: "#F8FAF8",
    backgroundImage:`url('/assets/img/spikes.png')`,
    }}>
        <Logo logo="logob" className="z-9 " />
        <MenuBar
        icoColor=" text-black"
       
        />
        <div className="mt-10"></div>
        <Who dataset={who}/>
      </div>
      <section className="mb-10">
        <OurPhilosophy dataset={philosophy} />
      </section>
      <section className="py-10" id="past">
        <OurPast dataset={journey} />
      </section>
      
      <section>
        <OurLeaderShip dataset={leadership} />
      </section>
      <Footer/>
    </div>
  );
};

export default About;
