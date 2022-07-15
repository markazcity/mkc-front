import React from "react";
import HeadTag from "@/head";
import Link from "next/link";
import Image from "next/image";
import newses from "@/lib/news";
import Logo from "@/components/Logo";
import { useRouter } from "next/router";
import MenuBar from "@/components/NavMenu/Menu";
import Footer2 from "@/components/Footer/Footer2";
import { CgArrowLongLeft } from "react-icons/cg";
import renderHTML from "react-render-html";
import { IoIosArrowForward } from "react-icons/io";
import SocialShare from "@/components/Utils/SocialShare";

const SingleNews = () => {
  const router = useRouter();
  const newsId = router.query.id;
  const news = newses[router.query.id - 1];
  return (
    <div>
      <HeadTag title="News - Markaz Knowledge City" />
      <div className="py-5" style={{ backgroundColor: "#F8FAF8" }}>
        <Logo logo="logob" className="z-1" />
        <MenuBar icoColor=" text-black" />
        <div className="flex align-left w-9/12  m-auto ">
          <div
            className="flex items-center mt-4  cursor-pointer"
            onClick={() => router.back()}
          >
            <CgArrowLongLeft />
            <h2 className="ml-2">Go back</h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-9/12  m-auto">
          <h3
            className="mt-10 xl:text-4xl text-2xl font-normal tracking-widest text-center"
            style={{
              color: "#69696D",
            }}
            data-aos="zoom-in"
          >
            {news?.title}
          </h3>{" "}
          <div className="my-4">
            <span className="text-xs">{news?.date}</span>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={news?.imgUrl}
          // alt=""
          width="1000px"
          height="600px"
          // layout="fill"
          layout="responsive"
          className="z-0 transform transition duration-500 hover:scale-110 col-span-2
              items-center absolute top-0"
        />
      </div>
      <div className="flex flex-col justify-center items-center my-10 text-center lg:w-7/12 w-11/12 m-auto">
        {/* <div className="my-2 mb-4 ">
          <span className="text-2xl font-normal tracking-widest ">
            {news?.title.toUpperCase()}
          </span>
        </div> */}
        <SocialShare
          title={news?.title}
          url={`https://markazcity.in/news/${news?.news_link}`}
        />
        <div className="my-2 text-justify leading-5 items-center px-4 lg:px-0 ">
          <span className="tracking-wider hyphenate text-base">
            {renderHTML(`<div >${news?.desc}</div>`)}
          </span>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default SingleNews;
