import Marquee from "react-fast-marquee";

const OurPast = () => {
    const pastList = [
        {"year":"2012", "text":"Foundation Laying", "img":""},
        {"year":"2013", "text":"Project launching", "img":""},
        {"year":"2014", "text":"Unani Medical College Inaugration", "img":""},
        {"year":"2014", "text":"Unani Medical College Inaugration", "img":""},
        {"year":"2014", "text":"Unani Medical College Inaugration", "img":""},
       
        
        
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
                pastList.map(past=>(
                    <div className="my-6 mx-10" key={pastList.indexOf(past)}
                    data-aos="fade-up"
                    data-aos-delay={pastList.indexOf(past)*100}
                    >
                        <div
                        className="relative h-48 w-72 rounded"
                        style={{
                            backgroundColor:"#69696D",
                            background:`url('/assets/img/past/${past.year}.jpg')`,
        backgroundSize:'cover',
        backgroundPosition:"center"
                        
                        }}
                        >
                           
                        </div>
                        <h1
                            className="mt-2 w-full text-center text-gray-600 font-extrabold text-2xl"
                            >{past.year}</h1>
                        <p className="text-center leading-5">
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