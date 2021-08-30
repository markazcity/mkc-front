import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'swiper/swiper.scss';
import NextNprogress from 'nextjs-progressbar';
import { CookiesProvider } from "react-cookie"
import Splash from '@/components/Splash'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";


function MyApp({ Component, pageProps }) {

const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
const intervalId = setInterval(()=>setLoading(false),4950);
return () => clearTimeout(intervalId);
  }, []);
  return  <div>
    {loading?<Splash/>:<></>}
  <NextNprogress
color="#C0C91E"
startPosition={0.3}
stopDelayMs={200}
height={3}
showOnShallow={true}

/>
<CookiesProvider>
<Component {...pageProps} /></CookiesProvider>
</div>
 
 
}

export default MyApp
