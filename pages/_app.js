import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import NextNprogress from 'nextjs-progressbar';
import Splash from '@/components/Splash'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";


function MyApp({ Component, pageProps }) {

const [loading, setLoading] = useState(true);
const [showScrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
const intervalId = setInterval(()=>setLoading(false),4950);
return () => clearTimeout(intervalId);

  }, []);

useEffect(()=> { 
//SCROLL BOTTOM
window.addEventListener('scroll', () => {
  const initScroll = 400;
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if(currentScroll >initScroll) {
    setScrollTop(true)
  }else{
    setScrollTop(false)
  }
})
},[]);



  return  <div
  style={
    loading?{
      minHeight:"100vh",
      maxHeight:'100vh',
      overflow:'hidden'
    }:{}
    }
  >
    {loading?<Splash/>:<></>}
  <NextNprogress
color="#C0C91E"
startPosition={0.3}
stopDelayMs={200}
height={3}
showOnShallow={true}

/>
<meta name="viewport" 
content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>


<Component {...pageProps} />

</div>
 
 
}

export default MyApp
