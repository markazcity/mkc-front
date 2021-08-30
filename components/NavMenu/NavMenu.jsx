import MenuItem from './MenuItems'
import {useRouter } from 'next/router'


export  const mainMenu = [
    {name:"Home", icon:"", to:"/"},
    {name:"About", icon:"", to:"/about"},
    {name:"Components", icon:"", to:"/components"},
    {name:"Blog", icon:"", to:"/blog"},
    {name:"Carrier", icon:"", to:"/"},
    {name:"Contact", icon:"", to:"/"},
]

export const NavMenu = ({onCloseTap, items}) => {
    const router = useRouter();
    const menuItems = items != null?items:mainMenu;
    return (<div className="absolute z-50 bg-white rounded right-5 top-5  lg:left-2/3"
    style={{
        height:"auto",
    }}
    data-aos="fade-down"
    data-aos-easing="ease-in-out"
    >
        <div
        className="relative"
        >
            <div className="absolute right-1">
            <svg 
            className="absolute z-10 hover:bg-gray-100 navIcon right-5 top-6 h-6 text-gray-400 rounded px-1"
            onClick={()=>{
                onCloseTap()
            }}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
            </div>
            {/* <div className="lg:hidden"><Logo logo="logob" /></div> */}
            
            {/* MENU ITEMS */}

            <div className="pt-14 px-4 pb-4 lg:pt-20">
                {
                    menuItems.map((item)=>{
                        return (
                            <div key={item.name}>
                                <MenuItem name={item.name} index={menuItems.indexOf(item)}  onClick={()=>router.push(item.to)}/>
                              
                            </div>
                        )
                    })
                }
            </div>
        </div>
       
    </div>);
}
 
export const DesktopMenu = ({items, textColor}) => {
 const router = useRouter();
 const menuItems = items != null?items:mainMenu;
 const color = textColor==null?" text-white":textColor;

    return (
        <nav className={"absolute z-10 right-0 top-5 m-10 rounded px-1"+textColor}>
            {
                menuItems.map((menuItem)=>(
                    <a key={menuItem.name} onClick={()=>{
                        router.push(menuItem.to)
                    }}
                    className="py-1 mx-2 border-b-4 border-transparent menu-item"
                    style={
                   {
                        transition:"0.5s ease"}
                    }
                    >{menuItem.name}</a>
                ))
            }
        </nav>
    )
}
