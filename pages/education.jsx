import Logo from "@/components/Logo";
import Education from "@/components/Compos/Education";


import Footer from "@/components/Footer";
import MenuBar from "@/components/NavMenu/Menu"
import Head from 'next/head'


const EducationPage = () => {

  return (
    
    <div>
       <Head>
        <title>Education - Markaz Knowledge City</title>
        <meta name="description" content="Education in Markaz Knowledge City" />
      </Head>
     

       <div>
       {/* style={{ backgroundColor: "#F8FAF8",
    backgroundImage:`url('/assets/img/spikes.png')`,
    }} */}
        <Logo logo="logob" className="z-9" />
        <MenuBar
        icoColor=" text-black"
        
        />
        
      
        <div className="xl:h-56 2xl:h-56"></div>
      </div>
      <section id="education">
        <Education />
      </section>
      <Footer/>
    </div>
  );
};

export default EducationPage;
