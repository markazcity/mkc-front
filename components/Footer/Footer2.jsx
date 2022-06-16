import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { IoIosArrowForward, IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Contact from "../Contact";
import { links, componentsLeft, componentsRight } from "lib/links";
const Footer2 = () => {
  const linkClass =
    "text-gray-400 hover:text-white transition duration-500 ease-in-out";
  const privacyUrl = "/policy/privacy";
  const termsUrl = "/policy/privacy";
  const cookieUrl = "/policy/privacy";

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <footer className="bg-black footer">
      <div className="flex-row justify-center items-center  p-6 md:p-12 lg:pb-6 lg:pl-1 lg:pr-0 lg:pt-6  text-center text-white border-t-yellow-900 ">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 lg:px-32 lg:py-16 sm:pb-0 lg:gap-0 sm:gap-y-5 footer-grid">
          <div className="col-span-2 ">
            <div className=" flex lg:flex-rows sm:flex-cols justify-around  getconnected">
              <div className="text-left ">
                <h2 className="text-lg	">Get Updated</h2>
                <span className="mb-8 text-gray-400 ">
                  with the news and events from the city
                </span>
                <Contact />
                <div className="items-left " data-aos="fade-right">
                  {/* <ContactForm /> */}
                </div>
                <div className="line lg:hidden md:hidden"></div>
              </div>
              <div className="">
                <div className="flex lg:flex-col md:flex-col sm:flex-col lg:mr-auto md:mr-0 sm:mr-4 sm:col-span-2 sm:justify-center pagesLink mt-6">
                  {links.map((link, key) => {
                    return (
                      <>
                        <ul className="space-y-3">
                          <motion.li
                            key={link.key}
                            ref={ref}
                            animate={controls}
                            initial="hidden"
                            transition={{ duration: 0.3, delay: key * 0.2 }}
                            variants={{
                              visible: { opacity: 1, translateX: 0 },
                              hidden: { opacity: 0, translateX: 50 },
                            }}
                            className="flex my-3 sm:ml-2"
                          >
                            <a
                              className="text-gray-400 hover:text-white transition duration-500 ease-in-out ml-2"
                              key={link.name}
                              href={link.url}
                            >
                              {link.name}
                            </a>
                          </motion.li>
                        </ul>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <div className="col-span-2">
            <div className="container flex  lg:items-start sm:items-center flex-col lg:justify-between md:justify-around  lg:pl-12 sm:pl-0">
              <div>
                <h2 className="mb-4 lg:text-2xl ">Components</h2>
              </div>
              <div className="container flex lg:justify-between sm:justify-center components ">
                <div className="left flex flex-col text-left mr-4">
                  {componentsLeft.map((left, i) => (
                    <ul>
                      <motion.li
                        key={i.key}
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        transition={{ duration: 0.3, delay: i * 0.2 }}
                        variants={{
                          visible: { opacity: 1, translateX: 0 },
                          hidden: { opacity: 0, translateX: 50 },
                        }}
                        className="flex my-3 "
                      >
                        <a className={linkClass} href={left.url}>
                          {left.name}
                        </a>
                      </motion.li>
                    </ul>
                  ))}
                </div>
                <div className="right flex flex-col text-left">
                  {componentsRight.map((right, i) => (
                    <ul>
                      <motion.li
                        key={i.key}
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        transition={{ duration: 0.3, delay: i * 0.2 }}
                        variants={{
                          visible: { opacity: 1, translateX: 0 },
                          hidden: { opacity: 0, translateX: 50 },
                        }}
                        className="flex my-3 "
                      >
                        <a className={linkClass} href={right.url}>
                          {right.name}
                        </a>
                      </motion.li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className=" flex justify-center items-center  p-6 lg:pl-1 lg:pr-0 lg:py-6   text-white lg:col-span-2 md:col-span-6 sm:col-span-2"
            data-aos="fade-left"
          >
            <div className=" flex flex-col	 lg:items-start lg:pl-12 md:pl-0 s:pl-0 md:items-center">
              <h2 className="mb-4 lg:text-2xl ">Contact Us</h2>
              <span className="flex items-center justify-center mb-3 my-3 text-gray-400 hover:text-white transition duration-500 ease-in-out">
                <IoLocationSharp className="mr-4 text-2xl" />
                Kannoth PO, Kozhikode, Kerala, 673580
              </span>
              <span className="flex items-center justify-center mb-3 my-3 text-gray-400 hover:text-white transition duration-500 ease-in-out">
                <IoMdCall className="mr-4 text-2xl" />
                +91 9847 00 00 00
              </span>
              <span className="flex items-center justify-center mb-3 my-3 text-gray-400 hover:text-white transition duration-500 ease-in-out">
                <MdEmail className="mr-4 text-2xl " />
                info@markazknowledgecity.com
              </span>
              <div className="items-left mt-4 " data-aos="fade-right">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="flex justify-center items-center  p-6 lg:pl-1 lg:pr-0 lg:py-6  text-center text-white ">
          {/* DESKTOP FOOTER */}
          <div className="hidden lg:flex lg:mx-32 justify-between w-full">
            <span> &copy; markazknowledgecity</span>
            <div className="flex">
              <a href={privacyUrl} className={linkClass}>
                Privacy Policy
              </a>{" "}
              <span className="mx-2 text-yellow-500">•</span>
              <a href={termsUrl} className={linkClass}>
                Terms of Use
              </a>{" "}
              <span className="mx-2 text-yellow-500">•</span>
              <a href={cookieUrl} className={linkClass}>
                Cookie Policy
              </a>
            </div>
          </div>

          <div className="lg:hidden">
            {/* {!showFooter ? <SocialIcons /> : <div></div>} */}
            <div className="flex my-4">
              <a href={privacyUrl} className={linkClass}>
                Privacy Policy
              </a>{" "}
              <span className="mx-2 text-yellow-500">•</span>
              <a href={termsUrl} className={linkClass}>
                Terms of Use
              </a>{" "}
              <span className="mx-2 text-yellow-500">•</span>
              <a href={cookieUrl} className={linkClass}>
                Cookie Policy
              </a>
            </div>
            <div className="pt-2">&copy; markazknowledgecity</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
