'use client'

//Provider para poder usar React Toolkit Query y NextUI
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./apiSlice";
import {NextUIProvider} from "@nextui-org/system";


export function ApiClientProvider({ children }) {
  return (
    <ApiProvider api={apiSlice}>
        <NextUIProvider>      
      {children}
      </NextUIProvider>
    </ApiProvider>
  );
}
