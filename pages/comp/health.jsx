import Logo from "@/components/Logo";
import Health from "@/components/Compos/Health";


import Footer from "@/components/Footer/Footer";
import MenuBar from "@/components/NavMenu/Menu"
import Head from 'next/head'


const HealthPage = () => {

  return (
    
    <div>
       <Head>
        <title>Health - Markaz Knowledge City</title>
        <meta name="description" content="Education in Markaz Knowledge City" />
      </Head>
     

       <div
       style={{ backgroundColor: "#F8FAF8",
    // backgroundImage:`url('/assets/img/spikes.png')`,
    }}
    > 
        <Logo logo="logob" className="z-9" />
        <MenuBar
        icoColor=" text-black"
        
        />
        
      
      
      </div>
      <section>
        <Health />
      </section>
      <Footer/>
    </div>
  );
};

export default HealthPage;
