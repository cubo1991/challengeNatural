'use client'
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { colorTheme } from "./colorTheme";
import { TypeDropdown } from "./typeDropdown";
import { ThemeContext } from "@/context/ThemeContext";

export const NavBar = () => {
 
  
  const theme = useContext(ThemeContext);
  const [colorContext, setColorContext] = useState(theme.color);
  const [color, setColor] = useState(colorContext);
  
  useEffect(() => {
    setColor(theme.color);
  }, [colorContext, theme.color]);
  

  let colors = colorTheme(color);

 

  

  return (
    <nav className={` ${colors.bg} p-6 flex row justify-between`}>
      <h2 className="text-white text-xl text-center">
        <Link href={"/"} className="hover:text-gray-200 cursor-pointer">
          Home
        </Link>
      </h2>
      <SearchBar />
      <TypeDropdown/>
    </nav>
  );
};

// colorTheme.js

