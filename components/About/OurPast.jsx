import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import SwiperCore, {Autoplay} from 'swiper';

SwiperCore.use([Autoplay]);


const OurPast = () => {
    const pastList = [
        {"year":"2012", "text":"Foundation Laying", "img":"foundation.jpg"},
        {"year":"2013", "text":"Project Launching", "img":"project-launch.jpg"},
        {"year":"2014", "text":"Inauguration of Markaz Medical College", "img":"unani-inauguration.jpg"},
        {"year":"2013", "text":"Inauguration of Markaz Law College", "img":"inauguration-law-college.jpg"},
        {"year":"2013", "text":"Key Handing over of Taiba Garden-Residential Apartments", "img":"thaiba-key-handing.jpg"},
        {"year":"2013", "text":"Inauguration of Alif Global School", "img":"alif-inauguration.jpg"},
        {"year":"2013", "text":"Inauguration of Tigris Valley Wellness Center", "img":"tigris-inauguration.jpg"},
        {"year":"2013", "text":"Inauguration of Valencia Galleria-Exhibition Centre", "img":"valancia-galleria-inauguration.jpg"},
        {"year":"2013", "text":"Inauguration of AIMER- Business School", "img":"aimer-inauguration.jpg"},

       
       
        
        
    ];
    return (
        <div>
            <h1 className="text-2xl lg:text-5xl font-extrabold mb-5 text-center mx-10"
                style={{
                    color: "#71543D",
                }}
                data-aos="zoom-in"
                >THE JOURNEY SO FAR</h1>

                <p className="text-center mx-10">
                Since the inception of Markaz Knowledge City in 2009, we have made many breakthroughs in our journey.
                </p>
                {/* LISTS STARTS HERE */}
                <div className="">


                {/* <Marquee 
                gradient={false}
                speed={30}
                pauseOnClick={true}
                > */}
                <Swiper
    
    loop={true}
    speed={5000}
    autoplay={{
      "delay": 1,
      "disableOnInteraction": false
      
    }}
    slidesPerView={"auto"}
    // breakpoints={{
    //     640: {
    //       slidesPerView: 2,
         
    //     },
        
    //     1024: {
    //       slidesPerView: 4,
    //     },
    //   }}
    
  >
            {
                pastList.map((past,index)=>(
                    <SwiperSlide key={index}
                    style={{
                        maxWidth:"340px"
                    }}
                    >
                    <div className="my-6 mx-10" 
                    data-aos="fade-up"
                    data-aos-delay={pastList.indexOf(past)*100}
                   
                    
                    
                    >
                        <center>
                        <div
                        className="relative h-48 w-72 rounded"
                        style={{
                            backgroundColor:"#69696D",
                            background:`url('/assets/img/past/${past.img}')`,
        backgroundSize:'cover',
        backgroundPosition:"center"
                        
                        }}
                        >
                           
                        </div>
                        <p className="text-center leading-5 mt-4 text-gray-500 flex justify-center w-72">
                        {past.text}
                        </p>
                        </center>
                        {/* <h1
                            className="mt-2 w-full text-center text-gray-600 font-extrabold text-2xl"
                            >{past.year}</h1> */}
                       
                    </div></SwiperSlide>
                ))
            } 
            </Swiper>
               {/* </Marquee> */}
            </div>
        </div>
    );
}
 
export default OurPast;