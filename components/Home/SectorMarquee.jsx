
import Tilt from 'react-parallax-tilt';


const SectorMarquee = () => {
    const sectors = [
{title:"Education",},
{title:"Health",},
{title:"Tourism",},
{title:"Entertainment",},
{title:"Entrepreneurship",},
{title:"Design",},
{title:"Technology",},
{title:"Manufacturing",},
{title:"Heritage",},
{title:"Food",},
{title:"Energy",},
// {title:"Water",},
{title:"Sports",},

    ];
    return (<div>
<div className="flex flex-wrap overflow-hidden justify-center py-20"
style={{maxWidth:"100%",
}}
>
    { 
    sectors.map(sec=>
    <SingleItem 
    key={sec.title}
    title={sec.title}
    data-aos="fade-right"
    />
    )
    }
</div>
    </div>);
}
 
export default SectorMarquee;

const SingleItem = ({title}) => {
    return (
       
    <div 
className="bg-black text-white mx-4 my-2 rounded-full text-center flex justify-center items-center hover:bg-transparent hover:text-black border-4 border-black transition-700 duration-300"
    style={{
        height:"160px",
        width:"160px"
        
    }}
   
    >
<span className="font-bold">
{title}
</span>
    </div>)
}