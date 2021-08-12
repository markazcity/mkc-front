const OurPast = () => {
    const pastList = [
        {"year":"2010", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2011", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2012", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2013", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2014", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2015", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2016", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2017", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2018", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2019", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2020", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2021", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        
    ];
    return (
        <div>
            <h1 className="text-5xl font-extrabold mb-5 text-center"
                style={{
                    color: "#71543D",
                }}
                data-aos="zoom-in"
                >OUR PAST</h1>
                {/* LISTS STARTS HERE */}
                <div className="grid lg:grid-cols-3 lg:mx-60">
            {
                pastList.map(past=>(
                    <div className="m-6" key={past.year}
                    data-aos="fade-up"
                    data-aos-delay={pastList.indexOf(past)*100}
                    >
                        <div
                        className="relative h-40"
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