'use client'

//Provider para poder usar React Toolkit Query y NextUI
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./apiSlice";
import {NextUIProvider} from "@nextui-org/system";
import { ThemeProvider } from "@/context/ThemeContext";
import { NavBar } from "@/Components/NavBar";



export function ApiClientProvider({ children }) {
  return (
    <ApiProvider api={apiSlice}>
        <ThemeProvider>
        <NextUIProvider>
        <NavBar/>      
      {children}
     
     
   </NextUIProvider>   
   </ThemeProvider>   
    </ApiProvider>
  );
}
