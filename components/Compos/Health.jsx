const Health = () => {
    const healthItems = [
        {
            "title":"Multi-specialty Hospital",
            "text":"The hundred bedded hospital aims to provide excellent medical care at affordable cost. It also intends to foster a scientific health-culture among people by teaching lessons of healthcare and immunity along with prescribing remedies for different types of illnesses. Markaz Knowledge City has hired well qualified and experienced medical practitioners for the treatment and medication at the hospital. ",
    "img":"multi.jpg"
    },
        {
            "title":"Tigris Valley",
            "text":"Tigris Valley is to promote a better lifestyle with traditional wellness concepts. To make people healthier and more energetic, Tigris Valley has set up many facilities inspired by different medical traditions from around the globe. ",
    "img":"tigris.jpg"
    },
        {
            "title":"MAZRA",
            "text":"Markaz Alliance for Zero Waste Reforestation and Agriculture (MAZRA) is an integrated project that purposes to regain the agricultural heredity of Kerala. MAZRA runs several scientific projects under the supervision of experts, cooperating with the different projects and schemes of state-central governments. MAZRA has designed seven projects blending the conventional forms of agricultural and animal husbandry in Kerala with the modern technology. ",
    "img":"mazra.jpg"
    },
    ];
    return (
        
        <div  data-aos="fade-up-right"
        className="py-10"
      >
             <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 text-center"
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
        key={health.title}
        className="my-2"
        data-aos="fade-up-right"
        data-aos-delay={healthItems.indexOf(health)*50}
        >
            <div className="h-48 mb-2">
            <div
            className="h-full"
            style={{background:`url('/assets/img/components/${health.img}')`,
        backgroundSize:'cover'
        }}
            ></div></div>
               <h1
                            className={`text-center font-extrabold text-xl  py-8 px-0 lg:p-8 text-black opacity-80`
                        }
                           // style={{color:"#69696D"}}
                            >{health.title.toUpperCase() }</h1>
            
        </div>
    ))
}
</div>
        </div>
    );
}
 
export default Health;