const MenuItem = ({name, index, onClick}) => {
    return (
        
            <h2 className="px-8 py-4 text-xl font-bold mx-2 my-2 rounded bg-gray-50 hover:bg-gray-200"
            data-aos="zoom-in-up" 
            data-aos-delay={(index+1)*100}
            onClick={onClick}
            >{name}</h2>
        
    );
}
 
export default MenuItem;