import { useState } from "react";
import { NavMenu, DesktopMenu } from "./NavMenu";
import { Fade as Hamburger } from "hamburger-react";

const MenuBar = ({ icoColor, navItems }) => {
  const [showMenu, setShowMenu] = useState(false);
  const iconColor = icoColor == null ? " text-white" : icoColor;
  return (
    <div>
      {/* NAVIGATION MENU SECTION */}
      {/* PC NAVIGATION */}
      <div className="hidden xl:block">
        <DesktopMenu items={navItems} textColor={iconColor} />
      </div>
      <div className="xl:hidden">
        {showMenu && (
          <NavMenu
            items={navItems}
            onCloseTap={() => {
              setShowMenu(false);
            }}
          />
        )}
        <div className="absolute z-50 right-0 top-0 mr-10 mt-14">
          <Hamburger
            toggled={showMenu}
            toggle={setShowMenu}
            color={icoColor == null ? "#fff" : "#000"}
            className={"navIcon h-10 " + iconColor}
          />
        </div>
      </div>
      {/* NAVIGATION SECTION ENDS */}
    </div>
  );
};

export default MenuBar;
