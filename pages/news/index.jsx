import React from "react";
import HeadTag from "@/head";
import Link from "next/link";
import Image from "next/image";
// import newses from "@/lib/news";
import Logo from "@/components/Logo";
import { ROOT_URL } from "@/inc/Const";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import renderHTML from "react-render-html";
import MenuBar from "@/components/NavMenu/Menu";
import Footer2 from "@/components/Footer/Footer2";
import { IoIosArrowForward } from "react-icons/io";

const getData = async () => {
  const NEWS_URL = ROOT_URL + "news/news.php?type=list";
  let newsData = await fetch(NEWS_URL).then((response) => response.json());
  return newsData;
};

export async function getStaticProps() {
  const content = await getData();
  return {
    props: {
      newsData: content,
    },
    revalidate: 300,
  };
}
const News = ({ newsData }) => {
  const router = useRouter();

  const [newses, setNewses] = useState(null);
  const [featured, setFeatured] = useState(null);
  const [connError, setConnError] = useState(false);

  useEffect(() => {
    if (newsData != null) {
      if (newsData.status === "HasNews") {
        let tempNews = [];
        newsData.newses.map((blg, index) => {
          if (index === 0) {
            setFeatured(blg);
          } else {
            tempNews.push(blg);
          }
        });
        setNewses(tempNews);
      } else {
        setNewses([]);
      }
    }
  }, []);
  // console.log(featured);
  // console.log(newses);

  const firstElement = featured;
  return (
    <div>
      <HeadTag title="News - Markaz Knowledge City" />
      <div className="py-5" style={{ backgroundColor: "#F8FAF8" }}>
        <Logo logo="logob" className="z-9" />
        <MenuBar icoColor=" text-black" />
        <h1
          className="text-5xl font-extrabold mb-5 text-center"
          style={{
            color: "#69696D",
          }}
          data-aos="zoom-in"
        >
          NEWS
        </h1>{" "}
        <br />
      </div>
      <div className="mb-10 lg:px-56 p-10">
        {/* SINGLE ONE */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2  sm:grid-cols-2 xl:gap-14 lg:gap-14 md:gap-0  my-8">
          <div className="col-span-2">
            <Image
              src={ROOT_URL + firstElement?.thumb}
              alt=""
              width="800px"
              height="500px"
              className="transform transition duration-500 hover:scale-110 col-span-2
              items-center"
            />
          </div>
          <div className="xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-2">
            <div className="mt-2">
              <span className="text-xs">
                {firstElement?.createdOn.split(" ")[0]}
              </span>
            </div>
            <div className="my-2 mb-4 ">
              <span className="lg:text-2xl sm:text-md lg:font-normal sm:font-bold  tracking-widest ">
                {firstElement?.title.toUpperCase()}
              </span>
            </div>
            <div className="my-2 text-justify leading-5">
              <span className="text-sm hyphenate text-black">
                {renderHTML(
                  `<div class="noto hyphenate">${firstElement?.body.substring(
                    0,
                    250
                  )}...</div>`
                )}
              </span>
            </div>
            <div className="inline-block text-justify relative">
              <button className="flex justify-center items-center hover:text-yellow-500 mt-4 transform transition +">
                <span className="text-xs  mr-2 hover:block uppercase">
                  <Link href={`/news/${featured?.news_link}`}>
                    <a>Read More</a>
                  </Link>
                </span>
                <IoIosArrowForward
                  size={"15px"}
                  className=" transform transition duration-500 hover:scale-110"
                />
              </button>
            </div>
          </div>
        </div>
        {/* REMAIN GRID TYPE */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-14">
          {newses?.map((news) => (
            <div className="flex flex-col  col-span-1" key={news?.id}>
              <div className="">
                <Image
                  src={ROOT_URL + news?.thumb}
                  alt=""
                  width="500px"
                  height="300px"
                  className="transform transition duration-500 hover:scale-110"
                />
              </div>
              <div className="mt-2">
                <span className="text-xs">{news?.createdOn.split(" ")[0]}</span>
              </div>
              <div className="my-2 ">
                <span className="text-md font-bold">
                  {news?.title.toUpperCase()}
                </span>
              </div>
              <div className="my-2 text-justify leading-5">
                <span className="text-sm  ">
                  {renderHTML(
                    `<div class="noto hyphenate">${news?.body.substring(
                      0,
                      250
                    )}...</div>`
                  )}
                </span>
              </div>
              <div className="text-justify ">
                <button className="flex justify-center align-center items-center hover:text-yellow-500 mt-4 transform transition ">
                  <span className="text-xs  mr-2 hover:block uppercase">
                    <Link href={`/news/${news?.news_link}`}>
                      <a>Read More</a>
                    </Link>
                  </span>
                  <span>
                    <IoIosArrowForward
                      size={"15px"}
                      className=" transform transition duration-500 hover:scale-110"
                    />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer2 />
    </div>
    // <div></div>
  );
};

export default News;
