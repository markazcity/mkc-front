const OurPast = () => {
    const pastList = [
        {"year":"2012", "text":"Foundation Laying", "img":""},
        {"year":"2013", "text":"Project launching", "img":""},
        {"year":"2014", "text":"Project launching", "img":""},
        
        
    ];
    return (
        <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 text-center"
                style={{
                    color: "#71543D",
                }}
                data-aos="zoom-in"
                >THE JOURNEY SO FAR</h1>

                <p className="text-center mx-10">
                Since the inception of Markaz Knowledge City in 2009, we have made many breakthroughs in our journey.
                </p>
                {/* LISTS STARTS HERE */}
                <div className="grid lg:grid-cols-3 lg:mx-60">
            {
                pastList.map(past=>(
                    <div className="m-6" key={pastList.indexOf(past)}
                    data-aos="fade-up"
                    data-aos-delay={pastList.indexOf(past)*100}
                    >
                        <div
                        className="relative h-48"
                        style={{backgroundColor:"#69696D"}}
                        >
                            <h1
                            className="absolute bottom-3 w-full text-center text-white font-extrabold text-2xl"
                            >{past.year}</h1>
                        </div>
                        <p className="text-center mt-4 leading-5">
                        {past.text}
                        </p>
                    </div>
                ))
            } </div>
        </div>
    );
}
 
export default OurPast;