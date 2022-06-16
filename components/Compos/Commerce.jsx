import { ROOT_URL } from "@/inc/Const";

const Commerce = (props) => {
  const educationList = [
    {
      wc_title: "Souk",
      wc_body:
        "Souk is the physical marketplace in Markaz Knowledge City. It comes underneath the Cultural Centre with 140+ commercial spaces for different types of business such as restaurant, cloth, perfumes, and minimart. The Souk aims to promote local entrepreneurship with global standards, as well as budget consumption for the public. ",
      wc_image: "souq.jpg",
      wc_link: "",
    },

    {
      wc_title: "Fezinn Hotel",
      wc_body:
        "Fezinn is the four-star facilitated business hotel with excellent accommodation facilities in the form of fully furnished deluxe and suit rooms at the gateway of Markaz Knowledge City.  The hotel has 84 deluxe rooms, 28 suites, business desk, tour desk, restaurants, cafes, kiosks, and parking bays. It also forms as the hospitality capital of the City.",
      wc_image: "fezinn.jpg",
      wc_link: "",
    },

    {
      wc_title: "M-Tower",
      wc_body:
        "M-Tower is the corporate signature of Markaz Knowledge City. It is set as a multi-layered service apartment that can accommodate the offices, workstations, and residences for business and other private needs. Through M-Tower we aim to furnish better hospitality for the corporate world, be it early start-ups or established ones.  ",
      wc_image: "mtower.jpg",
      wc_link: "",
    },
    {
      wc_title: "Valencia Galleria",
      wc_body:
        "The Exhibition Center is to offer a better hospitality experience for various national and international events. With a 2000 seated hall and other amenities, the centre is used to host academic, corporate, and private events in a global standard.",
      wc_image: "exhibition.jpg",
      wc_link: "",
    },
  ];
  const colorChange = [0, 3, 4, 7, 8];
  return (
    <div style={{ backgroundColor: "#F8F9E9" }} className="pb-20 pt-10">
      <h1
        className="text-4xl lg:text-5xl font-extrabold mb-5 text-center  pt-7 pb-4"
        style={{
          color: "#69696D",
        }}
        data-aos="zoom-in"
      >
        COMMERCE
      </h1>
      {/* LISTS STARTS HERE */}
      <div className="lg:mx-36 3xl:mx-64">
        {props.dataset.map((edu, index) => (
          <div
            className="my-4 mx-10 lg:m-0 bg-white component-container lg:flex"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div
              className={
                index % 2 == 0
                  ? "h-72  lg:h-96  lg:w-6/12 comp-image"
                  : "h-72 lg:h-96 lg:w-6/12  order-2"
              }
            >
              <div
                className="h-full  comp-image"
                style={{
                  background: `url('${ROOT_URL}webContents/uploads/${edu.wc_image}')`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>

            <div className="p-10  lg:w-6/12">
              <h1
                className={` font-extrabold text-2xl  py-4 lg:pt-4 text-gray-600
                            ${edu.wc_title.length > 24 ? " lg:pb-0" : ""}`}
                // style={{color:"#69696D"}}
              >
                {edu.wc_title.toUpperCase()}
              </h1>
              <p className="leading-5 text-gray-500">{edu.wc_body}</p>
              <div
                className="know-more  mt-4 py-2 inline-block cursor-pointer"
                onClick={() => {
                  window.open(edu.wc_link, "_blank");
                }}
              >
                KNOW MORE
                <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-2"></div>
                <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-1"></div>
                <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-1"></div>
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Commerce;
