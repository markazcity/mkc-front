import MenuItem from './MenuItems'
import Logo from '../Logo'

const NavMenu = ({onCloseTap}) => {
    const menuItems = [
        {name:"Home", icon:"", to:""},
        {name:"About", icon:"", to:""},
        {name:"Components", icon:"", to:""},
        {name:"Carrier", icon:"", to:""},
        {name:"Contact", icon:"", to:""},
    ]
    return (<div className="absolute z-11 bg-white rounded right-5 top-5 bottom-5 left-5 lg:left-2/3"
    style={{
        height:"95vh",
    }}
    data-aos="fade-down"
    data-aos-easing="ease-in-out"
    >
        <div
        className="relative"
        >
            <div className="absolute right-1">
            <svg 
            className="absolute z-9 hover:bg-gray-100 navIcon right-5 top-6 h-10 text-gray-400 rounded px-1"
            onClick={()=>{
                onCloseTap()
            }}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
            </div>
            <div className="lg:hidden"><Logo logo="logob" /></div>
            
            {/* MENU ITEMS */}

            <div className="pt-4 lg:pt-20">
                {
                    menuItems.map((item)=>{
                        return (
                            <div>
                                <MenuItem name={item.name} index={menuItems.indexOf(item)}/>
                              
                            </div>
                        )
                    })
                }
            </div>
        </div>
       
    </div>);
}
 
export default NavMenu;
