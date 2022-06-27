import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from "swiper";
import { ROOT_URL } from "@/inc/Const";

SwiperCore.use([Autoplay]);

const OurPast = ({ dataset, past }) => {
  const data = dataset[0];

  const pastList = past ?? [
    { year: "2012", wc_title: "Foundation Laying", wc_image: "foundation.jpg" },
    {
      year: "2013",
      wc_title: "Project Launching",
      wc_image: "project-launch.jpg",
    },
    {
      year: "2014",
      wc_title: "Inauguration of Markaz Medical College",
      wc_image: "unani-inauguration.jpg",
    },
    {
      year: "2013",
      wc_title: "Inauguration of Markaz Law College",
      wc_image: "inauguration-law-college.jpg",
    },
    {
      year: "2013",
      wc_title: "Key Handing over of Taiba Garden-Residential Apartments",
      wc_image: "thaiba-key-handing.jpg",
    },
    {
      year: "2013",
      wc_title: "Inauguration of Alif Global School",
      wc_image: "alif-inauguration.jpg",
    },
    {
      year: "2013",
      wc_title: "Inauguration of Tigris Valley Wellness Center",
      wc_image: "tigris-inauguration.jpg",
    },
    {
      year: "2013",
      wc_title: "Inauguration of Valencia Galleria-Exhibition Centre",
      wc_image: "valancia-galleria-inauguration.jpg",
    },
    {
      year: "2013",
      wc_title: "Inauguration of AIMER- Business School",
      wc_image: "aimer-inauguration.jpg",
    },
  ];
  return data != null ? (
    <div>
      <h1
        className="text-2xl lg:text-5xl font-extrabold mb-5 text-center mx-10"
        style={{
          color: "#71543D",
        }}
        data-aos="zoom-in"
      >
        {data.wc_title}
      </h1>

      <p className="text-center mx-10">{data.wc_body}</p>
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
            delay: 1,
            disableOnInteraction: false,
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
          {pastList.map((past, index) => (
            <SwiperSlide
              key={index}
              style={{
                maxWidth: "340px",
              }}
            >
              <div
                className="my-6 mx-10"
                data-aos="fade-up"
                data-aos-delay={pastList.indexOf(past) * 100}
              >
                <center>
                  <div
                    className="relative h-48 w-72 rounded"
                    style={{
                      backgroundColor: "#69696D",
                      background: `url('${ROOT_URL}/webContents/uploads/${past.wc_image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <p className="text-center leading-5 mt-4 text-gray-500 flex justify-center w-72">
                    {past.wc_title}
                  </p>
                </center>
                {/* <h1
                            className="mt-2 w-full text-center text-gray-600 font-extrabold text-2xl"
                            >{past.year}</h1> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </Marquee> */}
      </div>
    </div>
  ) : (
    <span></span>
  );
};

export default OurPast;
