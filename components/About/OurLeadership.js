const OurLeaderShip = () => {
    const picBg = {
        backgroundColor:"#A17CA1"
    };
    const picCommonStyle = "mx-2";
    return (
        <div 
        className="py-10"
        style={{
            backgroundColor:"#E7E9E4"
        }}
        >
             <h1 className="text-5xl font-extrabold mb-5 text-center"
                style={{
                    color: "#28062B",
                }}
                data-aos="zoom-in"
                >OUR LEADERSHIP</h1>
                <br />
                <p className="mx-10 lg:mx-60 text-justify lg:text-center mb-10"
                data-aos="fade-right"
                >
                Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in 
hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros  <br />
                </p>
                <section className="mx-10 lg:grid lg:grid-cols-3 lg:mx-72 items-end text-center mb-16">
        <div className="text-center lg:order-2"  data-aos="fade-down">
            <div className="mx-4 h-80 rounded-3xl mb-2 my-4" style={picBg}></div>
            <span className="font-extrabold">Shaikh Aboobacker Ahmed</span>
            <br />
            <span> (Founder)</span>
          </div>
          <div  className="text-center lg:order-1 my-4"  data-aos="fade-down">
            <div className="mx-2 h-60 rounded-3xl mb-2" style={picBg}></div>
            <span className="font-extrabold">
              Dr Muhammed Abdul Hakkem Azhari
            </span>
            <br />
            <span> (Managing Director)</span>
          </div>
         
          <div className="text-center lg:order-3 my-4"  data-aos="fade-down">
            <div className="mx-2 h-60 rounded-3xl mb-2" style={picBg}></div>
            <span className="font-extrabold">Dr Abdul Salam</span> <br />
            <span>(Chief Executive Officer)</span>
          </div>
        </section>
        </div>
    );
}
 
export default OurLeaderShip;