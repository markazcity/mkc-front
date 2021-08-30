import { useState } from 'react'
import {NavMenu, DesktopMenu} from "./NavMenu"

const MenuBar = ({icoColor, navItems,}) => {
    const [showMenu, setShowMenu] = useState(false);
    const iconColor = icoColor==null?" text-white":icoColor;
    return (
        <div>
            {/* NAVIGATION MENU SECTION */}
      {/* PC NAVIGATION */}
      <div className="hidden lg:block">
        <DesktopMenu items={navItems} textColor={iconColor}/>
        </div>
    <div className="lg:hidden">
       {showMenu && <NavMenu
        items={navItems}
      onCloseTap={() =>{
        setShowMenu(false);
      }}/>}
      <svg 
      className={"absolute z-40 hover:bg-gray-400 navIcon right-5 top-10 h-10  rounded px-1 "+iconColor}
      onClick={() => {
        setShowMenu(true)
      }}
 xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
</svg> </div>
{/* NAVIGATION SECTION ENDS */}
        </div>
    );
}
 
export default MenuBar;