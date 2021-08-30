import Logo from "../components/Logo";
import Education from "../components/Compos/Education";
import Health from "../components/Compos/Health";
import Commerce from "../components/Compos/Commerce";
import CompMain from "../components/Compos/ComponentsHead";
import Footer from "../components/Footer";
import MenuBar from "../components/NavMenu/Menu"


const Components = () => {
  const menu = 
  [
  {name:"Home", icon:"", to:"/"},
  {name:"Components", icon:"", to:"#components"},
  {name:"Education", icon:"", to:"#education"},
  {name:"Health", icon:"", to:"#health"},
  {name:"Commerce", icon:"", to:"#commerce"},
  ];
  return (
    
    <div>
      <div>
        <Logo logo="logob" className="z-9" />
        <MenuBar
        icoColor=" text-black"
        navItems={menu}
        />
        <CompMain/>
      </div>
      <section className="py-10" id="education">
        <Education />
      </section>
      <section className="pt-10" id="health">
        <Health />
      </section>
      <section  className="pt-10" id="commerce">
        <Commerce />
        
      </section>
      <Footer/>
    </div>
  );
};

export default Components;
