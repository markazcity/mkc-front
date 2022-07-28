import Logo from "@/components/Logo";
import MenuBar from "@/components/NavMenu/Menu";
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
var qs = require("qs");

const singleEvents = () => {
  const router = useRouter();
  const event = events[router.query.id - 1];
  const URL = ROOT_URL + "eventRegistration.php";

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [place, setPlace] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [connError, setConnError] = useState(false);

  const addEvent = async (e) => {
    setLoading(true);
    const data = await fetch(URL, {
      method: "POST",
      body: qs.stringify({
        api: "c24106bb093954188b2883e807d3bd8040cb96a9",
        name: name,
        email: email,
        phone: phone,
        place: place,
      }),
      headers: {
        Accept: "application/json",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        document.body.scrollTop = document.documentElement.scrollTop = 10;

        if (data.status === "success") {
          setError("Thanks for applying. We will connect you soon.");
          e.target.reset();
        } else {
          setError("Something went wrong. Please try again later.");
        }
      })
      .catch((e) => {
        setLoading(false);
        setConnError(true);
      });
  };

  return (
    <div>
      <HeadTag title="Events - Markaz Knowledge City" />
      <Logo logo="logob" className="z-9" />
      <MenuBar icoColor=" text-black" />
      <div
        className="py-5 gradient relative -z-1 lg:bg-fixed md:bg-local sm:bg-local"
        style={{
          backgroundColor: "#F8FAF8",
          backgroundImage: `url(${event?.imgUrl})`,
          backgroundRepeat: "no-repeat",
          paddingTop: "500px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1
          className="lg:text-5xl text-3xl font-extrabold mb-5 text-center text-white z-10"
          data-aos="zoom-in"
        >
          {event?.title}
        </h1>{" "}
        <span className="lg:text-5xl text-3xl font-extrabold mb-5 text-center text-white z-10">
          12-07-2022
        </span>
        <br />
      </div>
      <div className=" mb-10 lg:px-56 p-10 text-center">
        <div className="text-center text-2xl font-bold">
          <h1>Book Your Slot</h1>
        </div>
        {error && <span>{error}</span>}
        {error && <span>{error}</span>}
        <form
          action=""
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            addEvent(e);
          }}
          className="xl:w-6/12 m-auto mt-6"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          {/* NAME SECTION BEGINS */}
          <SingleInput
            name="full-name"
            label="Full Name"
            req={true}
            onChange={(e) => setName(e.target.value)}
          />
          <SingleInput
            name="email-address"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <SingleInput
            name="phone"
            type="number"
            label="Phone number"
            req={true}
            onChange={(e) => setPhone(e.target.value)}
          />
          <SingleInput
            name="place"
            type="text"
            label="Place"
            req={true}
            onChange={(e) => setPlace(e.target.value)}
          />
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 my-6"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer2 />
    </div>
  );
};

export default singleEvents;

const SingleInput = (props) => {
  return (
    <div className="col-span-full sm:col-span-6 my-2">
      <label
        htmlFor={props.name}
        className="flex text-sm font-medium text-gray-700 items-center"
      >
        {props.label}{" "}
        {props.req ? (
          <span className="text-red-600 block ml-1">*</span>
        ) : (
          <span></span>
        )}
      </label>
      <input
        type={props.type == null ? "text" : props.type}
        name={props.name}
        id={props.name}
        onChange={props.onChange}
        autoComplete={Math.random()}
        className="mt-1 focus:ring-blue-500 focus:border-violet-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        required
      />
    </div>
  );
};
