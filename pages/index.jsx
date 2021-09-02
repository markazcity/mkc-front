import Head from 'next/head'
import TextTransition, { presets } from "react-text-transition";
import Logo from "../components/Logo"
import Footer from "../components/Footer"

import HomeParticle from "../components/Utils/Particles"
import MenuBar from "../components/NavMenu/Menu"
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
    
      <nav
      style={{
        background:"rgba(0,0,0,0.6)",
        position:"fixed",
        width:"100%",
        top:0,
        zIndex:"48",
        marginTop:showNavbar?"0px":"-100px",
        transition:"all 0.5s ease"
      }}
      >
     <Logo logo="logow" className="z-9"/> 
     
      <MenuBar/>
     </nav>
      

      
      <FirstSection/>
     <SecondSection/>
      <LifeOfMKC/>
      <SectorMarquee/>
      <FourthSection/>
      <Footer/>
      {/* <HomeParticle/> */}

    </div>
  )
}
