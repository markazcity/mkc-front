import Logo from "../components/Logo";
import OurPast from "../components/About/OurPast";
import OurPhilosophy from "../components/About/OurPhilosophy";
import OurLeaderShip from "../components/About/OurLeadership";
import Who from "../components/About/Who";
import Footer from "../components/Footer";
import MenuBar from "../components/NavMenu/Menu"

const About = () => {

  const menu = 
  [
  {name:"Home", icon:"", to:"/"},
  {name:"Who We Are", icon:"", to:"#who"},
  {name:"Our Past", icon:"", to:"#past"},
  {name:"Our Philosophy", icon:"", to:"#philosophy"},
  {name:"Our Leadership", icon:"", to:"#leadership"},
  ];
  return (
    
    <div>
      <div style={{ backgroundColor: "#F8FAF8" }}>
        <Logo logo="logob" className="absolute z-9 mb-10" />
        <MenuBar
        icoColor=" text-black"
        navItems={menu}
        />
        <Who/>
      </div>
      <section className="py-10" id="past">
        <OurPast />
      </section>
      <section className="mt-10">
        <OurPhilosophy />
      </section>
      <section>
        <OurLeaderShip />
      </section>
      <Footer/>
    </div>
  );
};

export default About;