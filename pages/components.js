import Logo from "../components/Logo";
import Education from "../components/Compos/Education";
import Health from "../components/Compos/Health";
import Commerce from "../components/Compos/Commerce";
import CompMain from "../components/Compos/ComponentsHead";

const Components = () => {
  const picBg = {
    backgroundColor: "#A17CA1",
  };
  return (
    
    <div>
      <div>
        <Logo logo="logob" className="absolute z-9 mb-10" />
        <CompMain/>
      </div>
      <section className="my-10">
        <Education />
      </section>
      <section className="mt-10">
        <Health />
      </section>
      <section  className="mt-10">
        <Commerce />
        
      </section>
      <footer className="bg-black p-4 text-center text-white">
          &copy; markazknowledecity
      </footer>
    </div>
  );
};

export default Components;
