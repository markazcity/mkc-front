import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import NextNprogress from 'nextjs-progressbar';
import Splash from '@/components/Splash'
import Head from 'next/head'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";


function MyApp({ Component, pageProps }) {

// const [loading, setLoading] = useState(true);
const [showScrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
// const intervalId = setInterval(()=>setLoading(false),5000);
// return () => clearTimeout(intervalId);

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
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6168e249f7c0440a591e4da0/1fi0r7sav';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


},[]);



  return  <div
  // style={
  //   loading?{
  //     minHeight:"100vh",
  //     maxHeight:'100vh',
  //     overflow:'hidden'
  //   }:{}
  //   }
  >
    {/* {loading?<Splash/>:<></>} */}
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
