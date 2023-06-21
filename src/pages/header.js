import React from 'react';
import { Button, Icon } from "@mui/material";

const Header = ({ logoSource, logoAlt, menuIconSource, menuIconAlt }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-[0px_4px_8px_rgba(79,_94,_113,_0.1),_0px_2px_4px_rgba(79,_94,_113,_0.11),_0px_0px_2px_rgba(79,_94,_113,_0.12)] w-full h-16 overflow-hidden">
      <img
        className="absolute top-[22px] left-[82px] w-10 h-5 hidden"
        alt={menuIconAlt}
        src={menuIconSource}
      />
      <img
        className="absolute top-[4px] left-[calc(50%_-_73px)] w-[145px] h-14 object-cover"
        alt={logoAlt}
        src={logoSource}
      />
    </header>
  );
};

// Set default props
Header.defaultProps = {
  logoSource: "/logo-foodlabsweb-1@2x.png",
  logoAlt: "Food Lab Logo",
  menuIconSource: "/menu-items-compact.svg",
  menuIconAlt: "Menu"
};

export default Header;
