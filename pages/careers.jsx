import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Head from 'next/head'
import { useState } from "react";
import MenuBar from "@/components/NavMenu/Menu"
var qs = require('qs');

const Carreers = () => {
  const URL = "https://api.markazcity.in/addJob.php";

const [fullName, setFullName] = useState();
const [email, setEmail] = useState();
const [phone, setPhone] = useState();
const [position, setPosition] = useState();
const [salary, setSalary] = useState();
const [experience, setExperience] = useState();
const [qualification, setQualification] = useState();
const [cover, setCover] = useState();

const [error, setError] = useState(null);


const applyJob = async (e) => {
  fetch(URL,
    {
      method: 'POST', 
      body:
      qs.stringify({
          "api": 'c24106bb093954188b2883e807d3bd8040cb96a9',
          'name':fullName,
          'email':email,
          'phone':phone,
'position':position,
'salary':salary,
'experience':experience,
'qualification':qualification,
'cover':cover,
        })
      ,
      headers: { 
        'Accept': 'application/json',
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    }
    }
    )
  .then(response => response.json())
  .then(data =>{
   
    if(data.status==="success"){
      setError("Thanks for applying. We will connect you soon.")
      e.target.reset()
    }
    else {
      setError("Something went wrong. Please try again later.");
    }
  });
}


  return (
    <div>
         <Head>
        <title>Carreers - Markaz Knowledge City</title>
        <meta name="description" content="Carreers Markaz Knowledge City" />
      </Head>
      <div style={{ backgroundColor: "#F8FAF8",
    backgroundImage:`url('/assets/img/spikes.png')`,
    minHeight:"50vh"
    }}>

        <Logo logo="logob" className="absolute z-20" />
        <MenuBar
        icoColor=" text-black"
        />


        </div>
        <div
        style={{minHeight:"890px",}}
        ></div>
      <section
      className="absolute z-10 top-0  py-28 md:py-52 flex justify-center w-full"
      >
            


      <div className="mt-10 sm:mt-0 w-full xl:w-6/12">

        <div className="md:grid md:grid-cols-12 bg-white shadow rounded-lg">
          <div className="mb-8 md:col-span-12 ">
          <img src="/assets/img/hire.jpg" alt=""
                    className="rounded-t"
                    style={{
                      width: "100%",
                    }}
                    /> <br />
            <form action="" method="POST"
            onSubmit={(e)=>{
                e.preventDefault();
                applyJob(e);
            }}
            >
              <div className=" overflow-hidden">
                <div className="  sm:p-6">
                  <div className="grid grid-cols-1 ">
                    <section>
                  
                      <div className="px-10">
                      <div className={
                        error==null?"mb-2 px-4 py-2  bg-opacity-20  rounded inline-block  bg-white text-white":
                        "mb-2 px-4 py-2  bg-opacity-20  rounded inline-block  bg-violet-700 text-violet-700"

                      }>{error??"Resp"}</div>
                      <h3
                      className="font-bold text-xl  text-left"
                      >Job Application Form</h3>

                      {/* NAME SECTION BEGINS */}
                   <SingleInput name="full-name" label="Full Name" req={true} onChange={(e) => setFullName(e.target.value)} />
                   <SingleInput name="email-address" label="Email" req={true}  onChange={(e) => setEmail(e.target.value)} />
                   <SingleInput name="phone" type="number" label="Phone number" req={true}  onChange={(e) => setPhone(e.target.value)} />
                   <SingleInput name="position" label="Which position(s) are you interested in? " req={true}  onChange={(e) => setPosition(e.target.value)} />
                   <SingleInput name="salary" type="number" label="Salary Expectation" req={true}  onChange={(e) => setSalary(e.target.value)} />
                   <SingleTextArea name="experience" label="Experience"  onChange={(e) => setExperience(e.target.value)} />
                   <SingleTextArea name="qualification" label="Qualification"  onChange={(e) => setQualification(e.target.value)} />
                   <SingleTextArea name="cover-letter" label="Short cover letter" row={4}  onChange={(e) => setCover(e.target.value)} />
                      </div>
                   </section>
                       </div>


                   
                 
                </div>
                <div className="px-8 mr-12 mt-6 lg:mt-2 pb-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

 







      </section>
      
     <div className="h-36"></div>
   
    <Footer/>
    </div>
  );
};

export default Carreers;

const SingleInput = (props) => {

return (
  <div className="col-span-full sm:col-span-6 my-2">
  <label htmlFor={props.name} 
  className="flex text-sm font-medium text-gray-700 items-center">
    {props.label} { props.req?(
    <span className="text-red-600 block ml-1"
    >*</span>):(<span></span>)}
  </label>
  <input
    type={props.type==null?"text":props.type}
    name={props.name}
    id={props.name}
    onChange={props.onChange}
    autoComplete={Math.random()}
    className="mt-1 focus:ring-blue-500 focus:border-violet-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    required
  />
</div>
);
}

const SingleTextArea = (props) => {
  return (
    <div className="col-span-full sm:col-span-4  mt-2">
    <label 
    htmlFor={props.name} 
    className="block text-sm font-medium text-gray-700">
      {props.label}
    </label>
  <textarea
      id={props.name}
      name={props.name}
      onChange={props.onChange}
      rows={props.row==null?2:props.row}
      className="shadow-sm focus:ring-blue-500 focus:border-violet-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
      placeholder={props.placeholder}
      defaultValue={''}
    />
     </div>
  );
}