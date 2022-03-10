const Agriculture = () => {
    const educationList = [
        {"title":"Mazra", 
        "text":"MAZRA is an integrated project that purposes to regain the agricultural heredity of Kerala. MAZRA aims several scientific projects under the supervision of experts, cooperating with the different projects and schemes of various governmental and non-governmental bodies. MAZRA has designed several projects blending the conventional forms of agricultural and animal husbandry with the modern technology. ", 
        "img":"mazra.jpg",
    "link":""
    },
        
    //     {"title":"Fez inn Hotel", 
    //     "text":"Fez Inn is the four-star facilitated business hotel with excellent accommodation facilities in the form of fully furnished deluxe and suit rooms at the gateway of Markaz Knowledge City.  The hotel has 84 deluxe rooms, 28 suites, business desk, tour desk, restaurants, cafes, kiosks, and parking bays. It also forms as the hospitality capital of the City.", 
    //     "img":"fezinn.jpg",
    // "link":""}
   
   
    
    ];
    const colorChange = [0,3,4,7, 8]
    return (
        <div  style={{ backgroundColor: "rgba(187, 124, 179,0)" }}  className="pb-20">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 text-center py-10"
                style={{
                    color: "#69696D",
                }}
                data-aos="zoom-in"
                >AGRICULTURE</h1>
                {/* LISTS STARTS HERE */}
                <div className=" lg:mx-64">



            {
                educationList.map((edu, index)=>(
                    <div className="my-4 mx-10 lg:m-0 bg-white component-container lg:flex" 
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index*50}
                    >
                       

                        <div className={ index%2==0?"h-72  lg:h-96  lg:w-6/12 comp-image":"h-72 lg:h-96 lg:w-6/12  order-2"}>
            <div
            className="h-full  comp-image"
            style={{background:`url('/assets/img/components/${edu.img}')`,
        backgroundSize:'cover'
        }}
            ></div></div>


                        <div
                            className="p-10  lg:w-6/12"
                            >

                            <h1
                            className={` font-extrabold text-2xl  py-4 lg:pt-4 text-gray-600
                            ${edu.title.length>24?" lg:pb-0":""}`
                        }
                           // style={{color:"#69696D"}}
                            >{edu.title.toUpperCase() }</h1>
                            <p className="leading-5 text-gray-500">
                        {edu.text}
                        </p>
                        <div className="know-more  mt-4 py-2 inline-block cursor-pointer"
                        onClick={
                            ()=>{
                                window.open(edu.link, '_blank')
                            }
                        }
                        >
                        KNOW MORE
                        <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-2"></div>
                        <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-1"></div>
                        <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-1"></div>
                        </div>
                        </div>
                        
                    </div>
                ))
            } </div>
        </div>
    );
}
 
export default Agriculture;