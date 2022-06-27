import AdminLayout from "@/components/Admin/Layout";
import { RightButton, Button } from "@/components/Admin/Button";

import { useEffect, useState } from "react";

import axios from "axios";

import Head from "next/head";
import { ROOT_URL } from "@/inc/Const";
import { API_KEY } from "@/inc/Const";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inputStyle = "bg-gray-100 w-full mr-6 rounded-lg";
const spanStyle = "text-minigreen-700 px-1";

const CustomizeAbout = () => {
  const DATA_URL = ROOT_URL + "webContents/content.php";
  const [data, setData] = useState(null);

  function getData() {
    axios.get(DATA_URL).then((res) => {
      let data = res.data;
      if (data.status === "success") {
        setData(data.data);
      } else {
        alert("Something went wrong. Please try again later.2");
      }
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <AdminLayout title="Customize Home" label="CustomizeAbout">
      <Head>
        <title>Customize Home - Markaz Knowledge City</title>
      </Head>

      {/* WHO ARE WE */}
      <section className="mt-6 bg-white shadow-lg rounded-lg p-4 px-8">
        <h2 className="text-2xl font-bold my-2 text-violet-700">WHO ARE WE</h2>
        <Who data={data} refresh={() => getData()} />
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="mt-6 bg-white shadow-lg rounded-lg p-4 px-8">
        <h2 className="text-2xl font-bold my-2 text-violet-700">
          OUR PHILOSOPHY
        </h2>
        <Philosophy data={data} refresh={() => getData()} />
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="mt-6 bg-white shadow-lg rounded-lg p-4 px-8">
        <h2 className="text-2xl font-bold my-2 text-violet-700">
          JOURNEY SO FAR
        </h2>
        <Journey data={data} refresh={() => getData()} />
      </section>

      {/* OUR PAST */}
      <section className="mt-6 bg-white shadow-lg rounded-lg p-4 px-8">
        <h2 className="text-2xl font-bold my-2 text-violet-700">OUR PAST</h2>
        <Past data={data} />
      </section>

      {/* OUR LEADERSHIP */}
      <section className="mt-6 bg-white shadow-lg rounded-lg p-4 px-8">
        <h2 className="text-2xl font-bold my-2 text-violet-700">
          OUR LEADERSHIP
        </h2>
        <OurLeadership data={data} />
      </section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AdminLayout>
  );
};

export default CustomizeAbout;

export const Who = ({ data, refresh }) => {
  const [whoTitle, setWhoTitle] = useState("");
  const [aboutBody, setAboutBody] = useState("");
  const [aboutId, setAboutId] = useState("");

  useEffect(() => {
    if (data != null) {
      let contents = data.filter((item) => item.wc_category === "about_who");
      if (contents.length > 0) {
        let aboutContent = contents[0];
        setWhoTitle(aboutContent.wc_title);
        setAboutBody(aboutContent.wc_body);
        setAboutId(aboutContent.wc_id);
      } else {
        toast.error("Who section data not found.");
      }
    }
  }, [data]);

  // UPDATE CONTENT
  async function updateContent() {
    const URL = ROOT_URL + "webContents/updateContent.php";
    const formData = new FormData();
    formData.append("api", API_KEY);
    formData.append("id", aboutId);
    formData.append("title", whoTitle);
    formData.append("body", aboutBody);
    formData.append("category", "about_who");

    await axios
      .post(URL, formData, {
        headers: {
          Accept: "application/json",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      })
      .then((response) => {
        if (response.data.status == "success") {
          toast.success(whoTitle + " content updated!");
          refresh();
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  }

  return whoTitle != null && whoTitle.length > 1 ? (
    <section>
      <div className="my-2">
        <span className={spanStyle}>Title</span>
        <input
          type="text"
          defaultValue={whoTitle}
          className={inputStyle}
          onChange={(e) => setWhoTitle(e.target.value)}
        />
        <br /> <br />
        <span className={spanStyle}>Content</span>
        <textarea
          rows="8"
          defaultValue={aboutBody}
          className={inputStyle}
          onChange={(e) => setAboutBody(e.target.value)}
        ></textarea>
        <br />
        <RightButton text="Update Content" onClick={() => updateContent()} />
      </div>
    </section>
  ) : (
    <i>Loading</i>
  );
};

// PHILOSOPHY

export const Philosophy = ({ data, refresh }) => {
  const [philosophyTitle, setPhilosophyTitle] = useState("");
  const [aboutBody, setAboutBody] = useState("");
  const [aboutId, setAboutId] = useState("");

  useEffect(() => {
    if (data != null) {
      let contents = data.filter(
        (item) => item.wc_category === "about_philosophy"
      );
      if (contents.length > 0) {
        let aboutContent = contents[0];
        setPhilosophyTitle(aboutContent.wc_title);
        setAboutBody(aboutContent.wc_body);
        setAboutId(aboutContent.wc_id);
      } else {
        toast.error("Philosophy section data not found.");
      }
    }
  }, [data]);

  // UPDATE CONTENT
  async function updateContent() {
    const URL = ROOT_URL + "webContents/updateContent.php";
    const formData = new FormData();
    formData.append("api", API_KEY);
    formData.append("id", aboutId);
    formData.append("title", philosophyTitle);
    formData.append("body", aboutBody);
    formData.append("category", "about_philosophy");

    await axios
      .post(URL, formData, {
        headers: {
          Accept: "application/json",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      })
      .then((response) => {
        if (response.data.status == "success") {
          toast.success(philosophyTitle + " content updated!");
          refresh();
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  }

  return philosophyTitle != null && philosophyTitle.length > 1 ? (
    <section>
      <div className="my-2">
        <span className={spanStyle}>Title</span>
        <input
          type="text"
          defaultValue={philosophyTitle}
          className={inputStyle}
          onChange={(e) => setPhilosophyTitle(e.target.value)}
        />
        <br /> <br />
        <span className={spanStyle}>Content</span>
        <textarea
          rows="8"
          defaultValue={aboutBody}
          className={inputStyle}
          onChange={(e) => setAboutBody(e.target.value)}
        ></textarea>
        <br />
        <RightButton text="Update Content" onClick={() => updateContent()} />
      </div>
    </section>
  ) : (
    <i>Loading</i>
  );
};

// LEADERSHIP

export const OurLeadership = ({ data }) => {
  const [leadersData, setLeadersData] = useState(null);

  useEffect(() => {
    if (data != null) {
      let leaders = data.filter(
        (item) => item.wc_category === "about_leadership"
      );
      if (leaders.length > 0) {
        setLeadersData(leaders);
      } else {
        toast.error("Philosophy section data not found.");
      }
    }
  }, [data]);

  return leadersData != null && leadersData.length > 1 ? (
    <section>
      {leadersData.map((leader) => {
        return (
          <div key={leader.wc_id} className="flex m-4">
            <div className="mr-4 p-6 bg-minigreen-700 bg-opacity-50 hover:bg-opacity-80 rounded-lg">
              <img
                src={ROOT_URL + "webContents/uploads/" + leader.wc_image}
                className="fade"
                alt=""
              />
            </div>
            <div className="mx-6">
              {leader.wc_body.substring(0, 300)}...
              <br /> <br />
              <h3 className="font-bold">{leader.wc_title}</h3>
              <span className="text-gray-500">{leader.wc_author_position}</span>
              <br />
              <Button
                text="Edit"
                className="my-2"
                onClick={() => {
                  window
                    .open(
                      `/admin/customize/editContent?id=${leader.wc_id}`,
                      "_blank"
                    )
                    .focus();
                }}
              />
            </div>
          </div>
        );
      })}
    </section>
  ) : (
    <i>Loading</i>
  );
};

export const Past = ({ data }) => {
  const [pastData, setPastData] = useState([]);

  useEffect(() => {
    if (data != null) {
      setPastData(data.filter((item) => item.wc_category === "about_past"));
    }
  }, [data]);

  return (
    <div>
      {pastData != null ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 mx-5 lg:mx-32 3xl:mx-64 gap-y-1">
          {pastData.map((item) => {
            return (
              <div
                key={item.wc_id}
                className="shadow-lg hover:shadow-2xl rounded-xl m-2 cursor-pointer"
              >
                <div
                  className="h-40 w-full rounded-t-xl "
                  style={{
                    backgroundImage: `url('${ROOT_URL}webContents/uploads/${item.wc_image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="text-center m-4">
                  <span className="text-minigreen-700  text-center">
                    {item.wc_title}
                  </span>{" "}
                  <br />
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2 rounded my-2 text-xs"
                    onClick={() => {
                      window
                        .open(
                          `/admin/customize/editContent?id=${item.wc_id}`,
                          "_blank"
                        )
                        .focus();
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

// JOURNEY SECTION
export const Journey = ({ data, refresh }) => {
  const [journeyTitle, setJourneyTitle] = useState("");
  const [aboutBody, setAboutBody] = useState("");
  const [aboutId, setAboutId] = useState("");

  useEffect(() => {
    if (data != null) {
      let contents = data.filter(
        (item) => item.wc_category === "about_journey"
      );
      if (contents.length > 0) {
        let aboutContent = contents[0];
        setJourneyTitle(aboutContent.wc_title);
        setAboutBody(aboutContent.wc_body);
        setAboutId(aboutContent.wc_id);
      } else {
        toast.error("Journey section data not found.");
      }
    }
  }, [data]);

  // UPDATE CONTENT
  async function updateContent() {
    const URL = ROOT_URL + "webContents/updateContent.php";
    const formData = new FormData();
    formData.append("api", API_KEY);
    formData.append("id", aboutId);
    formData.append("title", journeyTitle);
    formData.append("body", aboutBody);
    formData.append("category", "about_journey");

    await axios
      .post(URL, formData, {
        headers: {
          Accept: "application/json",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      })
      .then((response) => {
        if (response.data.status == "success") {
          toast.success(journeyTitle + " content updated!");
          refresh();
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  }

  return journeyTitle != null && journeyTitle.length > 1 ? (
    <section>
      <div className="my-2">
        <span className={spanStyle}>Title</span>
        <input
          type="text"
          defaultValue={journeyTitle}
          className={inputStyle}
          onChange={(e) => setJourneyTitle(e.target.value)}
        />
        <br /> <br />
        <span className={spanStyle}>Content</span>
        <textarea
          rows="8"
          defaultValue={aboutBody}
          className={inputStyle}
          onChange={(e) => setAboutBody(e.target.value)}
        ></textarea>
        <br />
        <RightButton text="Update Content" onClick={() => updateContent()} />
      </div>
    </section>
  ) : (
    <i>Loading</i>
  );
};
