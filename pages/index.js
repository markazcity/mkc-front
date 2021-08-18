import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {NavMenu, DesktopMenu} from "../components/NavMenu/NavMenu"
import Logo from "../components/Logo"
import SocialIcons from "../components/SocialIcons"

export default function Home() {
  const TEXTS = [
    "Think",
"Dialogue",
"Craft",
"Innovation",
"Transform",
"Network",
"Tradition"
  ];
  const [index, setIndex] = useState(0);
  const slideImages = ["cc1.jpg", "cc2.jpg"]
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(()=>{
      setIndex(index => index + 1);
    },
      3000 
    );
    return () => clearTimeout(intervalId);
  }, []);

 

  return (
    <div className={styles.container}>
      <Head>
        <title>Markaz Knowledge City</title>
        <meta name="description" content="Markaz Knowledge City" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<motion.main  
className="absolute -z-1 indexBg"
style={{
       height:"100%",
       width:"100%",
       backgroundImage:`url('/assets/img/${slideImages[index % slideImages.length]}')`,
       backgroundSize:"cover",
       backgroundPosition:"center"
    }}
    animate={{opacity:1}}
    >
      <Logo logo="logow" className="z-9"/>

      <div className="overlay"></div>
      {/* NAVIGATION MENU SECTION */}
      {/* PC NAVIGATION */}
      <div className="hidden lg:block"><DesktopMenu/></div>
    <div className="lg:hidden">
       {showMenu && <NavMenu
      onCloseTap={() =>{
        setShowMenu(false);
      }}/>}
      <svg 
      className="absolute z-10 hover:bg-gray-400 navIcon right-5 top-6 h-10 text-white rounded px-1 "
      onClick={() => {
        setShowMenu(true)
      }}
 xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
</svg> </div>
{/* NAVIGATION SECTION ENDS */}
      <div className="">
       <h1 className={styles.slideTexts}>
      <TextTransition
        text={ TEXTS[index % TEXTS.length].toUpperCase() }
        springConfig={{ mass: 1, tension: 70, friction: 20 }}
        noOverflow = {true}
        className="slideTexts text-4xl lg:text-7xl font-extrabold text-white mx-10"
      />
    </h1>
      </div>
      <div className="absolute flex w-full justify-between bottom-4  text-white px-10">
<div>&copy; Markaz Knowledge City</div>
<SocialIcons/>
      </div>
      </motion.main>

    </div>
  )
}
