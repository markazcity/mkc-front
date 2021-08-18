import MenuItem from './MenuItems'
import Logo from '../Logo'
import {useRouter } from 'next/router'


export  const menuItems = [
    {name:"Home", icon:"", to:"/"},
    {name:"About", icon:"", to:"/about"},
    {name:"Components", icon:"", to:"/components"},
    {name:"Blog", icon:"", to:"/blog"},
    {name:"Carrier", icon:"", to:"/"},
    {name:"Contact", icon:"", to:"/"},
]

export const NavMenu = ({onCloseTap}) => {
    const router = useRouter()

    return (<div className="absolute bg-white rounded right-5 top-5  lg:left-2/3"
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
            className="absolute z-9 hover:bg-gray-100 navIcon right-5 top-6 h-6 text-gray-400 rounded px-1"
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
 
export const DesktopMenu = () => {
 const router = useRouter()

    return (
        <nav className="absolute z-30 right-0 top-0 m-10 text-white rounded px-1">
            {
                menuItems.map((menuItem)=>(
                    <a key={menuItem.name} onClick={()=>router.push(menuItem.to)}
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
