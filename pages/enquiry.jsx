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


const courses = {
    'Alif Global School': [
        {
            value: 'LKG',
            label: 'LKG'
        },
        {
            value: 'UKG',
            label: 'UKG'
        },
        {
            value: 'GRADE 1',
            label: 'GRADE 1'
        },
        {
            value: 'GRADE 2',
            label: 'GRADE 2'
        },
        {
            value: 'GRADE 3',
            label: 'GRADE 3'
        },
        {
            value: 'GRADE 4',
            label: 'GRADE 4'
        },
        {
            value: 'GRADE 5',
            label: 'GRADE 5'
        },
        {
            value: 'GRADE 6',
            label: 'GRADE 6'
        },
        {
            value: 'GRADE 7',
            label: 'GRADE 7'
        },
        {
            value: 'GRADE 8',
            label: 'GRADE 8'
        },
        {
            value: 'GRADE 9',
            label: 'GRADE 9'
        },
    ],

    'Hillsinai': [
        {
            value: '+1 SCIENCE',
            label: '+1 SCIENCE'
        },
        {
            value: '+1 COMMERCE',
            label: '+1 COMMERCE'
        },
        {
            value: '+1 HUMANITIES',
            label: '+1 HUMANITIES'
        },
    ]
}


const Enquiry = ({ data }) => {
    const URL = ROOT_URL + "addJob.php";

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [company, setCompany] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [institute, setInstitute] = useState('');
    const [course, setCourse] = useState('');
    const [comments, setComments] = useState('');
    const [position, setPosition] = useState();
    const [cover, setCover] = useState();
    const [resume, setResume] = useState();
    const [error, setError] = useState(null);
    const [jobPos, setPos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [connError, setConnError] = useState(false);
    const [banner, setBanner] = useState(null);

    const [coursesOptions, setCounrseOptions] = useState([]);

    const changeInstitution = (e) => {
        setInstitute(e.target.value);
        setCounrseOptions(courses[e.target.value]);
    }

    useEffect(() => {
        if (data != null) {
            setPos(data.data.data);
            setBanner(data.banner.image);
        } else {
            console.log("Heyy.. its empty");
        }
    }, [data]);



    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);


        fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
            method: "POST",
            body: qs.stringify({
                oid: "00D5h0000086f0n",
                retURL: "http://www.markazknowledgecity.com/",
                lead_source: "Web",
                Service_Category__c: "Academic",
                first_name: firstName,
                last_name: lastName,
                email: email,
                mobile: mobile,
                company: company,
                city: city,
                state: state,
                country: country,
                "00N5h00000GbwhY": institute,
                "00N5h00000Gbwha": course,
                description: comments,
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
                // console.log(data);
                if (data.status === "success") {
                    setError("Thanks for applying. We will connect you soon.");
                    event.target.reset();
                } else {
                    setError("Something went wrong. Please try again later.");
                }
            })
            .catch((e) => {
                setLoading(false);
                setConnError(true);
                event.target.reset();
            })
            .catch((e) => {
                event.target.reset();
                setLoading(false);
                setConnError(true);
            });
    };

    return (
        <div>
            <HeadTag title="Enquiry - Markaz Knowledge City" />

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
                            {/* <img
                                src={ROOT_URL + "siteAssets/" + banner ?? ""}
                                alt=""
                                className="rounded-t"
                                style={{
                                    width: "100%",
                                }}
                            />{" "} */}
                            {/* <br /> */}
                            <h3 className="font-bold text-3xl  text-center">
                                Course Enquiry
                            </h3>
                            <form
                                action=""
                                method="POST"
                                onSubmit={handleSubmit}
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


                                                    <div className="flex w-full">
                                                        <SingleInput
                                                            id="m_first_name"
                                                            name="first_name"
                                                            size="20"
                                                            label="First Name"
                                                            req={true}
                                                            className='mr-2'
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                        />
                                                        <SingleInput
                                                            id="m_last_name"
                                                            name="Last Name"
                                                            size="20"
                                                            label="Last Name"
                                                            req={true}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                        />

                                                    </div>

                                                    {/* NAME SECTION BEGINS */}
                                                    <SingleInput
                                                        id="m_email"
                                                        name="email"
                                                        label="Email"
                                                        req={true}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <SingleInput
                                                        id="m_mobile"
                                                        name="mobile"
                                                        type="number"
                                                        label="Mobile"
                                                        req={true}
                                                        onChange={(e) => setMobile(e.target.value)}
                                                    />
                                                    <SingleInput
                                                        id="m_company"
                                                        name="company"
                                                        label="Guardian Name/Company"
                                                        req={true}
                                                        onChange={(e) => setCompany(e.target.value)}
                                                    />
                                                    <SingleInput
                                                        id="m_city"
                                                        name="city"
                                                        label="City"
                                                        req={true}
                                                        onChange={(e) => setCity(e.target.value)}
                                                    />
                                                    <SingleInput
                                                        id="m_state"
                                                        name="state"
                                                        label="State"
                                                        req={true}
                                                        onChange={(e) => setState(e.target.value)}
                                                    />
                                                    <SingleInput
                                                        id="m_country"
                                                        name="country"
                                                        label="Country"
                                                        req={true}
                                                        onChange={(e) => setCountry(e.target.value)}
                                                    />
                                                    <div className="col-span-full sm:col-span-6 my-2">
                                                        <label
                                                            htmlFor="m_00N5h00000GbwhY"
                                                            className="flex text-sm font-medium text-gray-700 items-center"
                                                        >
                                                            Institute
                                                            <span className="text-red-600 block ml-1">
                                                                *
                                                            </span>
                                                        </label>
                                                        <select
                                                            id="m_00N5h00000GbwhY"
                                                            onChange={changeInstitution}
                                                            autoComplete={Math.random()}
                                                            className="mt-1 focus:ring-blue-500 focus:border-violet-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            name="00N5h00000GbwhY" title="Service Sub Category"
                                                            required
                                                        >
                                                            <option selected disabled value="">Select Institute</option>
                                                            <option value="Alif Global School">Alif Global School</option>
                                                            <option value="Hillsinai">Hillsinai</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-span-full sm:col-span-6 my-2">
                                                        <label
                                                            htmlFor="m_00N5h00000Gbwha"
                                                            className="flex text-sm font-medium text-gray-700 items-center"
                                                        >
                                                            Course
                                                            <span className="text-red-600 block ml-1">
                                                                *
                                                            </span>
                                                        </label>
                                                        <select
                                                            id="m_00N5h00000Gbwha"
                                                            onChange={(e) => setCourse(e.target.value)}
                                                            autoComplete={Math.random()}
                                                            defaultValue=""
                                                            className="mt-1 focus:ring-blue-500 focus:border-violet-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            name="00N5h00000Gbwha" title="Service Type"
                                                            required
                                                        >
                                                            <option value="" disabled>Select Course </option>
                                                            {coursesOptions.map((option, index) => {
                                                                return <option key={index} value={option.value}>{option.label}</option>
                                                            })}
                                                        </select>
                                                    </div>


                                                    <SingleTextArea
                                                        name="description"
                                                        label="Comments"
                                                        row={4}
                                                        onChange={(e) => setComments(e.target.value)}
                                                    />
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
                                                <span>Submit</span>
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

export default Enquiry;

const SingleInput = (props) => {
    return (
        <div className={`col-span-full sm:col-span-6 my-2 w-full ${props.className}`}>
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
                id={props.id || props.name}
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
