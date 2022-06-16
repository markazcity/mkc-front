import React from "react";
import { useState } from "react";
var qs = require("qs");
const Contact = () => {
  const URL = "https://api.markazcity.in/sendMessage.php";

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const sendMessage = async (e) => {
    fetch(URL, {
      method: "POST",
      body: qs.stringify({
        api: "c24106bb093954188b2883e807d3bd8040cb96a9",
        name: name,
        email: email,
        message: message,
      }),
      headers: {
        Accept: "application/json",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    }).then((response) =>
      response.json().then((data) => {
        if (data.status === "success") {
          setError("Thanks for contacting us. We will get back soon.");
          e.target.reset();
        } else {
          setError("Something went wrong. Please try again later.");
        }
      })
    );
  };

  return (
    <div className="">
      <div
        className={
          error == null
            ? "my-1 px-4 py-2   bg-black  rounded inline-block   text-white"
            : "my-1 px-4 py-2  bg-opacity-20  rounded inline-block  bg-violet-700 text-violet-700"
        }
      >
        {error ?? " "}
      </div>
      <form
        action=""
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(e);
        }}
      >
        <div className="m-auto">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email-address"
            placeholder="Email address"
            id="email-address"
            autoComplete="email"
            required
            className="my-4 rounded-md block w-full  form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
          <textarea
            id="about"
            name="about"
            cols="20"
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            placeholder="message"
            className="rounded-md block w-full my-4 text-black"
            required
          />
          <div className=" pb-3 text-right mb-12">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
