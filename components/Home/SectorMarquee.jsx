
import Tilt from 'react-parallax-tilt';
import {IoWaterOutline, IoConstructOutline, IoFastFoodOutline} from 'react-icons/io5'
import {BiBookAlt, BiPaint, BiNetworkChart,BiPyramid, BiFootball} from 'react-icons/bi'
import {RiMentalHealthLine, RiBuilding2Line} from 'react-icons/ri'
import {GiPalmTree, GiElectric} from 'react-icons/gi'
import {FiCodesandbox} from 'react-icons/fi'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const SectorMarquee = () => {

useEffect(()=>{

},[])



    const sectors = [
{title:"Education",icon:<BiBookAlt style={{height:"30px", width:"30px"}}/>, link:"/education",
hover:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
},
{title:"Health",icon:<RiMentalHealthLine style={{height:"30px", width:"30px"}}/>, link:"/components#health",
hover:"https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
},
{title:"Tourism",icon:<GiPalmTree style={{height:"30px", width:"30px"}}/>, link:null,
hover:"https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
},
{title:"Entertainment",icon:<BiNetworkChart style={{height:"30px", width:"30px"}}/>, link:null,
hover:"https://images.unsplash.com/photo-1495017790122-c765562a8917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
},
{title:"Entrepreneurship",icon:<RiBuilding2Line style={{height:"30px", width:"30px"}}/>, link:null,
hover:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
},
{title:"Design",icon:<BiPaint style={{height:"30px", width:"30px"}}/>, link:null,
hover:"https://images.unsplash.com/photo-1534159224451-e27efd044c3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
},
{title:"Technology",icon:<FiCodesandbox style={{height:"30px", width:"30px"}}/>, link:null,
hover:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
},
{title:"Manufacturing",icon:<IoConstructOutline style={{height:"30px", width:"30px"}}/>, link:null,
hover:"https://images.unsplash.com/photo-1611117775350-ac3950990985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
},
{title:"Heritage",icon:<BiPyramid style={{height:"30px", width:"30px"}}/>, link:null,
hover:"https://images.unsplash.com/photo-1451422450617-99d28523649e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
},
{title:"Food",icon:<IoFastFoodOutline style={{height:"30px", width:"30px"}}/>, link:null,
hover:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
},
{title:"Energy",icon:<GiElectric style={{height:"30px", width:"30px"}}/>, link:null,
hover:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
},
{title:"Water",icon:<IoWaterOutline style={{height:"30px", width:"30px"}}/>, link:null,
hover:"https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
},
{title:"Sports",icon:<BiFootball style={{height:"30px", width:"30px"}}/>, link:null,
hover:"https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
},

    ];
    const [bgImg, setBgImg] = useState('/assets/img/noisew.png');

    return (<div>
<div className="flex flex-wrap overflow-hidden justify-center py-20 lg:px-72 bg-anim"
style={{
    background:`url('${bgImg}')`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundColor:"#000",
    maxWidth:"100%",
}}
>
    { 
    sectors.map(sec=>
    <SingleItem 
    key={sec.title}
    title={sec.title}
    icon={sec.icon}
    link={sec.link}
    data-aos="fade-right"
    onHover={()=>{
        setBgImg(sec.hover.length>2?sec.hover:"/assets/img/noisew.png");

    }}
    onHoverLeave={()=>{
        setBgImg('/assets/img/noisew.png')
    }}
    />
    )
    }
</div>
    </div>);
}
 
export default SectorMarquee;

const SingleItem = ({title, icon, link, onHover, onHoverLeave}) => {
    const router = useRouter();

    return (
    <div 
    onClick={() => {
        if(link!==null){
            router.push(link)
        }
    }}
    onMouseEnter={onHover}
    onMouseLeave={onHoverLeave}
className="sectorItem bg-violet-600 text-white mx-4 my-3 rounded-full 
 text-center flex justify-center items-center hover:bg-white  
 hover:text-violet-600 border-4 border-violet-600 hover:border-white transition-700 duration-300"
    style={{
        height:"160px",
        width:"160px"
    }}
    >
       <div> 
          <div  className="flex justify-center">
              {icon}
              
              </div> 
<span className="font-light select-none">
{title}
</span></div>
    </div>)
}