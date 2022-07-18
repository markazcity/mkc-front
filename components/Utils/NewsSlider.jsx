import Link from "next/link";
import Image from "next/image";
// import newses from "@/lib/news";
import { ROOT_URL } from "@/inc/Const";
import { motion } from "framer-motion";
import { BiNews } from "react-icons/bi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import React, { useRef, useState } from "react";

const NewsSlider = ({ show, newsData }) => {
  const DATA_URL = "https://api.markazcity.in/news/news.php?type=list";

  const router = useRouter();
  const [width, setWidth] = useState(850);
  const [newses, setNewses] = useState(null);
  const carousel = useRef();

  const getData = async () => {
    fetch(DATA_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "HasNews") {
          setNewses(data.newses);
        }
      });
  };
  console.log(width);
  useEffect(() => {
    getData();
    // setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="my-10 p-10 lg:mx-32 3xl:mx-64 ">
        {show === true && (
          <div className="media-title pb-5 items-center">
            <h2 className="text-3xl text-center font-extrabold my-5 text-minigreen-700">
              CITY PULSE
            </h2>{" "}
          </div>
        )}
        <motion.div
          whileTap={{ cursor: "grabbing" }}
          ref={carousel}
          className="carousel cursor-grab overflow-hidden relative"
          // data-aos="fade-left"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel flex gap-4"
          >
            {newses?.map((news, i) => (
              <div key={i}>
                <motion.div
                  className=" item min-h-[20rem] min-w-[18rem] flex flex-col "
                  key={i}
                >
                  <div className="flex flex-col w-[280px]">
                    <Image
                      src={ROOT_URL + news?.thumb}
                      // src={news?.imgUrl}
                      alt={news?.title}
                      width="200px"
                      height="180px"
                      style={{
                        objectFit: "cover",
                      }}
                      // layout="fill"
                      className="pointer-events-none w-[200px] "
                    />
                    <span className="mt-5 text-gray-700">
                      {news?.title.toUpperCase()}
                    </span>
                    <p className="text-[12px] flex  text-center items-center mt-6 relative bottom-0 ">
                      <Link href={`/media/news/${news?.news_link}`}>
                        <span className="hover:text-gray transition hover:text-yellow-500">
                          <Link href={`/news/${news?.news_link}`}>
                            <a>Read More </a>
                          </Link>
                        </span>
                      </Link>{" "}
                      <RiArrowRightSLine size={"10px"} className="ml-1" />
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NewsSlider;

// export async function getStaticProps() {
//   const res = await fetch(`https://api.markazcity.in/news/news.php?type=list`);
//   const newsData = await res.json();
//   return {
//     props: {
//       newsData: newsData.data,
//     },
//     revalidate: 1,
//   };
//   console.log("hi");
// }
