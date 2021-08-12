import Logo from "../components/Logo";
import OurPast from "../components/About/OurPast";
import OurPhilosophy from "../components/About/OurPhilosophy";
import OurLeaderShip from "../components/About/OurLeadership";
import Who from "../components/About/Who";
import Footer from "../components/Footer";

const About = () => {
  const picBg = {
    backgroundColor: "#A17CA1",
  };
  return (
    
    <div>
      <div style={{ backgroundColor: "#F8FAF8" }}>
        <Logo logo="logob" className="absolute z-9 mb-10" />
        <Who/>
      </div>
      <section className="my-10">
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
