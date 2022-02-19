import Head from 'next/head'
import TextTransition, { presets } from "react-text-transition";
import Logo from "@/components/Logo"
import Footer from "@/components/Footer/Footer"

import MenuBar from "@/components/NavMenu/Menu"
import FirstSection from "@/components/Home/FirstSection"
import SecondSection from "@/components/Home/SecondSection"
import SectorMarquee from "@/components/Home/SectorMarquee"
import FourthSection from "@/components/Home/FourthSection"

import LifeOfMKC from "@/components/Home/LifeOfMKC"
import { useState, useEffect } from 'react';

export default function Home() {
const [showNavbar, setShowNavBar] = useState(true);
  useEffect(()=>{
    const initScroll = 400;
    window.addEventListener('scroll', () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if(currentScroll >initScroll) {
        setShowNavBar(false)
      }else{
        setShowNavBar(true)
      }
    })
  },[])
  return (
    <div>
      <Head>
        <title>Markaz Knowledge City</title>
        <meta name="description" content="Markaz Knowledge City" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
     <div
    className="absolute top-0 flex justify-between w-full  lg:px-0"
      >
     <Logo logo="logow" className="z-9"/> 
      <MenuBar/>
     </div>
    
      <FirstSection/>
     <SecondSection/>
      <LifeOfMKC/>
      <SectorMarquee/>
      {/* <FourthSection/> */}
      <Footer/>
      {/* <HomeParticle/> */}

    </div>
  )
}
