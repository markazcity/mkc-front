import Logo from "@/components/Logo";
import Footer from "@/components/Footer/Footer";
import HeadTag from "@/head";
import { useState } from "react";
import MenuBar from "@/components/NavMenu/Menu";
import { useEffect } from "react";
import { API_KEY } from "@/inc/Const";
import { ROOT_URL } from "@/inc/Const";
import axios from "axios";
import Dialog from "@/components/Admin/Dialog";
import Footer2 from "@/components/Footer/Footer2";

var qs = require("qs");

const DATA_URL = ROOT_URL + "jobPositions.php";
const BANNER_URL = ROOT_URL + "siteAssets/getCareerBanner.php";

const getData = async () => {
  let data = await fetch(DATA_URL).then((response) => response.json());
  let banner = await fetch(BANNER_URL).then((response) => response.json());
  return {
    data: data,
    banner: banner,
  };
};

export async function getStaticProps() {
  const content = await getData();
  return {
    props: {
      data: content,
    },
    revalidate: 60,
  };
}

const Carreers = ({ data }) => {
  const URL = ROOT_URL + "addJob.php";

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [position, setPosition] = useState();
  const [salary, setSalary] = useState();
  const [experience, setExperience] = useState();
  const [qualification, setQualification] = useState();
  const [cover, setCover] = useState();
  const [resume, setResume] = useState();
  const [error, setError] = useState(null);
  const [jobPos, setPos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [connError, setConnError] = useState(false);
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    if (data != null) {
      setPos(data.data.data);
      setBanner(data.banner.image);
    } else {
      console.log("Heyy.. its empty");
    }
  }, [data]);

  async function uploadResume() {
    const UPLOAD_URL = ROOT_URL + "resume/uploadResume.php";
    const formData = new FormData();
    formData.append("api", API_KEY);
    formData.append("file", resume);
    return await axios
      .post(UPLOAD_URL, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .catch((e) => {
        setLoading(false);
        setConnError(true);
      });
  }

  const applyJob = async (e) => {
    setLoading(true);
    uploadResume()
      .then((res) => {
        if (res.data.status == "success") {
          let resumeLink = res.data.file;

          fetch(URL, {
            method: "POST",
            body: qs.stringify({
              api: "c24106bb093954188b2883e807d3bd8040cb96a9",
              name: fullName,
              email: email,
              phone: phone,
              position: position,
              salary: salary,
              experience: experience,
              qualification: qualification,
              cover: cover,
              resume: resumeLink,
            }),
            headers: {
              Accept: "application/json",
              "content-type":
                "application/x-www-form-urlencoded; charset=UTF-8",
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
        } else {
          alert("Error Uploading!");
        }
      })
      .catch((e) => {
        setLoading(false);
        setConnError(true);
      });
  };

  return (
    <div>
      <HeadTag title="Careers - Markaz Knowledge City" />

      <div
        style={{
          backgroundColor: "#F8FAF8",
          backgroundImage: `url('/assets/img/spikes.png')`,
          minHeight: "50vh",
        }}
      >
        <Logo logo="logob" className="absolute z-20" />
        <MenuBar icoColor=" text-black" />
      </div>
      <div style={{ minHeight: "890px" }}></div>
      <section className="absolute z-10 top-0  py-28 md:py-52 flex justify-center w-full">
        <div className="mt-10 sm:mt-0 w-full xl:w-6/12">
          <div className="md:grid md:grid-cols-12 bg-white shadow rounded-lg">
            <div className="mb-8 md:col-span-12 ">
              <img
                src={ROOT_URL + "siteAssets/" + banner ?? ""}
                alt=""
                className="rounded-t"
                style={{
                  width: "100%",
                }}
              />{" "}
              <br />
              <form
                action=""
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  applyJob(e);
                }}
              >
                <div className=" overflow-hidden">
                  <div className="  sm:p-6">
                    <div className="grid grid-cols-1 ">
                      <section>
                        <div className="px-10">
                          <div
                            className={
                              error == null
                                ? "mb-2 px-4 py-2  bg-opacity-20  rounded inline-block  bg-white text-white"
                                : "mb-2 px-4 py-2  bg-opacity-20  rounded inline-block  bg-violet-700 text-violet-700"
                            }
                          >
                            {error ?? "Resp"}
                          </div>
                          <h3 className="font-bold text-xl  text-left">
                            Job Application Form
                          </h3>

                          {/* NAME SECTION BEGINS */}
                          <SingleInput
                            name="full-name"
                            label="Full Name"
                            req={true}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                          <SingleInput
                            name="email-address"
                            label="Email"
                            req={true}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <SingleInput
                            name="phone"
                            type="number"
                            label="Phone number"
                            req={true}
                            onChange={(e) => setPhone(e.target.value)}
                          />

                          {jobPos != null ? (
                            <div className="col-span-full sm:col-span-6 my-2">
                              <label
                                htmlFor=""
                                className="flex text-sm font-medium text-gray-700 items-center"
                              >
                                Which position are you interested in?
                                <span className="text-red-600 block ml-1">
                                  *
                                </span>
                              </label>
                              <select
                                name="position"
                                id="position"
                                onChange={(e) => setPosition(e.target.value)}
                                autoComplete={Math.random()}
                                className="mt-1 focus:ring-blue-500 focus:border-violet-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                required
                              >
                                <option selected disabled>
                                  Select Position
                                </option>
                                {jobPos.map((pos, index) => {
                                  return (
                                    <option key={index} value={pos.jp_name}>
                                      {pos.jp_name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          ) : (
                            <span></span>
                          )}

                          <SingleInput
                            name="salary"
                            type="number"
                            label="Salary Expectation"
                            req={true}
                            onChange={(e) => setSalary(e.target.value)}
                          />
                          <SingleTextArea
                            name="experience"
                            label="Experience"
                            onChange={(e) => setExperience(e.target.value)}
                          />
                          <SingleTextArea
                            name="qualification"
                            label="Qualification"
                            onChange={(e) => setQualification(e.target.value)}
                          />
                          <SingleTextArea
                            name="cover-letter"
                            label="Short cover letter"
                            row={4}
                            onChange={(e) => setCover(e.target.value)}
                          />

                          <div className="col-span-full sm:col-span-6 my-2">
                            <label
                              htmlFor="Resume"
                              className="flex text-sm font-medium text-gray-700 items-center"
                            >
                              Upload Resume
                              <span className="text-red-600 block ml-1">*</span>
                            </label>
                            <input
                              type="file"
                              onChange={(e) => {
                                setResume(e.target.files[0]);
                              }}
                              accept="application/pdf"
                              className="mt-1 focus:ring-blue-500 focus:border-violet-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              required
                            />
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="px-8 mr-12 mt-6 lg:mt-2 pb-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {loading ? (
                        <span>
                          <img
                            src="/assets/img/loading.gif"
                            className="mx-4"
                            style={{ height: "30px" }}
                            alt=""
                          />
                        </span>
                      ) : (
                        <span> Submit Application</span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="h-36"></div>
      {connError ? (
        <Dialog onClose={() => setConnError(false)}>
          <center>Please check your connection!</center>
        </Dialog>
      ) : (
        <span></span>
      )}
      <Footer2 />
    </div>
  );
};

export default Carreers;

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

const SingleTextArea = (props) => {
  return (
    <div className="col-span-full sm:col-span-4  mt-2">
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <textarea
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        rows={props.row == null ? 2 : props.row}
        className="shadow-sm focus:ring-blue-500 focus:border-violet-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
        placeholder={props.placeholder}
        defaultValue={""}
      />
    </div>
  );
};
