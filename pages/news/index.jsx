import React from "react";
import HeadTag from "@/head";
import Logo from "@/components/Logo";
import MenuBar from "@/components/NavMenu/Menu";
import Image from "next/image";
import Footer2 from "@/components/Footer/Footer2";
import { MdArrowRightAlt } from "react-icons/md";
const News = () => {
  return (
    <div>
      <HeadTag title="News - Markaz Knowledge City" />
      <div className="py-5" style={{ backgroundColor: "#F8FAF8" }}>
        <Logo logo="logob" className="z-9" />
        <MenuBar icoColor=" text-black" />
        <h1
          className="text-5xl font-extrabold mb-5 text-center"
          style={{
            color: "#69696D",
          }}
          data-aos="zoom-in"
        >
          NEWS
        </h1>{" "}
        <br />
      </div>
      <div>
        <div className="grid grid-col-3">
          <div className="flex flex-col">
            <div>
              <img
                src="https://www.neom.com/content/dam/neom/newsroom/neom-mclaren-racing-partnership/neom-mclaren-racing-partnership-thumb.jpg"
                alt=""
                width="500px"
                height="300px"
              />
            </div>
            <div>
              <span className="text-sm">June 27, 2022</span>
            </div>
            <div>
              <span className="text-md">
                NEOM AND MCLAREN RACING ANNOUNCE STRATEGIC TITLE PARTNERSHIP TO
                DRIVE INNOVATION AND TALENT DEVELOPMENT IN ELECTRIC MOTORSPORT
              </span>
            </div>
          </div>
          <div className="">
            <button className="text-sm">
              <span>LEARN MORE</span>
            </button>
          </div>
        </div>
      </div>
      {/* <MdArrowRightAlt className="mr-4 text-2xl " /> */}
      <Footer2 />
    </div>
  );
};

export default News;
