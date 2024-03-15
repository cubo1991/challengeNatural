import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

export const NavBar = () => {


  return (
    <nav className="bg-blue-500 p-6 flex row justify-between">
      <h2 className="text-white text-xl text-center">
        <Link href={"/"} className=" hover:text-gray-200 cursor-pointer">
          Home
        </Link>
      </h2>
      <SearchBar />
    </nav>
  );
};
