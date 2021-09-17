const MenuItem = ({name, index, onClick}) => {
    return (
        
            <h2 className="px-8 py-2 font-bold my-2 rounded bg-gray-50 hover:bg-gray-200 cursor-pointer"
            
            data-aos="zoom-in-up" 
            data-aos-delay={(index+1)*100}
            onClick={onClick}
            >{name.toUpperCase()}</h2>
        
    );
}
 
export default MenuItem;