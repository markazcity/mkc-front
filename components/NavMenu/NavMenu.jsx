import MenuItem from './MenuItems'
import {useRouter } from 'next/router'
import SocialIcons from '@/components/SocialIcons'
import { useEffect } from 'react'

export  const mainMenu = [
    {name:"Home", icon:"", to:"/"},
    {name:"About", icon:"", to:"/about"},
    {name:"Components", icon:"", to:"/components"},
    // {name:"Blog", icon:"", to:"/blog"},
    {name:"Careers", icon:"", to:"/careers"},
    {name:"Contact", icon:"", to:"/contact"},
]

export const NavMenu = ({items}) => {

useEffect(() => {
var menu = document.getElementById('mobile-menu');
menu.style.minHeight=window.innerHeight + "px";

},[])


    const router = useRouter();
    const menuItems = items != null?items:mainMenu;
    return (<div className="absolute z-50 bg-violet-700 right-0 top-0 bottom-0 left-0 "
    data-aos="fade-down"
    id="mobile-menu"
    // data-aos-duration="800"
    data-aos-easing="ease-in-out"
    >

        {/* <div
        className="relative w-full h-full"
        > */}
            <div className="absolute right-1 ">

            </div>
            <div className="absolute left-0 bottom-0 text-white p-10">
                <SocialIcons/>
                <div
                className="mt-2"
                >&copy; markazknowledecity</div>
            </div>
            {/* <div className="lg:hidden"><Logo logo="logob" /></div> */}
            
            {/* MENU ITEMS */}

            <div className="pt-32 px-4 pb-4 lg:pt-20">
                {
                    menuItems.map((item)=>{
                        return (
                            <div key={item.name}>
                                <MenuItem 
                                name={item.name} index={menuItems.indexOf(item)}  
                                onClick={()=>router.push(item.to)}/>
                              
                            </div>
                        )
                    })
                }
            </div>
        {/* </div> */}
       
    </div>);
}
 
export const DesktopMenu = ({items, textColor}) => {
 const router = useRouter();
 const menuItems = items != null?items:mainMenu;
 const color = textColor==null?" text-white":textColor;

    return (
        <nav className={"absolute z-30 right-0  top-2 my-5 xl:mr-24 xl:mt-16 rounded "+color}>
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
