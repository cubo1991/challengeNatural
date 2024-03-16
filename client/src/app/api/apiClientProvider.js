'use client'

//Provider para poder usar React Toolkit Query
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./apiSlice";


export function ApiClientProvider({ children }) {
  return (
    <ApiProvider api={apiSlice}>
      {children}
    </ApiProvider>
  );
}
