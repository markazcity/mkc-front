import { RiMentalHealthFill } from "react-icons/ri";
import { BsBookHalf } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { BiBuildings, BiStore } from "react-icons/bi";
import { RiPlantLine } from "react-icons/ri";
import { ROOT_URL } from "@/inc/Const";

const Categories = (props) => {
  const iconClass = "text-minigreen-800 m-4 text-2xl";
  const offZones = [
    {
      wc_title: "Education",
      icon: <BsBookHalf className={iconClass} />,
      wc_body:
        "The knowledge vision is engulfed with multifarious verticles of ethics and legacies. Along with building educational units, it also adds more constructive elements for the inclusive empowerment of the people for a better tomorrow. ",
      wc_image: "education.jpg",
    },
    {
      wc_title: "Health",
      icon: <RiMentalHealthFill className={iconClass} />,
      wc_body:
        " In the world of diverse human crises, our health perspective is helpful to make a creative generation who is free from various physical and mental obstacles. Rather than building structures, we aim to create the finest generation.",
      wc_image: "health.jpg",
    },
    {
      wc_title: "Culture",
      icon: <HiUserGroup className={iconClass} />,
      wc_body:
        "We believe in the culture that connects with ethics and moral embodiments. It also supports to encourage various arts, literature, and festive, which can connect the world for integrative outcomes.",
      wc_image: "culture.jpg",
    },
    {
      wc_title: "Living",
      icon: <BiBuildings className={iconClass} />,
      wc_body:
        "Our community formation is abid by certain rules of integration. We strive to offer a better living experience for people coming from different walks of life. It will make a multicultural space that the time demands.",
      wc_image: "living.jpg",
    },
    {
      wc_title: "Commerce",
      icon: <BiStore className={iconClass} />,
      wc_body:
        "The space inside the city is aligned to begin numerous entrepreneurship. By creating opportunities, we give our hands to bring youth and other potential representatives of society to make an effective interaction.",
      wc_image: "commerce.jpg",
    },
    {
      wc_title: "Agriculture",
      icon: <RiPlantLine className={iconClass} />,
      wc_body:
        "For a healthy present and finest future, our system envisioned to nurture various products planted by our people. It will give pleasant situations for people who surround our vision and its offshoots.",
      wc_image: "agriculture.jpg",
    },
  ];

  let items = props.zones ?? offZones;
  return (
    <div
      style={{ backgroundColor: "rgba(231, 232, 227,0.2)" }}
      className="py-8"
    >
      <h2 className="text-3xl text-center font-extrabold my-5 text-minigreen-700">
        ZONES
      </h2>
      <div className="px-10 xl:px-96">
        {/* <h2 className="font-semibold py-2 text-3xl text-gray-600">THE LIFE OF MKC</h2> */}
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 mx-5 lg:mx-32 3xl:mx-64 gap-y-1">
        {items.map((item) => (
          <div
            className="cat-card pb-10 rounded-xl m-6"
            key={item.wc_title}
            data-aos="fade-up"
            data-aos-delay={(items.indexOf(item) + 1) * 200}
          >
            <div
              className="flex justify-center h-44 rounded-t-xl"
              style={{
                background: `url('${ROOT_URL}webContents/uploads/${item.wc_image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <div className="inline-flex justify-center mb-3 bg-minigreen-600 bg-opacity-30  rounded-full ">
             {item.icon}
             </div> */}
            </div>
            <div className="text-minigreen-700 font-extrabold lg:text-3xl text-2xl text-center mt-4">
              {item.wc_title}
            </div>
            <p className="py-2 text-gray-500 px-10">{item.wc_body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
