import { useEffect } from "react";

const VideoModal = (props) => {
    useEffect(() => {
        if(document){
            document.getElementsByTagName('body')[0].classList.add('noScroll');
        }
    },[])

   function close(){
    if(document){
        document.getElementsByTagName('body')[0].classList.remove('noScroll');
    }
   } 
    return (
        <div className="bg-black bg-opacity-50  top-0 bottom-0 left-0 right-0 fixed flex justify-center items-center"
        onClick={()=>{
            props.onClose();
            close()
        }}
        style={{
            minHeight: '100vh',
            minWidth: '100vw',
            zIndex:"9999",
            
        }}
        >
            <div className="bg-white w-11/12 lg:w-8/12 xl:w-7/12 rounded-2xl "
                data-aos="zoom-in"
            style={{
                zIndex:"200"
            }}
            onClick={(e)=>e.stopPropagation()}
            >
                <div className="flex justify-center">
                <video className="w-full rounded-2xl" controls autoPlay={true}>
  <source src={props.link} type="video/mp4"/>
Your browser does not support the video tag.
</video>
                </div>
            
            </div>
        </div>




  
    );
}
 
export default VideoModal;