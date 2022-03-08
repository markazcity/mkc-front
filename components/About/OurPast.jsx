import Marquee from "react-fast-marquee";



const OurPast = () => {
    const pastList = [
        {"year":"2012", "text":"Foundation Laying", "img":"foundation.jpg"},
        {"year":"2013", "text":"Project Launching", "img":"project-launch.jpg"},
        {"year":"2014", "text":"Inauguration of Markaz Medical College", "img":"unani-inauguration.jpg"},
        {"year":"2013", "text":"Inauguration of Markaz Law College", "img":"inauguration-law-college.jpg"},
        {"year":"2013", "text":"Key Handing over of Taiba Garden-Residential Apartments", "img":"thaiba-key-handing.jpg"},
        {"year":"2013", "text":"Inauguration of Alif Global School", "img":"alif-inauguration.jpg"},
        {"year":"2013", "text":"Inauguration of Tigris Valley Wellness Center", "img":"tigris-inauguration.jpg"},
        {"year":"2013", "text":"Inauguration of Valencia Galleria-Exhibition Centre", "img":"valancia-galleria-inauguration.jpg"},
        {"year":"2013", "text":"Inauguration of AIMER- Business School", "img":"aimer-inauguration.jpg"},

       
       
        
        
    ];
    return (
        <div>
            <h1 className="text-2xl lg:text-5xl font-extrabold mb-5 text-center mx-10"
                style={{
                    color: "#71543D",
                }}
                data-aos="zoom-in"
                >THE JOURNEY SO FAR</h1>

                <p className="text-center mx-10">
                Since the inception of Markaz Knowledge City in 2009, we have made many breakthroughs in our journey.
                </p>
                {/* LISTS STARTS HERE */}
                <div className="">
                <Marquee 
                gradient={false}
                speed={30}
                pauseOnHover={true}
                >
            {
                pastList.map((past,index)=>(
                   
                    <div className="my-6 mx-10" key={index}
                    data-aos="fade-up"
                    data-aos-delay={pastList.indexOf(past)*100}
                    
                    >
                        <center>
                        <div
                        className="relative h-48 w-72 rounded"
                        style={{
                            backgroundColor:"#69696D",
                            background:`url('/assets/img/past/${past.img}')`,
        backgroundSize:'cover',
        backgroundPosition:"center"
                        
                        }}
                        >
                           
                        </div>
                        </center>
                        {/* <h1
                            className="mt-2 w-full text-center text-gray-600 font-extrabold text-2xl"
                            >{past.year}</h1> */}
                        <p className="text-center leading-5 mt-4 text-gray-500">
                        {past.text}
                        </p>
                    </div>
                ))
            } 
               </Marquee>
            </div>
        </div>
    );
}
 
export default OurPast;