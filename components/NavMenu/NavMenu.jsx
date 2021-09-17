import MenuItem from './MenuItems'
import {useRouter } from 'next/router'

export  const mainMenu = [
    {name:"Home", icon:"", to:"/"},
    {name:"About", icon:"", to:"/about"},
    {name:"Components", icon:"", to:"/components"},
    {name:"Blog", icon:"", to:"/blog"},
    {name:"Careers", icon:"", to:"/careers"},
    {name:"Contact", icon:"", to:"/contact"},
]

export const NavMenu = ({items}) => {
    const router = useRouter();
    const menuItems = items != null?items:mainMenu;
    return (<div className="absolute z-50 bg-transparent rounded right-0 top-10 mr-10"
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
        <nav className={"absolute z-10 right-0  top-2 my-5 xl:mr-24 xl:mt-16 rounded "+color}>
            {
                menuItems.map((menuItem)=>(
                    <a key={menuItem.name} onClick={()=>{
                        router.push(menuItem.to)
                    }}
                    className="py-1 border-b-4 border-transparent menu-item"
                    style={
                   {
                        transition:"0.5s ease"}
                    }
                    >{menuItem.name.toUpperCase()}</a>
                ))
            }
        </nav>
    )
}
