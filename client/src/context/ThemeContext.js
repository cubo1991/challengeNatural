'use client'
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState('water');
  
  const chooseTheme = (color) => {
    setColor(color);
  };

  return (
    <ThemeContext.Provider value={{ color, chooseTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
