const Commerce = () => {
    const educationList = [
        {"title":"Souq", 
        "text":"Souq is the physical marketplace in Markaz Knowledge City. It comes underneath the Cultural Centre with 140+ commercial spaces for different types of business such as restaurant, cloth, perfumes, and minimart. The Souq aims to promote local entrepreneurship with global standards, as well as budget consumption for the public. ", 
        "img":"souq.jpg"},
        
        {"title":"Fez inn Hotel", 
        "text":"Fez Inn is the four-star facilitated business hotel with excellent accommodation facilities in the form of fully furnished deluxe and suit rooms at the gateway of Markaz Knowledge City.  The hotel has 84 deluxe rooms, 28 suites, business desk, tour desk, restaurants, cafes, kiosks, and parking bays. It also forms as the hospitality capital of the City.", 
        "img":"fezinn.jpg"},

        {"title":"M-Tower", 
        "text":"M-Tower is the corporate signature of Markaz Knowledge City. It is set as a multi-layered service apartment that can accommodate the offices, workstations, and residences for business and other private needs. Through M-Tower we aim to furnish better hospitality for the corporate world, be it early start-ups or established ones.  ", 
        "img":"mtower.jpg"},
        {"title":"Exhibition Centre", 
        "text":"The Exhibition Center is to offer a better hospitality experience for various national and international events. With a 2000 seated hall and other amenities, the centre is used to host academic, corporate, and private events in a global standard.", 
        "img":"exhibition.jpg"},
        
   
    
    ];
    const colorChange = [0,3,4,7, 8]
    return (
        <div  style={{ backgroundColor: "#F8F9E9" }}  className="pb-20">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 text-center pt-10"
                style={{
                    color: "#69696D",
                }}
                data-aos="zoom-in"
                >COMMERCE</h1>
                {/* LISTS STARTS HERE */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:mx-64">
            {
                educationList.map(edu=>(
                    <div className="my-4 mx-10 lg:m-0 bg-white component-container" key={educationList.indexOf(edu)}
                    data-aos="fade-up"
                    data-aos-delay={educationList.indexOf(edu)*50}
                    >
                        <div
                        className="relative   lg:my-0 h-64"
                        style={
                           {
                        backgroundImage:`url('/assets/img/components/${edu.img}')`,
                        backgroundSize:"cover",
                        }
                           }
                        >
                          
                        </div>
                        <div
                            className="pb-4"
                            >

                            <h1
                            className={`text-center font-extrabold text-2xl  px-4 py-4 lg:pt-4 text-gray-600
                            ${edu.title.length>24?" lg:pb-0":""}`
                        }
                           // style={{color:"#69696D"}}
                            >{edu.title.toUpperCase() }</h1>
                            <p className="mx-6  leading-5 text-gray-500">
                        {edu.text}
                        </p>
                        </div>
                        
                    </div>
                ))
            } </div>
        </div>
    );
}
 
export default Commerce;