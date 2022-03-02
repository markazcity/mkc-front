import {RiMentalHealthFill} from "react-icons/ri";
import {BsBookHalf} from "react-icons/bs";
import {HiUserGroup} from "react-icons/hi";
import {BiBuildings, BiStore} from "react-icons/bi";
import {RiPlantLine} from "react-icons/ri";


const Categories = () => {
    const iconClass= "text-minigreen-800 m-4 text-2xl";
    const items = [
{
    title:"Education",
    icon:<BsBookHalf className={iconClass}/>
},
{
    title:"Health",
    icon:<RiMentalHealthFill className={iconClass}/>
},
{
    title:"Culture",
    icon:<HiUserGroup className={iconClass}/>
},
{
    title:"Living",
    icon:<BiBuildings className={iconClass}/>
},
{
    title:"Commerce",
    icon:<BiStore className={iconClass}/>
},
{
    title:"Agriculture",
    icon:<RiPlantLine className={iconClass}/>
},
    ];
    return (
        <div
        style={{backgroundColor: "rgba(231, 232, 227,0.2)"}}
        className="py-8"
        >
            <h2 className="text-3xl text-center font-extrabold my-5 text-minigreen-700">LIFE AT MKC</h2>
        <div className="px-10 xl:px-96"
        
        >
             {/* <h2 className="font-semibold py-2 text-3xl text-gray-600">THE LIFE OF MKC</h2> */}
</div>
<div className="grid lg:grid-cols-4 xl:grid-cols-6 mx-10 lg:mx-32 3xl:mx-64">
    {
        items.map(item=>
            <div
            className="w-full col-span-2 cursor-pointer"
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={(items.indexOf(item)+1)*200}
            >
               <div 
                className="cat-card pb-10 rounded-xl m-6 transition-all duration-300">
             <div className="flex justify-center h-44 rounded-t-xl"
             style={{
                 background:`url('/assets/img/life/${item.title.toLowerCase()}.jpg')`,
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    backgroundRepeat:"no-repeat"

             }}
             >

             {/* <div className="inline-flex justify-center mb-3 bg-minigreen-600 bg-opacity-30  rounded-full ">
             {item.icon}
             </div> */}
             </div>
                <div
                className="text-minigreen-700 font-extrabold lg:text-3xl text-2xl text-center mt-4"
                >
                {item.title}
                </div>
                <p className="py-2 text-gray-500 px-10">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quis soluta obcaecati, 
                    optio nisi qui nobis. Facilis assumenda esse a inventore.
                </p>
                </div> 

            </div>
           
            )
    }

</div>
</div>
    );
}
 
export default Categories;