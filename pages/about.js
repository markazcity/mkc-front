import Logo from "../components/Logo";
import OurPast from "../components/About/OurPast";
import OurPhilosophy from "../components/About/OurPhilosophy";
import OurLeaderShip from "../components/About/OurLeadership";
import Who from "../components/About/Who";

const About = () => {
  const picBg = {
    backgroundColor: "#A17CA1",
  };
  return (
    // 
    <div data-aos="zoom-out-up" data-aos-delay="250">
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
      <footer className="bg-black p-4 text-center text-white">
          &copy; markazknowledecity
      </footer>
    </div>
  );
};

export default About;
