const Commerce = () => {
    const educationList = [
        {"title":"Souq", 
        "text":"Souq is the physical marketplace in Markaz Knowledge City. It comes underneath the Cultural Centre with 140+ commercial spaces for different types of business such as restaurant, cloth, perfumes, and minimart. The Souq aims to promote local entrepreneurship with global standards, as well as budget consumption for the public. ", 
        "img":"cc.jpg"},
        
        {"title":"Fez inn Hotel", 
        "text":"Fez Inn is the four-star facilitated business hotel with excellent accommodation facilities in the form of fully furnished deluxe and suit rooms at the gateway of Markaz Knowledge City.  The hotel has 84 deluxe rooms, 28 suites, business desk, tour desk, restaurants, cafes, kiosks, and parking bays. It also forms as the hospitality capital of the City.", 
        "img":"fezinn.jpg"},

        {"title":"M-Tower", 
        "text":"M-Tower is the corporate signature of Markaz Knowledge City. It is set as a multi-layered service apartment that can accommodate the offices, workstations, and residences for business and other private needs. Through M-Tower we aim to furnish better hospitality for the corporate world, be it early start-ups or established ones.  ", 
        "img":"unani.jpg"},
        {"title":"Exhibition Centre", 
        "text":"The Exhibition Center is to offer a better hospitality experience for various national and international events. With a 2000 seated hall and other amenities, the centre is used to host academic, corporate, and private events in a global standard.", 
        "img":"exhibition.jpg"},
        
   
    
    ];
    const colorChange = [0,3,4,7, 8]
    return (
        <div  style={{ backgroundColor: "#F8F9E9" }}  className="pb-20">
            <h1 className="text-5xl font-extrabold mb-5 text-center pt-10"
                style={{
                    color: "#69696D",
                }}
                data-aos="zoom-in"
                >COMMERCE</h1>
                {/* LISTS STARTS HERE */}
                <div className="grid lg:grid-cols-2 lg:mx-64">
            {
                educationList.map(edu=>(
                    <div className="my-4 lg:m-0" key={educationList.indexOf(edu)}
                    data-aos="fade-up"
                    data-aos-delay={educationList.indexOf(edu)*50}
                    >
                        <div
                        className="relative  mx-10 lg:mx-0 lg:my-0 h-full"
                        style={
                           {
                        backgroundImage:`url('/assets/img/components/${edu.img}')`,
                        backgroundSize:"cover",
                        }
                           }
                        >
                            <div
                            className="h-full w-full"
                            style={ {
                                backgroundColor:colorChange.includes(educationList.indexOf(edu))?
                                "rgba(53, 59, 72,0.75)":
                                //"rgba(182, 184, 167,0.8)":
                                "rgba(113, 128, 147,0.75)",
                                //"rgba(184, 185, 146, 0.8)",
                        backgroundopacity:0
                        }}
                            >

                            <h1
                            className={`text-center font-extrabold text-2xl  py-8 px-4 lg:p-8 text-white
                            ${edu.title.length>24?" lg:pb-0":""}`
                        }
                           // style={{color:"#69696D"}}
                            >{edu.title.toUpperCase() }</h1>
                            <p className="text-center m-10 mt-4 leading-5 text-white">
                        {edu.text}
                        </p>
                        </div>
                        </div>
                        
                    </div>
                ))
            } </div>
        </div>
    );
}
 
export default Commerce;