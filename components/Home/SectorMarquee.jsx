
import Tilt from 'react-parallax-tilt';
import {IoWaterOutline, IoConstructOutline, IoFastFoodOutline} from 'react-icons/io5'
import {BiBookAlt, BiPaint, BiNetworkChart,BiPyramid, BiFootball} from 'react-icons/bi'
import {RiMentalHealthLine, RiBuilding2Line} from 'react-icons/ri'
import {GiPalmTree, GiElectric} from 'react-icons/gi'
import {FiCodesandbox} from 'react-icons/fi'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const SectorMarquee = () => {


    function onHoverBg(){
        let bg = document.getElementById('bgOverlay');
        bg.style.backgroundColor = "rgba(0,0,0,0.6)";
    }

    function onReleaseBg(){
        let bg = document.getElementById('bgOverlay');
        bg.style.backgroundColor = "rgba(0,0,0,0)";
    }





    const sectors = [
{title:"Education",icon:<BiBookAlt style={{height:"30px", width:"30px"}}/>, link:"/comp/education",
},
{title:"Health",icon:<RiMentalHealthLine style={{height:"30px", width:"30px"}}/>, link:"/comp/health",
},
{title:"Tourism",icon:<GiPalmTree style={{height:"30px", width:"30px"}}/>, link:null,
},
{title:"Entertainment",icon:<BiNetworkChart style={{height:"30px", width:"30px"}}/>, link:null,
},
{title:"Entrepreneurship",icon:<RiBuilding2Line style={{height:"30px", width:"30px"}}/>, link:null,
},
{title:"Design",icon:<BiPaint style={{height:"30px", width:"30px"}}/>, link:null,
},
{title:"Technology",icon:<FiCodesandbox style={{height:"30px", width:"30px"}}/>, link:null,
},
{title:"Manufacturing",icon:<IoConstructOutline style={{height:"30px", width:"30px"}}/>, link:null,
},
{title:"Heritage",icon:<BiPyramid style={{height:"30px", width:"30px"}}/>, link:null,
},
{title:"Food",icon:<IoFastFoodOutline style={{height:"30px", width:"30px"}}/>, link:null,
},
{title:"Energy",icon:<GiElectric style={{height:"30px", width:"30px"}}/>, link:null,
},
{title:"Water",icon:<IoWaterOutline style={{height:"30px", width:"30px"}}/>, link:null,
},
{title:"Sports",icon:<BiFootball style={{height:"30px", width:"30px"}}/>, link:null,
},

    ];
    const [bgImg, setBgImg] = useState('/assets/img/noisew.png');

    return (<div 
        className="relative"
        style={{width:"100vw", 
        minWidth:"100vw",
        height:"100%",
    }}
        >
        <div className="absolute "
        
        style={{
        backgroundImage:`url('${bgImg}')`,
        width:'100%',
        height:"100%",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        transition:'all 0.3s ease-in-out',
        backgroundPosition:"center",
        backgroundColor:"#000",
        zIndex:"-2"
        
    }}
        >

        </div>
        <div className="absolute "
        id="bgOverlay"
        style={{
        width:'100%',
        height:"100%",
        transition:'all 0.3s ease-in-out',
        backgroundColor:"rgba(0,0,0,0)",
        zIndex:"-1"

    }}
        >

        </div>
<div className="flex flex-wrap overflow-hidden justify-center py-20 lg:px-72 3xl:mx-36 bg-anim"

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
        setBgImg(`/assets/img/sectors/${sec.title.toLowerCase()}.jpg`);
       onHoverBg();

    }}
    onHoverLeave={()=>{
        setBgImg('/assets/img/noisew.png')
        onReleaseBg()
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
className="sectorItem  text-white mx-4 my-3 rounded-full 
 text-center flex justify-center items-center  "
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