import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import SwiperCore, {Autoplay} from 'swiper';

SwiperCore.use([Autoplay]);


const OurLeaderShip = () => {

const leaders = [
  {
    name:"Shaikh Aboobacker Bin Ahmed",
    position:"Chairman, Markaz Knowledge City",
    quote:"“Since the last four decades, Markaz has been functioning in the mission of educational empowerment and better livelihood of the locally marginalized people in different parts of India. After that successful endeavour by developing numerous potential outcomes, we started to think about making a new integration of knowledge and wisdom. This turned to the opening of Markaz Knowledge City. As we did in the past, it is also a collective attempt of different types of people, who live, grow, and contributed with us. In fact, we sincerely believe that, we made it, and it would also be a model for others, who think for creative changes in the society”."
  ,img:"usthad.png"},
  {
    name:"Shaikh Aboobacker Bin Ahmed",
    position:"Chairman, Markaz Knowledge City",
    quote:"“Since the last four decades, Markaz has been functioning in the mission of educational empowerment and better livelihood of the locally marginalized people in different parts of India. After that successful endeavour by developing numerous potential outcomes, we started to think about making a new integration of knowledge and wisdom. This turned to the opening of Markaz Knowledge City. As we did in the past, it is also a collective attempt of different types of people, who live, grow, and contributed with us. In fact, we sincerely believe that, we made it, and it would also be a model for others, who think for creative changes in the society”."
  ,img:"usthad.png"},
  {
    name:"Shaikh Aboobacker Bin Ahmed",
    position:"Chairman, Markaz Knowledge City",
    quote:"“Since the last four decades, Markaz has been functioning in the mission of educational empowerment and better livelihood of the locally marginalized people in different parts of India. After that successful endeavour by developing numerous potential outcomes, we started to think about making a new integration of knowledge and wisdom. This turned to the opening of Markaz Knowledge City. As we did in the past, it is also a collective attempt of different types of people, who live, grow, and contributed with us. In fact, we sincerely believe that, we made it, and it would also be a model for others, who think for creative changes in the society”."
  ,img:"usthad.png"},
];



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
    {
      leaders.map((leader, index) => {
        return (
          <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center justify-center px-10 lg:px-20 2xl:px-32"
              style={{
                backgroundColor:"#E7E9E4"
              }}
              >
                <div><img src={`/assets/img/${leader.img}`} 
                alt="" /></div>
                <div className="lg:w-8/12 lg:px-10 py-4">
                  {leader.quote} <br /><br />
                  <span className="font-bold text-xl">{leader.name}</span> <br />
                  <span className="text-gray-500">{leader.position}</span>
                </div>
              </div>
           
          </SwiperSlide>
        )
      })
    }



  </Swiper>
        </div>
        </div></div>
    );
}
 
export default OurLeaderShip;