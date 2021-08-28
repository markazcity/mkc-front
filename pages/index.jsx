import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Logo from "../components/Logo"
import SocialIcons from "../components/SocialIcons"
import HomeParticle from "../components/Utils/Particles"
import MenuBar from "../components/NavMenu/Menu"

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
  const slideImages = ["bg.png","slide2.png", "cc2.jpg"]
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
      <MenuBar/>
      <div className="text-center">
       <h1 className={styles.slideTexts}>
      <TextTransition
        text={ TEXTS[index % TEXTS.length].toUpperCase() }
        springConfig={{ mass: 1, tension: 70, friction: 20 }}
        noOverflow = {true}
        className="slideTexts text-6xl lg:text-8xl font-extrabold text-white mx-10"
      />
    </h1>
      </div>
      <div className="absolute z-20 flex w-full justify-between bottom-4  text-white lg:px-11 px-6">
<div className="hidden lg:block lg:ml-8 ml-5">&copy; Markaz Knowledge City</div>
<div className="lg:hidden"></div>
<SocialIcons/>
      </div>

      </motion.main>
      {/* <HomeParticle/> */}

    </div>
  )
}
