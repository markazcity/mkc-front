

const LifeOfMKC = () => {
    const items = [
{
    title:"Education for All",
    img:"education.jpg"
},
{
    title:"Sustainable Environment",
    img:"environment.jpg"
},
{
    title:"Ethical Entrepreneurship",
    img:"entrepreneurship.jpg"
},
{
    title:"Traditional Knowledge",
    img:"traditional.jpg"
},
    ];
    return (
        <div
        //style={{backgroundColor: "#F8F9E9"}}
        className=""
        >
        <div className="px-10 xl:px-96"
        
        >
             {/* <h2 className="font-semibold py-2 text-3xl text-gray-600">THE LIFE OF MKC</h2> */}
</div>
<div className="flex w-full flex-wrap lg:flex-nowrap">
    {
        items.map(item=>
            
            <div
            className="lifeHover h-56 lg:h-96 w-full lg:w-4/12 hover:scale-x-110"
            style={{
                background:`url(/assets/img/life/${item.img})`,
                backgroundSize:"cover",
            }}
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={(items.indexOf(item)+1)*200}
            >
               <div 
                className="flex justify-center items-center h-full w-full bg-black bg-opacity-70 hover:bg-opacity-40 transition-all duration-300">
               
                <span
                className="text-white font-extrabold text-2xl text-center"
                >
                {item.title.toUpperCase()}
                </span>
                </div> 

            </div>
           
            )
    }

</div>
</div>
    );
}
 
export default LifeOfMKC;