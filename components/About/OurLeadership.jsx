import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import { ROOT_URL } from "@/inc/Const";

SwiperCore.use([Autoplay]);

const OurLeaderShip = ({ dataset }) => {
  const data = Array.from(dataset);


  const leaders = data ?? [
    {
      wc_title: "Shaikh Aboobacker Bin Ahmed",
      wc_author_position: "Chairman, Markaz Knowledge City",
      wc_body:
        "“Since the last four decades, Markaz has been functioning in the mission of educational empowerment and better livelihood of the locally marginalized people in different parts of India. After that successful endeavour by developing numerous potential outcomes, we started to think about making a new integration of knowledge and wisdom. This turned to the opening of Markaz Knowledge City. As we did in the past, it is also a collective attempt of different types of people, who live, grow, and contributed with us. In fact, we sincerely believe that, we made it, and it would also be a model for others, who think for creative changes in the society”.",
      wc_image: "usthad.png",
    },
    {
      wc_title: "Dr. Muhammed Abdul Hakkim Kandi",
      wc_author_position: "Managing Director, Markaz Knowledge City",
      wc_body:
        "Markaz Knowledge City is a knowledge centric civilization that provides a sustainable and inclusive model of development irrespective of any differentiation. A culture profounded with humanitarian values and eco-friendly concepts is the heart of the city's endeavours. Being self-reliant in all its aspects, City ensures quality food and service to its inmates and visitors. Markaz Knowledge City is the latest update of Jamia Markaz knowledge expedition in and outside the nation. It gives better education, health, skill development, training, residence, food and all other basic needs in its latest updated phase. It also tries to update the community through new research and studies, which may boost the confidence of people to travel along with the time.",
      wc_image: "mah.png",
    },
  ];

  console.log(leaders);


  return dataset != null ? (
    <div id="leadership">
      <div
        className="pt-10"
        style={{
          backgroundColor: "#C6CABF",
        }}
      >
        <h1
          className="text-2xl lg:text-5xl font-extrabold mb-5 text-center"
          style={{
            color: "#28062B",
          }}
          data-aos="zoom-in"
        >
          OUR LEADERSHIP
        </h1>
        <br />

        <div className="leadersMargin">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={false}
            speed={2000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
          >
            {leaders.map((leader, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className="flex flex-col lg:flex-row items-center justify-center px-10 lg:px-20 2xl:px-32"
                    style={{
                      backgroundColor: "#C6CABF",
                    }}
                  >
                    <div>
                      <img
                        src={`${ROOT_URL}/webContents/uploads/${leader.wc_image}`}
                        className="leader"
                        alt=""
                      />
                    </div>
                    <div className="lg:w-8/12 lg:px-10 py-4">
                      {leader.wc_body} <br />
                      <br />
                      <span className="font-bold text-xl">
                        {leader.wc_title}
                      </span>{" "}
                      <br />
                      <span className="text-gray-500">
                        {leader.wc_author_position}
                      </span>
                      <br />
                      <div className="flex justify-end">
                        <BsArrowRight className="text-2xl text-gray-700 mt-5" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  ) : (
    <span></span>
  );
};

export default OurLeaderShip;
