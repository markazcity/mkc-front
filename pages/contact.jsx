import Logo from "@/components/Logo";
import Footer from "@/components/Footer/Footer";
import MenuBar from "@/components/NavMenu/Menu"
import SocialIcons from '@/components/SocialIcons'
import HeadTag from "@/head"
import { useState } from "react";
var qs = require('qs');


const Contact = () => {
  const URL = "https://api.markazcity.in/sendMessage.php";


const [name, setName] = useState(null);
const [email, setEmail] = useState(null);
const [message, setMessage] = useState(null);

const [error, setError] = useState(null);


  const sendMessage = async (e) => {
    fetch(URL,
      {
        method: 'POST', 
        body:
        qs.stringify({
            "api": 'c24106bb093954188b2883e807d3bd8040cb96a9',
            'name':name,
            'email':email,
            'message':message
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
        setError("Thanks for contacting us. We will get back soon.")
        e.target.reset()
      }
      else {
        setError("Something went wrong. Please try again later.");
      }
    });
  }



  return (
    
    <div>
         <HeadTag title="Contact - Markaz Knowledge City"/>
        
     
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
        style={{minHeight:"600px",}}
        ></div>
      <section
      className="absolute z-10 top-0 px-10 py-28 md:py-52 flex justify-center w-full"
      >
            


      <div className="mt-20 lg:mt-0  w-full xl:w-8/12">

        <div className="md:grid md:grid-cols-12 bg-white shadow">
        <div
        className="h-full  md:col-span-5 rounded-t md:rounded-t-none md:rounded-l pb-8 md:pb-16"
        style={{
            backgroundColor:"#AA73AC"
        }}
        >
          <div className="mb-10">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.117039572408!2d76.00567541455088!3d11.47147714911663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba66c11ab0163fb%3A0x99269df943e166ae!2sMarkaz%20Knowledge%20City!5e0!3m2!1sen!2sin!4v1633425106286!5m2!1sen!2sin" 
          className="w-full h-64"
          frameborder="0" 
          style={{border:0}} 
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0"></iframe>

        </div>
            <p className=" px-10 text-white">
                <span className="text-xl font-bold">MARKAZ KNOWLEDGE CITY</span> <br />
                <span>Kunnoth P.O, Kaithapoyil </span> <br />
                <span>Calicut, Kerala, IN</span>

            </p>
            <div className=" px-10 mt-10 text-white">
                <span className="ml-1 mb-2 text-sm">Connect Us</span>
            <SocialIcons/>
            </div>
        </div>
          <div className="my-8  md:col-span-7 px-10">
            <form action="" method="POST"
            onSubmit={(e)=>{
                e.preventDefault();
                sendMessage(e);
            }}
            >
              <div className=" overflow-hidden sm:rounded-md">
                <div className="px-4 py-5  sm:p-6">
                  <div className="">
                      <h3
                      className="font-bold text-xl text-gray-500"
                      >GET IN TOUCH</h3>

                      <div className={
                        error==null?"my-1 px-4 py-2  bg-opacity-20  rounded inline-block  bg-white text-white":
                        "my-1 px-4 py-2  bg-opacity-20  rounded inline-block  bg-violet-700 text-violet-700"

                      }>{error??"Resp"}</div>


                      {/* NAME SECTION BEGINS */}
                    <div className="col-span-full sm:col-span-6 my-2">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        onChange={(e)=>setName(e.target.value)}
                        autoComplete="given-name"
                        className="mt-1 focus:ring-blue-500 focus:border-violet-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      
                      required
                      />
                    </div>
                   {/* NAME SECTION ENDS */}


                   {/* EMAIL SECTION BEGINS */}
                    <div className="col-span-full sm:col-span-6  my-2">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        onChange={(e)=>setEmail(e.target.value)}
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-blue-500 focus:border-violet-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required />
                    </div>
                   {/* EMAIL SECTION ENDS */}

                   {/* MESSAGE SECTION BEGINS  */}
                    <div className="col-span-full sm:col-span-4  mt-2">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                    <textarea
                        id="about"
                        name="about"
                        rows={3}
                        onChange={(e)=>setMessage(e.target.value)}
                        className="shadow-sm focus:ring-blue-500 focus:border-violet-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Drop your queries here"
                        defaultValue={''}
                        required />
                       </div>
                       {/* MESSAGE SECTION ENDS */}
                       </div>


                   
                 
                </div>
                <div className="px-4 pb-3 text-right sm:px-6">
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
        </div>
      </div>









      </section>
      
     <div style={{
       minHeight:"30vh"
     }}>

     </div>
    <Footer/>
    </div>
  );
};

export default Contact;
