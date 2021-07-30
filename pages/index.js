import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import NavMenu from "../components/Modals/NavMenu"
import Logo from "../components/Logo"


export default function Home() {
  const TEXTS = [
    "South Indias biggest Green-township",
    "Welcome to\nMarkaz Knowledge City",
    "The Cultural Saga of the Modern World"
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
className="absolute -z-1"
style={{
       height:"100vh",
       width:"100%",
       backgroundImage:`url('/assets/img/${slideImages[index % slideImages.length]}')`,
       backgroundSize:"cover",
    }}
    animate={{opacity:1}}
    >
      <Logo logo="logow" className="z-9"/>

      <div className="overlay"></div>

      {showMenu && <NavMenu
      onCloseTap={() =>{
        setShowMenu(false);
      }}/>}
      <svg 
      className="absolute z-10 hover:bg-gray-400 navIcon right-5 top-6 h-10 text-white rounded px-1"
      onClick={() => {
        setShowMenu(true)
      }}
 xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
      <div>
       <h1 className={styles.slideTexts+"  md:w-3/6"}>
      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
        className="slideTexts text-4xl lg:text-6xl font-extrabold text-white mx-10  md:mx-16 my-60"
      />
    </h1>
      </div>
      </motion.main>

    </div>
  )
}
