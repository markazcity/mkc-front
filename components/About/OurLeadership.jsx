import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import SwiperCore, {Autoplay} from 'swiper';

SwiperCore.use([Autoplay]);


const OurLeaderShip = () => {
    const picBg = {
        backgroundColor:"#A17CA1"
    };
    const picCommonStyle = "mx-2";
    return (
      <div id="leadership">
        <div 
        className="pt-10"
        style={{
            backgroundColor:"#E7E9E4"
        }}
        >
             <h1 className="text-2xl lg:text-5xl font-extrabold mb-5 text-center"
                style={{
                    color: "#28062B",
                }}
                data-aos="zoom-in"
                >OUR LEADERSHIP</h1>
                <br />
               
                <div className="leadersMargin">
                <Swiper
    spaceBetween={0}
    slidesPerView={1}
    loop={true}
    autoplay={{
      "delay": 3000,
      "disableOnInteraction": false
      
    }}
    
  >
<SwiperSlide><img src="/assets/img/leadership-apustad.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="/assets/img/leadership-apustad.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="/assets/img/leadership-apustad.jpg" alt="" /></SwiperSlide>


  </Swiper>
        </div>
        </div></div>
    );
}
 
export default OurLeaderShip;