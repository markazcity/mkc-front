
import Tilt from 'react-parallax-tilt';
import {IoWaterOutline, IoConstructOutline, IoFastFoodOutline} from 'react-icons/io5'
import {BiBookAlt, BiPaint, BiNetworkChart,BiPyramid, BiFootball} from 'react-icons/bi'
import {RiMentalHealthLine, RiBuilding2Line} from 'react-icons/ri'
import {GiPalmTree, GiElectric} from 'react-icons/gi'
import {FiCodesandbox} from 'react-icons/fi'

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SectorMarquee = () => {

useEffect(()=>{

},[])



    const sectors = [
{title:"Education",icon:<BiBookAlt style={{height:"30px", width:"30px"}}/>, link:"/components#education"},
{title:"Health",icon:<RiMentalHealthLine style={{height:"30px", width:"30px"}}/>, link:"/components#health"},
{title:"Tourism",icon:<GiPalmTree style={{height:"30px", width:"30px"}}/>, link:null},
{title:"Entertainment",icon:<BiNetworkChart style={{height:"30px", width:"30px"}}/>, link:null},
{title:"Entrepreneurship",icon:<RiBuilding2Line style={{height:"30px", width:"30px"}}/>, link:null},
{title:"Design",icon:<BiPaint style={{height:"30px", width:"30px"}}/>, link:null},
{title:"Technology",icon:<FiCodesandbox style={{height:"30px", width:"30px"}}/>, link:null},
{title:"Manufacturing",icon:<IoConstructOutline style={{height:"30px", width:"30px"}}/>, link:null},
{title:"Heritage",icon:<BiPyramid style={{height:"30px", width:"30px"}}/>, link:null},
{title:"Food",icon:<IoFastFoodOutline style={{height:"30px", width:"30px"}}/>, link:null},
{title:"Energy",icon:<GiElectric style={{height:"30px", width:"30px"}}/>, link:null},
{title:"Water",icon:<IoWaterOutline style={{height:"30px", width:"30px"}}/>, link:null},
{title:"Sports",icon:<BiFootball style={{height:"30px", width:"30px"}}/>, link:null},

    ];
    return (<div>
<div className="flex flex-wrap overflow-hidden justify-center py-20 lg:px-72 "
style={{
    background:"url('/assets/img/noisew.png')",
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
    />
    )
    }
</div>
    </div>);
}
 
export default SectorMarquee;

const SingleItem = ({title, icon, link}) => {
    const router = useRouter();

    return (
    <div 
    onClick={() => {
        if(link!==null){
            router.push(link)
        }
    }}
className="sectorItem bg-violet-600 text-white mx-4 my-3 rounded-full text-center flex justify-center items-center hover:bg-transparent  hover:text-violet-600 border-4 border-violet-600 transition-700 duration-300"
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