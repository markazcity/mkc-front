const Dialog = (props) => {
    return (
        <div className=" bg-black bg-opacity-30 top-0 bottom-0 left-0 right-0 fixed flex justify-center items-center"
        onClick={()=>props.onClose()}
        style={{
            minHeight: '100vh',
            minWidth: '100vw',
            zIndex:"99"
        }}
        >
            <div className="bg-white p-10 rounded-lg"
            style={{
                minWidth:"30rem",
                zIndex:"200"
            }}
            onClick={(e)=>e.stopPropagation()}
            >
            {props.children}
            </div>
        </div>
    );
}
 
export default Dialog;