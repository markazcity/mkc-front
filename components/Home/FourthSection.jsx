import { Parallax, Background } from "react-parallax";

const FourthSection = () => {
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
  return (
    <div>
      <Parallax bgImage="/assets/img/bg.png" strength={400}>
        <div style={{ width: "100%" }}>
          <div className="py-48"></div>
        </div>
      </Parallax>
    </div>
  );
};

export default FourthSection;
