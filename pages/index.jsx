import Head from "next/head";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer/Footer";

import MenuBar from "@/components/NavMenu/Menu";
import FirstSection from "@/components/Home/FirstSection";
import SecondSection from "@/components/Home/SecondSection";
import SectorMarquee from "@/components/Home/SectorMarquee";
import SEOHeading from "@/components/SEOHeadings";

import Categories from "@/components/Home/Categories";
import HeadTag from "@/head";

import { useState, useEffect } from "react";
import Footer2 from "@/components/Footer/Footer2";

const getData = async () => {
  const DATA_URL = "https://api.markazcity.in/webContents/content.php";

  return fetch(DATA_URL).then((response) => response.json());
};

export async function getStaticProps() {
  const content = await getData();
  return {
    props: {
      data: content,
    },
    revalidate: 300,
  };
}

export default function Home({ data }) {
  const [showNavbar, setShowNavBar] = useState(true);
  const [zones, setZones] = useState([]);

  useEffect(() => {
    if (data != null) {
      setZones(data.data.filter((item) => item.wc_category === "zones"));
    }
  }, [data]);

  useEffect(() => {
    const initScroll = 400;
    window.addEventListener("scroll", () => {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > initScroll) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }
    });
  }, []);
  return (
    <div>
      <HeadTag></HeadTag>

      <div className="absolute top-0 flex justify-between w-full  lg:px-0">
        <Logo logo="logow" className="z-9" />
        <MenuBar />
      </div>

      <FirstSection />
      <SEOHeading />
      <SecondSection />

      <Categories zones={zones} />

      <SectorMarquee />
      {/* <FourthSection/> */}

      <SEOHeading />
      <Footer2 />
      {/* <Footer /> */}
      {/* <HomeParticle/> */}
    </div>
  );
}
