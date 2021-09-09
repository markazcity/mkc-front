import Logo from "../components/Logo";
import Footer from "../components/Footer";
import MenuBar from "../components/NavMenu/Menu"
import SocialIcons from '../components/SocialIcons'
import Head from 'next/head'

const Contact = () => {

  const menu = 
  [
  {name:"Home", icon:"", to:"/"},
  {name:"Who We Are", icon:"", to:"#who"},
  {name:"Our Past", icon:"", to:"#past"},
  {name:"Our Philosophy", icon:"", to:"#philosophy"},
  {name:"Our Leadership", icon:"", to:"#leadership"},
  ];
  return (
    
    <div>
         <Head>
        <title>Contact - Markaz Knowledge City</title>
        <meta name="description" content="Contact Markaz Knowledge City" />
      </Head>
      <div style={{ backgroundColor: "#F8FAF8",
    backgroundImage:`url('/assets/img/spikes.png')`,
    minHeight:"50vh"
    }}>
        <Logo logo="logob" className="absolute z-20" />
        {/* <MenuBar
        icoColor=" text-black"
        navItems={menu}
        /> */}

        </div>
        <div
        style={{minHeight:"600px",}}
        ></div>
      <section
      className="absolute z-10 top-0 px-10 py-28 md:py-52 flex justify-center w-full"
      >
            


      <div className="mt-10 sm:mt-0 w-full xl:w-8/12">

        <div className="md:grid md:grid-cols-12 bg-white shadow">
        <div
        className="h-full  md:col-span-5 rounded-t md:rounded-t-none md:rounded-l px-10 py-8 md:py-16"
        style={{
            backgroundColor:"#AA73AC"
        }}
        >
            <p className="text-white">
                <span className="text-xl font-bold">MARKAZ KNOWLEDGE CITY</span> <br />
                <span>Kunnoth P.O, Kaithapoyil </span> <br />
                <span>Calicut, Kerala, IN</span>

            </p>
            <div className="mt-10 text-white">
                <span className="ml-1 mb-2 text-sm">Connect Us</span>
            <SocialIcons/>
            </div>
        </div>
          <div className="my-8  md:col-span-7 px-10">
            <form action="" method="POST"
            onSubmit={(e)=>{
                e.preventDefault();
            }}
            >
              <div className=" overflow-hidden sm:rounded-md">
                <div className="px-4 py-5  sm:p-6">
                  <div className="grid grid-cols-1">
                      <h3
                      className="font-bold text-xl text-gray-500"
                      >GET IN TOUCH</h3>
                      {/* NAME SECTION BEGINS */}
                    <div className="col-span-full sm:col-span-6 my-2">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-blue-500 focus:border-violet-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-blue-500 focus:border-violet-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
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
                        className="shadow-sm focus:ring-blue-500 focus:border-violet-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Drop your queries here"
                        defaultValue={''}
                      />
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
      
     
   
    <Footer/>
    </div>
  );
};

export default Contact;
