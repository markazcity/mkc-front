const OurLeaderShip = () => {
    const picBg = {
        backgroundColor:"#A17CA1"
    };
    const picCommonStyle = "mx-2";
    return (
      <div id="leadership">
        <div 
        className="py-10"
        style={{
            backgroundColor:"#E7E9E4"
        }}
        >
             <h1 className="text-2xl lg:text-5xl font-extrabold mb-5 text-center"
                style={{
                    color: "#28062B",
                }}
                data-aos="zoom-in"
                >OUR LEADERSHIP</h1>
                <br />
                <p className="mx-10 lg:mx-96 text-justify lg:text-center mb-10"
                data-aos="fade-right"
                >
                  A decade ago, <i>Shaikh Aboobacker Ahmed</i> shared his vision 
                  about the future of education and the development of society with his 
                  cohorts in Jamia Markaz. This led to the creation of 
                  Markaz Knowledge City in 2009, 
                  under the leadership of <i>Dr. Muhammed Abdul Hakeem Azhari</i>. 
<br />
Over the course of time, various experts in the fields of education, 
literature, science, technology, and business have come together to sit
 around the table and execute the vision. In addition to their endeavors,
  many young minds also have contributed immensely to the development of 
  Markaz Knowledge City ever since. The following are our central leadership:  
               <br />
                </p>
                <div className="leadersMargin">
                <section className="mx-10 lg:grid lg:grid-cols-3 lg:mx-72 items-baseline text-center mb-16">
        <div className="text-center lg:order-2"  data-aos="fade-down">
            <div className="flex justify-center "><div className="mx-4 h-80 w-60 rounded-3xl mb-2 my-4 " 
             style={{
              background:"url(/assets/img/usthad.png)",
              backgroundSize:"cover",
              backgroundPosition:"center",
              
            }}
            ></div></div>
            <span className="font-extrabold">Sheikh Abubakr Ahmad</span>
            <br />
            <span> (Founder)</span>
          </div>
          <div  className="text-center lg:order-1 my-4"  data-aos="fade-down">
          <div className="flex justify-center ">
            <div className="mx-2 h-60 w-60 rounded-3xl mb-2" style={{
              background:"url(/assets/img/mah.png)",
              backgroundSize:"cover",
              backgroundPosition:"center",
              
            }}></div></div>
            <span className="font-extrabold">
              Dr Muhammed Abdul Hakkem Azhari
            </span>
            <br />
            <span> (Managing Director)</span>
          </div>
         
          <div className="text-center lg:order-3 my-4"  data-aos="fade-down">
          <div className="flex justify-center ">
            <div className="mx-2 h-60 w-60 rounded-3xl mb-2" 
             style={{
              background:"url(/assets/img/drs.png)",
              backgroundSize:"cover",
              backgroundPosition:"center",
              
            }}
            ></div></div>
            <span className="font-extrabold">Dr Abdul Salam</span> <br />
            <span>(Chief Executive Officer)</span>
          </div>
        </section>
        </div>
        </div></div>
    );
}
 
export default OurLeaderShip;