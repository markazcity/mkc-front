const OurPhilosophy = ({dataset}) => {
    const data = dataset[0];

    return data!=null?(
        <div id="philosophy">
        <div  data-aos="fade-up-right"
        className="py-10"
        style={{
            backgroundColor:"#F8F9E9"
        }}>
             <h1 className="text-2xl lg:text-5xl font-extrabold  text-center"
                style={{
                    color: "#B279B4",
                }}
                data-aos="zoom-in"
                >{data.wc_title}</h1>
                <br />
                <p className="mx-10 lg:mx-96 text-justify lg:text-center"
                data-aos="fade-right">
                   <span dangerouslySetInnerHTML={{__html: data.wc_body}}></span>

                </p>
        </div></div>
    ):(
        <span></span>
    );
}
 
export default OurPhilosophy;