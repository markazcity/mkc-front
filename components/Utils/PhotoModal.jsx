import { useEffect } from "react";

const PhotoModal = (props) => {
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
        <div className="blur-bg  top-0 bottom-0 left-0 right-0 fixed flex justify-center items-center"

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
            <div className="bg-transparent w-11/12 lg:w-8/12 xl:w-7/12 rounded-2xl "
             data-aos="zoom-in"
            style={{
                zIndex:"200"
            }}
            onClick={(e)=>e.stopPropagation()}
            >
                <div className="flex justify-end mr-4"> 
                <button
                className='text-white hover:bg-red-700 hover:bg-opacity-20 px-2 rounded transition-all duration-200 mb-1'
                onClick={()=>{
                    props.onClose();
                    close()
                }}
                >Close</button>
                </div>
                <div className="flex justify-center">
             <img src={props.link} alt="Markaz Knowledge City" className="rounded-lg" />
                </div>
            
            </div>
        </div>




  
    );
}
 
export default PhotoModal;