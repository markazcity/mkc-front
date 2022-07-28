import Logo from "@/components/Logo";
import MenuBar from "@/components/NavMenu/Menu";
import Footer from "@/components/Footer/Footer";
import HeadTag from "@/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ROOT_URL } from "@/inc/Const";
import renderHTML from "react-render-html";
import Dialog from "@/components/Admin/Dialog";
import PhotoModal from "@/components/Utils/PhotoModal";
import { CgArrowLongRight } from "react-icons/cg";
import Footer2 from "@/components/Footer/Footer2";
import Image from "next/image";
import events from "@/lib/events";
import Link from "next/link";

const Events = () => {
  return (
    <div>
      <HeadTag title="Events - Markaz Knowledge City" />
      <div className="" style={{ backgroundColor: "#F8FAF8" }}>
        <Logo logo="logob" className="z-9" />
        <MenuBar icoColor=" text-black" />
        <h1
          className="text-5xl font-extrabold mb-5 text-center py-5"
          style={{
            color: "#69696D",
          }}
          data-aos="zoom-in"
        >
          EVENTS
        </h1>{" "}
        <br />
      </div>
      <div>
        <section className="mb-10 lg:px-56 p-10" data-aos="zoom-in">
          <h1 className="text-3xl font-bold my-4 mb-6">Upcoming Events</h1>

          <div className="grid grid-cols-6 gap-10 gap-y-16">
            {/* start grid  */}

            {events.map((event) => (
              <div
                className="lg:col-span-2 md:col-span-3  col-span-6"
                key={event.id}
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <div className="relative">
                  <Image
                    src={event.imgUrl}
                    width={400}
                    height={300}
                    className="opacity-80 hover:opacity-100 transform duration-500   transition "
                    // layout="fill"
                  />
                  <div className="bg-white shadow-lg absolute w-ful h-28 -bottom-6 right-4 left-4 flex items-left pl-8 justify-center flex-col">
                    <span className="font-bold text-lg  pt-8 cursor-pointer ">
                      {event.title}
                    </span>
                    <span className="cursor-pointer hover:translate-x-3 transform duration-500   transition">
                      <button>
                        <Link href={`events/${event.id}`}>
                          <a>
                            <CgArrowLongRight size={30} />
                          </a>
                        </Link>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* end grid  */}
          </div>
        </section>
      </div>
      <Footer2 />
    </div>
  );
};

export default Events;
