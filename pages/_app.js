import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'swiper/swiper.scss';
import NextNprogress from 'nextjs-progressbar';
import { CookiesProvider } from "react-cookie"


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return  <div>
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
