const Health = () => {
    const healthItems = [
        {"text":""},
        {"text":""},
        {"text":""},
    ];
    return (
        
        <div  data-aos="fade-up-right"
        className="py-10"
      >
             <h1 className="text-5xl font-extrabold mb-5 text-center"
                style={{
                    color: "#B279B4",
                }}
                data-aos="zoom-in"
                >HEALTH</h1>
                <br />
                <p className="mx-10 lg:mx-80 text-justify lg:text-center mb-10"
                data-aos="fade-right">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
laoreet dolore magna aliquam erat volutpat.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
laoreet dolore magna aliquam erat volutpat.    </p>
<div className="grid lg:grid-cols-3 gap-x-6 lg:mx-64 mx-10">
{
    healthItems.map(health=>(
        <div 
        key={health.text}
        className="h-48 my-2"
        style={{background:"#BCC61E"}}
        data-aos="fade-up-right"
            data-aos-delay={healthItems.indexOf(health)*50}
        >
            
        </div>
    ))
}
</div>
        </div>
    );
}
 
export default Health;