const Health = () => {
    const healthItems = [
        {"title":"MIHRAS",
"text":"MIHRAS aims to provide excellent medical care at affordable cost. It also intends to foster a scientific health-culture among people by teaching lessons of healthcare and immunity along with prescribing remedies for different types of illnesses. Markaz Knowledge City has hired well qualified and experienced medical practitioners for the treatment and medication at the hospital.",
"img":"multi.jpg",
"link":"http://www.habitusschool.in/"
} ,
        {
            "title":"Tigris Valley",
            "text":"Tigris Valley is to promote a better lifestyle with traditional wellness concepts. To make people healthier and more energetic, Tigris Valley has set up many facilities inspired by different medical traditions from around the globe. ",
    "img":"tigris.jpg",
    "link":"http://www.habitusschool.in/"

    },
       
    ];
    return (
        
        <div  data-aos="fade-up-right"
        className="pb-10"
      >
             <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 text-center"
                style={{
                    color: "#B279B4",
                }}
                data-aos="zoom-in"
                >HEALTH</h1>
               
                <p className="mx-10 lg:mx-80 text-justify lg:text-center mb-10"
                data-aos="fade-right">
                   </p>
<div className="lg:mx-64 mx-10">



{
    healthItems.map((health,index)=>(
        
        <div 
        key={health.title}
        className="block lg:flex"
        data-aos="fade-up-right"
        data-aos-delay={index*50}
        >
            <div className={ index%2==0?"h-72 lg:h-96  lg:w-6/12 ":"h-72 lg:h-96 lg:w-6/12  order-2"}>
            <div
            className="h-full"
            style={{background:`url('/assets/img/components/${health.img}')`,
        backgroundSize:'cover'
        }}
            ></div></div>


               <div className="lg:w-6/12 px-10 py-10">
               <h1 className="font-extrabold text-2xl mb-2  text-black opacity-80">
                   {health.title.toUpperCase() }</h1> 
                   <p className="text-gray-500">{health.text}</p>
                   <div className="know-more  mt-4 py-2 inline-block cursor-pointer"
                        onClick={
                            ()=>{
                                window.open(edu.link, '_blank')
                            }
                        }
                        > 
                        KNOW MORE
                        <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-2"></div>
                        <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-1"></div>
                        <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-1"></div>
                        </div>
               </div>
            
        </div>
    ))
}
</div>
        </div>
    );
}
 
export default Health;