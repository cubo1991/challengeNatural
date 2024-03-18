'use client'
import { ThemeContext } from "@/context/ThemeContext";

import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import { useState, useEffect, useContext } from "react";

export const TypeDropdown = () => {
    const theme = useContext(ThemeContext)
    const [selectedItem, setSelectedItem] = useState('water');
   
    useEffect(() => {
        theme.chooseTheme(selectedItem)
        
    }, [selectedItem]);

    return (
      <Dropdown>
        <DropdownTrigger>
          <button  className="text-white text-xl text-center"   
          >
            Color Theme
          </button>
        </DropdownTrigger>
        <DropdownMenu style={{ maxHeight: "200px", overflowY: "auto", position: 'relative', top: '0.8rem', background:'rgba(1,1,1,0.5)', color: "white" }} aria-label="Static Actions">
          <DropdownItem color='danger' onAction={() => setSelectedItem("fire")} key='fire'>Fire</DropdownItem>  
          <DropdownItem color='danger' onAction={() => setSelectedItem("water")} key='water'>Water</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("grass")} key='grass'>Grass</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("electric")} key='electric'>Electric</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("ice")} key='ice'>Ice</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("fighting")} key='fighting'>Fighting</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("poison")} key='poison'>Poison</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("ground")} key='ground'>Ground</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("flying")} key='flying'>Flying</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("psychic")} key='psychic'>Psychic</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("bug")} key='bug'>Bug</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("rock")} key='rock'>Rock</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("ghost")} key='ghost'>Ghost</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("dragon")} key='dragon'>Dragon</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("dark")} key='dark'>Dark</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("steel")} key='steel'>Steel</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("fairy")} key='fairy'>Fairy</DropdownItem>
          <DropdownItem color='danger' onAction={() => setSelectedItem("normal")} key='normal'>Normal</DropdownItem>       

        </DropdownMenu>
      </Dropdown>
    );
  }
  
  